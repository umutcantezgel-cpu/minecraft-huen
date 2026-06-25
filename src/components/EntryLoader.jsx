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
  // In modern browsers, we can just use the utf8 string directly for SVG data URIs, or btoa if safe.
  // Using encodeURIComponent is safe for SSR.
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export default function EntryLoader({ onComplete }) {
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);
  const blocksRef = useRef([]);

  // Create a 7x7 grid
  const gridSize = 7;
  const blocks = [];
  
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      // Calculate distance from center for spiral/circle effect
      const centerX = Math.floor(gridSize / 2);
      const centerY = Math.floor(gridSize / 2);
      const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
      
      blocks.push({ x, y, distance });
    }
  }

  // Sort blocks by distance so they animate from center outwards
  blocks.sort((a, b) => a.distance - b.distance);

  const startLoading = () => {
    setLoading(true);

    const tl = gsap.timeline({
      onComplete: () => {
        // Finally fade out the whole overlay
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
          onComplete
        });
      }
    });

    // Fade out the initial welcome text
    tl.to(".welcome-content", {
      opacity: 0,
      y: -50,
      duration: 0.5,
      ease: "power2.in"
    });

    // Fade in the loading text and grid container
    tl.to(".loading-content", {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out"
    });

    // Animate blocks dropping in
    tl.fromTo(blocksRef.current,
      { 
        y: -500, 
        opacity: 0,
        scale: 0
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.05,
        ease: "bounce.out"
      }
    );

    // After blocks are built, zoom into the center block to transition to the actual page
    tl.to(".isometric-grid", {
      scale: 20,
      opacity: 0,
      duration: 1.5,
      ease: "power4.in",
      delay: 0.5
    });
  };

  const setBlockRef = (el) => {
    if (el && !blocksRef.current.includes(el)) {
      blocksRef.current.push(el);
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
        backgroundSize: '128px 128px', // Scale it up to look chunky
        boxShadow: 'inset 0 0 150px rgba(0,0,0,0.8)' // Classic Minecraft vignette
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

      {/* LOADING STATE: 3D Chunk Building */}
      <div className="loading-content absolute inset-0 flex flex-col items-center justify-center opacity-0 pointer-events-none">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-20 drop-shadow-[0_4px_0_rgba(0,0,0,1)] uppercase tracking-wider font-mc">
          Landschaft wird generiert...
        </h2>
        
        {/* Isometric Container */}
        <div 
          className="isometric-grid relative" 
          style={{ 
            width: `${gridSize * 40}px`, 
            height: `${gridSize * 40}px`,
            transform: 'rotateX(60deg) rotateZ(-45deg)',
            transformStyle: 'preserve-3d'
          }}
        >
          {blocks.map((block, i) => (
            <div 
              key={i}
              ref={setBlockRef}
              className="absolute"
              style={{
                width: '40px',
                height: '40px',
                left: `${block.x * 40}px`,
                top: `${block.y * 40}px`,
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Top Face (Grass) */}
              <div className="absolute inset-0 bg-[#81B947] border border-[#5C8930]" />
              
              {/* Right Face (Dirt) */}
              <div 
                className="absolute top-0 left-full w-10 h-[40px] bg-[#6A4420] border border-[#4A2F10]" 
                style={{ transformOrigin: 'left', transform: 'rotateY(90deg)' }} 
              />
              
              {/* Bottom/Front Face (Dirt) */}
              <div 
                className="absolute top-full left-0 w-[40px] h-10 bg-[#8B5A2B] border border-[#6A4420]" 
                style={{ transformOrigin: 'top', transform: 'rotateX(-90deg)' }} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
