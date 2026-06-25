"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { Play } from "lucide-react";

// Generate a classic Minecraft dark dirt background texture
const getDirtPattern = () => {
  const colors = ['#484848', '#383838', '#282828', '#585858', '#181818'];
  // Hardcoded 8x8 noise pattern to prevent hydration mismatch
  const grid = [
    [1, 2, 1, 3, 2, 4, 1, 2],
    [3, 1, 4, 1, 5, 2, 3, 1],
    [2, 3, 1, 2, 1, 4, 2, 5],
    [1, 4, 2, 3, 2, 1, 3, 2],
    [4, 1, 3, 1, 4, 2, 1, 3],
    [2, 5, 1, 4, 1, 3, 2, 1],
    [1, 2, 4, 2, 3, 1, 4, 2],
    [3, 1, 2, 5, 1, 2, 1, 3]
  ];
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">`;
  for(let y=0; y<8; y++){
    for(let x=0; x<8; x++){
      svg += `<rect x="${x*8}" y="${y*8}" width="8" height="8" fill="${colors[grid[y][x]-1]}" />`;
    }
  }
  svg += `</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export default function EntryLoader({ onComplete }) {
  const [loading, setLoading] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const containerRef = useRef(null);
  const chunksRef = useRef([]);

  // Create a 15x15 chunk grid (authentic Java edition look)
  const gridSize = 15;
  const chunks = [];
  const center = Math.floor(gridSize / 2);
  
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      // Calculate Chebyshev distance (creates expanding square pattern)
      const distance = Math.max(Math.abs(x - center), Math.abs(y - center));
      chunks.push({ id: `${x}-${y}`, x, y, distance });
    }
  }

  // Sort chunks by distance from center
  chunks.sort((a, b) => a.distance - b.distance);

  const startLoading = () => {
    setLoading(true);

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
          onComplete
        });
      }
    });

    tl.to(".welcome-content", {
      opacity: 0,
      y: -50,
      duration: 0.5,
      ease: "power2.in"
    });

    tl.to(".loading-content", {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out"
    });

    // Animate percentage
    tl.to({ val: 0 }, {
      val: 100,
      duration: 2.5,
      ease: "power1.inOut",
      onUpdate: function() {
        setPercentage(Math.floor(this.targets()[0].val));
      }
    }, "start");

    // Animate chunks filling in (turning green)
    // We animate a CSS variable or background color
    tl.fromTo(chunksRef.current, 
      { backgroundColor: "rgba(0, 0, 0, 0.4)" },
      {
        backgroundColor: "#7CFC00", // Bright Minecraft Grass green
        duration: 0.1,
        stagger: {
          each: 0.01,
          from: "start"
        },
        ease: "none"
      },
      "start"
    );

    tl.to(".loading-content", {
      opacity: 0,
      scale: 1.1,
      duration: 0.8,
      delay: 0.5,
      ease: "power3.in"
    });
  };

  const setChunkRef = (el) => {
    if (el && !chunksRef.current.includes(el)) {
      chunksRef.current.push(el);
    }
  };

  const bgPattern = getDirtPattern();

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center px-4 overflow-hidden"
      style={{ 
        imageRendering: 'pixelated', 
        backgroundColor: '#282828',
        backgroundImage: `url("${bgPattern}")`,
        backgroundSize: '128px 128px',
        boxShadow: 'inset 0 0 150px rgba(0,0,0,0.8)'
      }}
    >
      {/* INITIAL STATE: Welcome Screen */}
      {!loading && (
        <div className="welcome-content relative z-10 text-center flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase drop-shadow-[0_4px_0_rgba(0,0,0,1)]">
            Willkommen im<br/><span className="text-green-400">Huen Ecosystem</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-lg bg-black/40 p-4 border-[4px] border-black" style={{ textShadow: '2px 2px 0 #000' }}>
            Bereit für das ultimative Survival-Erlebnis? Klicke auf 'Ja', um die Seite mit Musik und Animationen zu betreten.
          </p>
          
          <button 
            onClick={startLoading}
            className="mc-btn flex items-center justify-center gap-4 px-16 py-6 text-3xl font-black text-white bg-green-600 hover:bg-green-500 hover:scale-105 transition-transform" 
            style={{ textShadow: '2px 2px 0 #000' }}
          >
            <Play className="fill-current w-8 h-8" />
            JA, ICH BIN BEREIT
          </button>
        </div>
      )}

      {/* LOADING STATE: 2D Chunk Generation Map */}
      <div className="loading-content absolute inset-0 flex flex-col items-center justify-center opacity-0 pointer-events-none">
        
        {/* Texts */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-[0_2px_0_rgba(0,0,0,1)] uppercase tracking-wider font-mc">
          Landschaft wird generiert...
        </h2>
        <div className="text-xl text-white font-mc mb-12 drop-shadow-[0_2px_0_rgba(0,0,0,1)]">
          {percentage}%
        </div>
        
        {/* Java Edition Chunk Generation Grid */}
        <div 
          className="relative grid gap-0.5 p-1 bg-black/20"
          style={{ 
            gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
            width: '240px',
            height: '240px'
          }}
        >
          {chunks.map((chunk, i) => (
            <div 
              key={chunk.id}
              ref={setChunkRef}
              className="w-full h-full"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
