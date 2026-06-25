"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play } from "lucide-react";

import MinecraftHero from "@/components/MinecraftHero";
import LoreSection from "@/components/LoreSection";
import EconomySection from "@/components/EconomySection";
import WorldSection from "@/components/WorldSection";
import RulesSection from "@/components/RulesSection";
import ConnectionGuide from "@/components/ConnectionGuide";
import MinecraftFooter from "@/components/MinecraftFooter";

gsap.registerPlugin(ScrollTrigger);

export default function MinecraftScrollTellingApp() {
  const [entered, setEntered] = useState(false);
  const [muted, setMuted] = useState(false);
  const audioRef = useRef(null);
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  const handleEnter = () => {
    // Play music immediately
    if (audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current.play().catch(e => console.log("Audio autoplay prevented", e));
      setMuted(false);
    }
    
    // Better entry animation
    const tl = gsap.timeline({
      onComplete: () => setEntered(true)
    });

    tl.to(overlayRef.current, {
      yPercent: -100,
      duration: 1.2,
      ease: "power4.inOut"
    })
    .fromTo(contentRef.current, 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.6"
    );
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [entered]);

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-[#87CEEB]">
      <audio ref={audioRef} loop src="./C418 - Subwoofer Lullaby - Minecraft Volume Alpha.mp3" />

      {/* Entry Animation Overlay */}
      {!entered && (
        <div 
          ref={overlayRef} 
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-zinc-950 px-4"
          style={{ imageRendering: 'pixelated', backgroundImage: 'linear-gradient(to bottom, #111, #000)' }}
        >
          {/* Minecraft dirt pattern subtle overlay */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#444 2px, transparent 2px), linear-gradient(90deg, #444 2px, transparent 2px)', backgroundSize: '64px 64px' }} />
          
          <div className="relative z-10 text-center flex flex-col items-center">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase drop-shadow-[0_4px_0_rgba(0,0,0,1)]">
              Willkommen im<br/><span className="text-green-400">Huen Ecosystem</span>
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-lg">
              Bereit für das ultimative Survival-Erlebnis? Klicke auf 'Ja', um die Seite mit Musik und Animationen zu betreten.
            </p>
            
            <button 
              onClick={handleEnter}
              className="mc-btn flex items-center justify-center gap-4 px-16 py-6 text-3xl font-black text-white bg-green-600 hover:bg-green-500 hover:scale-105 transition-transform" 
              style={{ textShadow: '2px 2px 0 #000' }}
            >
              <Play className="fill-current w-8 h-8" />
              JA, ICH BIN BEREIT
            </button>
          </div>
        </div>
      )}

      {/* Persistent Audio Toggle (Only show after entered) */}
      <button 
        onClick={toggleMute}
        className={`fixed top-6 right-6 z-[9999] mc-btn !px-6 !py-4 flex items-center justify-center gap-3 shadow-2xl font-pixel text-white text-xl transition-opacity duration-1000 ${entered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        title={muted ? "Musik an" : "Musik aus"}
      >
        <span className="text-2xl">{muted ? "🔇" : "🔊"}</span>
        <span className="drop-shadow-md">{muted ? "Musik an" : "Musik aus"}</span>
      </button>

      {/* Main Content wrapped for entry animation */}
      <div ref={contentRef} className="opacity-0">
        <main className="w-full flex flex-col gap-32 pb-32">
          <MinecraftHero />
          <LoreSection />
          <ConnectionGuide />
          
          <div className="max-w-6xl mx-auto w-full px-4 flex flex-col gap-40">
            <WorldSection />
            <EconomySection />
            <RulesSection />
          </div>
          
          <MinecraftFooter />
        </main>
      </div>
    </div>
  );
}
