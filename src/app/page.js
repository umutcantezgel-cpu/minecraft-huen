"use client";

import React, { useEffect } from "react";
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
  // Global setup if necessary
  useEffect(() => {
    // Refresh ScrollTrigger when all components mount
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="w-full bg-[#87CEEB] min-h-screen font-body overflow-x-hidden text-[#1A1A1A]">
      <main className="w-full flex flex-col gap-32 pb-0">
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
