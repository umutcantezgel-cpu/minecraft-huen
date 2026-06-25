"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import MinecraftHero from "@/components/MinecraftHero";
import LoreSection from "@/components/LoreSection";
import EconomySection from "@/components/EconomySection";
import WorldSection from "@/components/WorldSection";
import RulesSection from "@/components/RulesSection";
import ConnectionGuide from "@/components/ConnectionGuide";
import MinecraftFooter from "@/components/MinecraftFooter";

gsap.registerPlugin(ScrollTrigger);

export default function MinecraftScrollTellingApp() {
  const [muted, setMuted] = useState(true);
  const audioRef = useRef(null);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  // Auto refresh ScrollTrigger on mount
  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="w-full min-h-screen overflow-x-hidden" style={{ backgroundColor: '#87CEEB' }}>
      <audio ref={audioRef} loop src="./C418 - Subwoofer Lullaby - Minecraft Volume Alpha.mp3" />

      {/* Persistent Audio Toggle */}
      <button 
        onClick={toggleMute}
        className="fixed top-6 right-6 z-[9999] mc-btn !px-6 !py-4 flex items-center justify-center gap-3 shadow-2xl font-pixel text-white text-xl"
        title={muted ? "Musik an" : "Musik aus"}
      >
        <span className="text-2xl">{muted ? "🔇" : "🔊"}</span>
        <span className="drop-shadow-md">{muted ? "Musik an" : "Musik aus"}</span>
      </button>

      {/* Main Content */}
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
  );
}
