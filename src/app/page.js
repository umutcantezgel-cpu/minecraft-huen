"use client";

import React, { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import MinecraftHero from "@/components/MinecraftHero";
import LoreSection from "@/components/LoreSection";
import SlimefunSection from "@/components/SlimefunSection";
import MagicSection from "@/components/MagicSection";
import AuraSkillsSection from "@/components/AuraSkillsSection";
import SocialSection from "@/components/SocialSection";
import EconomySection from "@/components/EconomySection";
import WorldSection from "@/components/WorldSection";
import RanksSection from "@/components/RanksSection";
import RulesSection from "@/components/RulesSection";
import ConnectionGuide from "@/components/ConnectionGuide";
import MinecraftFooter from "@/components/MinecraftFooter";

gsap.registerPlugin(ScrollTrigger);

export default function MinecraftScrollTellingApp() {
  const [entered, setEntered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [muted, setMuted] = useState(false);
  const audioRef = useRef(null);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  const handleEnter = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(console.error);
    }
    setLoading(true);
    
    // Simulate Minecraft "Generating World" loading
    let p = 0;
    const interval = setInterval(() => {
      p += Math.floor(Math.random() * 15) + 5;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false);
          setEntered(true);
          // Wait a tick for DOM to render then refresh scroll trigger
          setTimeout(() => ScrollTrigger.refresh(), 100);
        }, 500);
      }
      setProgress(p);
    }, 150);
  };

  return (
    <div className="w-full min-h-screen overflow-x-hidden" style={{ backgroundColor: '#87CEEB' }}>
      <audio ref={audioRef} loop src="./C418 - Subwoofer Lullaby - Minecraft Volume Alpha.mp3" />

      {/* Entry Overlay - Minecraft Dirt Background */}
      {!entered && (
        <div 
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ 
            backgroundColor: '#5C2E0B', 
            backgroundImage: 'repeating-linear-gradient(45deg, #4A2408 25%, transparent 25%, transparent 75%, #4A2408 75%, #4A2408), repeating-linear-gradient(45deg, #4A2408 25%, #5C2E0B 25%, #5C2E0B 75%, #4A2408 75%, #4A2408)', 
            backgroundPosition: '0 0, 16px 16px', 
            backgroundSize: '32px 32px' 
          }}
        >
          {!loading ? (
            <div className="mc-panel flex flex-col items-center gap-8 max-w-lg w-11/12">
              <h1 className="text-4xl text-center text-mc-dark">Willkommen bei NextGen</h1>
              <p className="text-xl text-center font-bold text-gray-800">
                Musik aktivieren für das volle Erlebnis?
              </p>
              <button onClick={handleEnter} className="mc-btn text-2xl w-full py-4">JA, JOINEN</button>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-4xl text-white drop-shadow-xl mb-4">Generiere Welt...</h1>
              <div className="w-80 sm:w-96 h-10 bg-black border-4 border-[#333] p-1 relative shadow-2xl">
                <div className="h-full bg-[#7CFC00]" style={{ width: `${progress}%`, transition: 'width 0.1s linear' }} />
              </div>
            </div>
          )}
        </div>
      )}

      {/* Persistent Mute Button */}
      {entered && (
        <button 
          onClick={toggleMute}
          className="fixed top-6 right-6 z-[9999] mc-btn !px-6 !py-4 flex items-center justify-center gap-3 shadow-2xl font-pixel text-white text-xl"
          title={muted ? "Musik an" : "Musik aus"}
        >
          <span className="text-2xl">{muted ? "🔇" : "🔊"}</span>
          <span className="drop-shadow-md">{muted ? "Musik an" : "Musik aus"}</span>
        </button>
      )}

      {/* Main Content */}
      <main className="w-full flex flex-col gap-32 pb-32" style={{ opacity: entered ? 1 : 0, transition: 'opacity 1s ease-in-out', display: entered ? 'block' : 'none' }}>
        <MinecraftHero />
        <LoreSection />
        <ConnectionGuide />
        
        <div className="max-w-6xl mx-auto w-full px-4 flex flex-col gap-40">
          <SlimefunSection />
          <MagicSection />
          <AuraSkillsSection />
          <SocialSection />
          <EconomySection />
          <WorldSection />
          <RanksSection />
          <RulesSection />
        </div>
        
        <MinecraftFooter />
      </main>
    </div>
  );
}
