"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ConnectionGuide() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Setup deep scrub animations
      const steps = gsap.utils.toArray('.guide-step');
      
      steps.forEach((step, i) => {
        gsap.fromTo(step, 
          { opacity: 0, x: i % 2 === 0 ? -80 : 80, scale: 0.8 },
          { 
            opacity: 1, 
            x: 0, 
            scale: 1,
            scrollTrigger: {
              trigger: step,
              start: "top 95%",
              end: "top 60%",
              scrub: 1,
            }
          }
        );
      });
      
      gsap.fromTo('.server-info-card',
        { opacity: 0, y: 100, rotateX: -20, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          scrollTrigger: {
            trigger: '.server-info-card',
            start: "top 95%",
            end: "top 60%",
            scrub: 1,
          }
        }
      );

      gsap.fromTo('.guide-title',
        { opacity: 0, y: -50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          scrollTrigger: {
            trigger: '.guide-title',
            start: "top 90%",
            end: "top 60%",
            scrub: 1,
          }
        }
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="py-24 relative overflow-hidden" id="connection-guide">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        <div className="guide-title text-center mb-16">
          <div className="mc-panel inline-block p-6 px-12 relative overflow-hidden">
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 drop-shadow-[0_4px_0_rgba(0,0,0,0.8)] uppercase tracking-wide">
              Wie man beitritt
            </h2>
            <p className="text-xl mt-4 text-white drop-shadow-[0_2px_0_rgba(0,0,0,0.8)] font-semibold">
              Java & Bedrock werden unterstützt!
            </p>
          </div>
        </div>

        {/* Server Info Card */}
        <div className="server-info-card mc-panel p-8 mb-20 bg-[#505050] border-4 border-black">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4 bg-black/50 border-4 border-[#373737] shadow-inner">
              <h3 className="text-gray-400 font-bold mb-2 uppercase text-sm drop-shadow-md">Server-IP</h3>
              <p className="text-xl md:text-2xl font-bold text-green-400 font-mono select-all drop-shadow-[0_2px_0_rgba(0,0,0,1)]">
                Umutcan_Emre.exaroton.me
              </p>
            </div>
            <div className="p-4 bg-black/50 border-4 border-[#373737] shadow-inner">
              <h3 className="text-gray-400 font-bold mb-2 uppercase text-sm drop-shadow-md">Port</h3>
              <p className="text-xl md:text-2xl font-bold text-white font-mono select-all drop-shadow-[0_2px_0_rgba(0,0,0,1)]">
                28198
              </p>
            </div>
            <div className="p-4 bg-black/50 border-4 border-[#373737] shadow-inner">
              <h3 className="text-gray-400 font-bold mb-2 uppercase text-sm drop-shadow-md">Version</h3>
              <p className="text-xl md:text-2xl font-bold text-white font-mono drop-shadow-[0_2px_0_rgba(0,0,0,1)]">
                1.21.4
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* PC / Java Edition Guide */}
          <div className="space-y-6">
            <div className="mc-panel p-4 text-center bg-[#5E812F] border-b-8 border-r-8 border-black shadow-[inset_4px_4px_0_rgba(255,255,255,0.2)]">
              <h3 className="text-3xl font-bold text-white drop-shadow-[0_4px_0_rgba(0,0,0,0.8)]">Java Edition (PC)</h3>
            </div>
            
            <div className="space-y-4">
              <div className="guide-step mc-panel p-6 flex gap-6 items-center bg-[#8B8B8B]">
                <div className="w-12 h-12 shrink-0 bg-[#373737] border-4 border-[#1D1D1D] flex items-center justify-center text-xl font-bold text-yellow-400 drop-shadow-md">1</div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1 drop-shadow-[0_2px_0_rgba(0,0,0,1)]">Minecraft starten</h4>
                  <p className="text-[#E0E0E0] drop-shadow-md font-semibold">Öffne den Launcher, nutze Version <span className="text-yellow-400 font-mono">1.21.4</span>.</p>
                </div>
              </div>

              <div className="guide-step mc-panel p-6 flex gap-6 items-center bg-[#8B8B8B]">
                <div className="w-12 h-12 shrink-0 bg-[#373737] border-4 border-[#1D1D1D] flex items-center justify-center text-xl font-bold text-yellow-400 drop-shadow-md">2</div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1 drop-shadow-[0_2px_0_rgba(0,0,0,1)]">Mehrspieler</h4>
                  <p className="text-[#E0E0E0] drop-shadow-md font-semibold">Klicke auf die Schaltfläche <strong className="text-white">Mehrspieler</strong>.</p>
                </div>
              </div>

              <div className="guide-step mc-panel p-6 flex gap-6 items-center bg-[#8B8B8B]">
                <div className="w-12 h-12 shrink-0 bg-[#373737] border-4 border-[#1D1D1D] flex items-center justify-center text-xl font-bold text-yellow-400 drop-shadow-md">3</div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1 drop-shadow-[0_2px_0_rgba(0,0,0,1)]">Server hinzufügen</h4>
                  <p className="text-[#E0E0E0] drop-shadow-md font-semibold">Klicke unten rechts auf <strong className="text-white">Server hinzufügen</strong>.</p>
                </div>
              </div>

              <div className="guide-step mc-panel p-6 flex gap-6 items-center bg-[#8B8B8B]">
                <div className="w-12 h-12 shrink-0 bg-[#373737] border-4 border-[#1D1D1D] flex items-center justify-center text-xl font-bold text-yellow-400 drop-shadow-md">4</div>
                <div className="w-full">
                  <h4 className="text-xl font-bold text-white mb-2 drop-shadow-[0_2px_0_rgba(0,0,0,1)]">Details eingeben</h4>
                  <div className="bg-black/60 p-3 border-4 border-[#373737] mb-2 shadow-inner">
                    <div className="text-gray-400 text-xs uppercase mb-1 font-bold">Servername</div>
                    <div className="text-white font-mono drop-shadow-md">Minecraft Server</div>
                  </div>
                  <div className="bg-black/60 p-3 border-4 border-[#373737] shadow-inner">
                    <div className="text-gray-400 text-xs uppercase mb-1 font-bold">Serveradresse</div>
                    <div className="text-green-400 font-mono break-all drop-shadow-md">Umutcan_Emre.exaroton.me:28198</div>
                  </div>
                </div>
              </div>

              <div className="guide-step mc-panel p-6 flex gap-6 items-center bg-[#4CAF50] border-t-4 border-l-4 border-[#81C784] border-b-8 border-r-8 border-[#2E7D32]">
                <div className="w-12 h-12 shrink-0 bg-[#1B5E20] border-4 border-[#000000] flex items-center justify-center text-2xl font-bold text-[#A5D6A7] drop-shadow-md">✓</div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-1 drop-shadow-[0_2px_0_rgba(0,0,0,0.8)]">Verbinden!</h4>
                  <p className="text-green-100 drop-shadow-md font-semibold">Klicke auf Fertig und <strong className="text-white">Server beitreten</strong>.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bedrock / Console Edition Guide */}
          <div className="space-y-6">
            <div className="mc-panel p-4 text-center bg-[#295673] border-b-8 border-r-8 border-black shadow-[inset_4px_4px_0_rgba(255,255,255,0.2)]">
              <h3 className="text-3xl font-bold text-white drop-shadow-[0_4px_0_rgba(0,0,0,0.8)]">Bedrock Edition</h3>
            </div>
            
            <div className="space-y-4">
              <div className="guide-step mc-panel p-6 flex gap-6 items-center bg-[#8B8B8B]">
                <div className="w-12 h-12 shrink-0 bg-[#373737] border-4 border-[#1D1D1D] flex items-center justify-center text-xl font-bold text-yellow-400 drop-shadow-md">1</div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1 drop-shadow-[0_2px_0_rgba(0,0,0,1)]">Minecraft öffnen</h4>
                  <p className="text-[#E0E0E0] drop-shadow-md font-semibold">Starte auf Konsole/PE, Version <span className="text-yellow-400 font-mono">1.21.4</span>.</p>
                </div>
              </div>

              <div className="guide-step mc-panel p-6 flex gap-6 items-center bg-[#8B8B8B]">
                <div className="w-12 h-12 shrink-0 bg-[#373737] border-4 border-[#1D1D1D] flex items-center justify-center text-xl font-bold text-yellow-400 drop-shadow-md">2</div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1 drop-shadow-[0_2px_0_rgba(0,0,0,1)]">Spielen-Menü</h4>
                  <p className="text-[#E0E0E0] drop-shadow-md font-semibold">Klicke auf Spielen, dann auf den Tab <strong className="text-white">Server</strong>.</p>
                </div>
              </div>

              <div className="guide-step mc-panel p-6 flex gap-6 items-center bg-[#8B8B8B]">
                <div className="w-12 h-12 shrink-0 bg-[#373737] border-4 border-[#1D1D1D] flex items-center justify-center text-xl font-bold text-yellow-400 drop-shadow-md">3</div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1 drop-shadow-[0_2px_0_rgba(0,0,0,1)]">Server hinzufügen</h4>
                  <p className="text-[#E0E0E0] drop-shadow-md font-semibold">Scrolle nach unten und klicke auf <strong className="text-white">Externen Server hinzufügen</strong>.</p>
                </div>
              </div>

              <div className="guide-step mc-panel p-6 flex gap-6 items-center bg-[#8B8B8B]">
                <div className="w-12 h-12 shrink-0 bg-[#373737] border-4 border-[#1D1D1D] flex items-center justify-center text-xl font-bold text-yellow-400 drop-shadow-md">4</div>
                <div className="w-full">
                  <h4 className="text-xl font-bold text-white mb-2 drop-shadow-[0_2px_0_rgba(0,0,0,1)]">Details eingeben</h4>
                  <div className="bg-black/60 p-3 border-4 border-[#373737] mb-2 shadow-inner">
                    <div className="text-gray-400 text-xs uppercase mb-1 font-bold">Servername</div>
                    <div className="text-white font-mono drop-shadow-md">Minecraft Server</div>
                  </div>
                  <div className="bg-black/60 p-3 border-4 border-[#373737] mb-2 shadow-inner">
                    <div className="text-gray-400 text-xs uppercase mb-1 font-bold">Serveradresse</div>
                    <div className="text-green-400 font-mono break-all drop-shadow-md">Umutcan_Emre.exaroton.me</div>
                  </div>
                  <div className="bg-black/60 p-3 border-4 border-[#373737] shadow-inner">
                    <div className="text-gray-400 text-xs uppercase mb-1 font-bold">Port</div>
                    <div className="text-white font-mono drop-shadow-md">28198</div>
                  </div>
                </div>
              </div>
              
              <div className="guide-step mc-panel p-6 flex gap-6 items-center bg-[#2196F3] border-t-4 border-l-4 border-[#64B5F6] border-b-8 border-r-8 border-[#1565C0]">
                <div className="w-12 h-12 shrink-0 bg-[#0D47A1] border-4 border-[#000000] flex items-center justify-center text-2xl font-bold text-[#90CAF9] drop-shadow-md">✓</div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-1 drop-shadow-[0_2px_0_rgba(0,0,0,0.8)]">Speichern & Spielen!</h4>
                  <p className="text-blue-100 drop-shadow-md font-semibold">Klicke auf Speichern, dann auf <strong className="text-white">Server beitreten</strong>.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
