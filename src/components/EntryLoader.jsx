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

export default function EntryLoader({ onComplete, onStart }) {
  const [loading, setLoading] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const containerRef = useRef(null);
  const panoramaRef = useRef(null);
  const chunksRef = useRef([]);

  // Create a 15x15 chunk grid with procedural world generation
  const gridSize = 15;
  const center = Math.floor(gridSize / 2);
  
  const chunks = React.useMemo(() => {
    const list = [];
    
    // Random biome centers (using Math.random is pure enough if isolated inside useMemo and we don't care about strict determinism across re-renders for this animation, but Next.js react-hooks/purity rule catches it).
    // We can pre-generate these random values using a pure-looking mapping.

    // Instead of Math.random or mutating seed, let's use a pure hash function based on coordinates
    const hash = (x, y) => {
      let h = Math.imul(x ^ (y << 16), 0x85ebca6b);
      h ^= h >>> 13;
      h = Math.imul(h, 0xc2b2ae35);
      return ((h ^= h >>> 16) >>> 0) / 4294967296;
    };

    const biomes = [
      { cx: hash(0, 0) * gridSize, cy: hash(0, 1) * gridSize, color: '#1E90FF', radius: 4 + hash(0, 2) * 3 }, // Water/Ocean
      { cx: hash(1, 0) * gridSize, cy: hash(1, 1) * gridSize, color: '#EEDD82', radius: 3 + hash(1, 2) * 2 }, // Sand/Desert
      { cx: hash(2, 0) * gridSize, cy: hash(2, 1) * gridSize, color: '#808080', radius: 2 + hash(2, 2) * 3 }, // Stone/Mountains
      { cx: hash(3, 0) * gridSize, cy: hash(3, 1) * gridSize, color: '#FFFFFF', radius: 1 + hash(3, 2) * 2 }, // Snow Peaks
      { cx: hash(4, 0) * gridSize, cy: hash(4, 1) * gridSize, color: '#228B22', radius: 3 + hash(4, 2) * 3 }, // Deep Forest
    ];

    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        // Calculate Chebyshev distance (creates expanding square pattern)
        const distance = Math.max(Math.abs(x - center), Math.abs(y - center));
        
        let targetColor = '#71AF45'; // Default Minecraft Grass
        
        for (let i = 0; i < biomes.length; i++) {
          const b = biomes[i];
          const distToBiome = Math.sqrt(Math.pow(x - b.cx, 2) + Math.pow(y - b.cy, 2));
          // add some natural jaggedness/noise
          if (distToBiome + (hash(x, y + i * 100) * 1.5) < b.radius) {
            targetColor = b.color;
            break;
          }
        }
        
        // Random isolated features for texture
        if (targetColor === '#71AF45' && hash(x + 100, y) > 0.8) targetColor = '#228B22'; // Random trees in grass
        if (targetColor === '#EEDD82' && hash(x, y + 200) > 0.9) targetColor = '#71AF45'; // Random oasis in desert

        list.push({ id: `${x}-${y}`, x, y, distance, targetColor });
      }
    }

    // Sort chunks by distance from center so they animate in a spiral/square outwards
    return list.sort((a, b) => a.distance - b.distance);
  }, [center]);

  const startLoading = () => {
    // Synchronously trigger audio play to bypass mobile autoplay blocking
    if (onStart) onStart();
    
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

    // Fade out welcome content
    tl.to(".welcome-content", {
      opacity: 0,
      y: -50,
      duration: 0.5,
      ease: "power2.in"
    });

    // Fade out panorama to reveal dirt
    tl.to(panoramaRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power1.inOut"
    }, "-=0.2");

    // Fade in the loading text and grid container
    tl.to(".loading-content", {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.5");

    // Animate percentage
    tl.to({ val: 0 }, {
      val: 100,
      duration: 2.5,
      ease: "power1.inOut",
      onUpdate: function() {
        setPercentage(Math.floor(this.targets()[0].val));
      }
    }, "start");

    // Animate chunks filling in (turning procedural terrain color)
    tl.fromTo(chunksRef.current, 
      { backgroundColor: "rgba(0, 0, 0, 0.6)" },
      {
        backgroundColor: (index, target) => target.dataset.color,
        duration: 0.15,
        stagger: {
          each: 0.015,
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
      {/* PANORAMA LAYER */}
      <div 
        ref={panoramaRef} 
        className="absolute inset-0 panorama-bg z-0 pointer-events-none"
      />

      {/* INITIAL STATE: Welcome Screen */}
      {!loading && (
        <div className="welcome-content relative z-10 text-center flex flex-col items-center mt-12">
          {/* Minecraft Style Logo Text */}
          <div className="mb-8 relative">
            <h1 
              className="text-6xl md:text-[6rem] font-black text-white tracking-tighter uppercase"
              style={{ textShadow: '4px 4px 0 #000, -4px -4px 0 #000, 4px -4px 0 #000, -4px 4px 0 #000, 0 8px 0 #000' }}
            >
              HUEN <span className="text-[#55FF55]">SERVER</span>
            </h1>
          </div>

          <div className="mc-panel p-6 mb-12 max-w-2xl bg-black/60 border-4 border-[#373737] shadow-[8px_8px_0_rgba(0,0,0,0.5)] backdrop-blur-sm">
            <p className="text-xl text-gray-200 font-semibold" style={{ textShadow: '2px 2px 0 #000' }}>
              Bereit für das ultimative Survival-Erlebnis? Klicke auf &apos;Spielen&apos;, um das System zu laden.
            </p>
          </div>
          
          <button 
            onClick={startLoading}
            className="mc-btn flex items-center justify-center gap-4 px-16 py-6 text-3xl font-black text-white bg-[#5E812F] hover:bg-[#71AF45] hover:scale-105 transition-transform" 
            style={{ textShadow: '2px 2px 0 #000', boxShadow: 'inset 4px 4px 0 rgba(255,255,255,0.3), inset -4px -4px 0 rgba(0,0,0,0.4), 0 8px 0 rgba(0,0,0,0.6)' }}
          >
            <Play className="fill-white w-8 h-8 drop-shadow-[2px_2px_0_rgba(0,0,0,1)]" />
            SPIELEN
          </button>
        </div>
      )}

      {/* LOADING STATE: 2D Chunk Generation Map */}
      <div className="loading-content absolute inset-0 flex flex-col items-center justify-center opacity-0 pointer-events-none z-10">
        
        {/* Texts */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-[0_4px_0_rgba(0,0,0,1)] uppercase tracking-wider font-mc">
          Landschaft wird generiert...
        </h2>
        <div className="text-xl text-gray-300 font-bold mb-12 drop-shadow-[0_2px_0_rgba(0,0,0,1)]">
          {percentage}%
        </div>
        
        {/* Java Edition Chunk Generation Grid */}
        <div className="mc-panel p-2 bg-[#373737] border-4 border-[#1D1D1D] shadow-[8px_8px_0_rgba(0,0,0,0.5)]">
          <div 
            className="relative grid gap-0.5 bg-black"
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
                className="w-full h-full mc-chunk"
                data-color={chunk.targetColor}
                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
