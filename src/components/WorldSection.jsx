import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WorldSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const panels = gsap.utils.toArray('.world-panel');
    
    panels.forEach((panel) => {
      gsap.fromTo(panel, 
        { opacity: 0, y: 100 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: panel,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="w-full flex flex-col gap-12 font-sans select-none" style={{ imageRendering: 'pixelated' }}>
      
      {/* Slide 1: System 01 */}
      <div className="relative min-h-[80vh] w-full rounded-2xl overflow-hidden border-[6px] border-black shadow-[8px_8px_0_rgba(0,0,0,0.5)]">
        {/* Overworld Background */}
        <div className="absolute inset-0 bg-[#78A7FF] flex flex-col justify-end">
          <div className="absolute top-10 left-[10%] w-24 h-24 bg-[#FFDF00] border-[6px] border-black" />
          <div className="w-full h-[33%] bg-[#5C8930] border-t-[12px] border-[#81B947] flex flex-col relative">
             <div className="w-full h-8 bg-[#3A561E]" />
             <div className="w-full flex-grow bg-[#8B5A2B]" />
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-8 mt-12">
          <div className="world-panel bg-[#C6C6C6] border-[6px] border-black shadow-[inset_-6px_-6px_0_rgba(85,85,85,1),inset_6px_6px_0_rgba(255,255,255,1),8px_8px_0_rgba(0,0,0,0.5)] p-8 md:p-12 max-w-4xl text-center mb-24">
            <h2 className="text-3xl md:text-5xl text-[#333333] font-bold tracking-widest uppercase mb-4 drop-shadow-[2px_2px_0_rgba(255,255,255,1)]">
              [ SYSTEM 01 ]
            </h2>
            <div className="h-1.5 w-full bg-[#555555] mb-6 border-b-[3px] border-white"></div>
            <h3 className="text-xl md:text-3xl text-blue-800 font-bold mb-4 drop-shadow-sm">Industrielle Evolution & Endgame<br/><span className="text-lg text-blue-900 opacity-80">(Slimefun 4 + Supreme Addon)</span></h3>
            <p className="text-base md:text-xl text-[#222222] font-semibold leading-relaxed">
              Verwandelt das Survival-Gameplay in eine gigantische Tech-Simulation. Nutzt den Ingame-Guide (<span className="font-mono text-black font-bold">/sf guide</span>), um über 500 neue Items, exotische Legierungen (Carbon, Damaststahl) und Multi-Block-Maschinen freizuschalten. Baut vollautomatische Frachtnetze, Energienetze mit Solarpanels und nuklearen Reaktoren sowie ultimatives Tier-5 'Supreme'-Endgame-Equipment (OP-Werkzeuge & Rüstungen).
            </p>
          </div>
        </div>
      </div>

      {/* Slide 2: System 02 */}
      <div className="relative min-h-[80vh] w-full rounded-2xl overflow-hidden border-[6px] border-black shadow-[8px_8px_0_rgba(0,0,0,0.5)]">
        {/* Deep Cave Background */}
        <div className="absolute inset-0 bg-[#2A2A2A] flex flex-col justify-end">
          <div className="w-full h-[40%] bg-[#1A1A1A] border-t-[12px] border-[#333333] flex flex-col relative">
             <div className="w-full flex-grow bg-[#111111]" />
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-8 mt-12">
          <div className="world-panel bg-[#8B5A2B] border-[6px] border-black shadow-[inset_-6px_-6px_0_rgba(90,58,26,1),inset_6px_6px_0_rgba(166,124,82,1),8px_8px_0_rgba(0,0,0,0.5)] p-8 md:p-12 max-w-4xl text-center mb-24">
            <h2 className="text-3xl md:text-5xl text-white font-bold tracking-widest uppercase mb-4 drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">
              [ SYSTEM 02 ]
            </h2>
            <div className="h-1.5 w-full bg-[#5A3A1A] mb-6 border-b-[3px] border-[#A67C52]"></div>
            <h3 className="text-xl md:text-3xl text-purple-300 font-bold mb-4 drop-shadow-[1px_1px_0_rgba(0,0,0,0.8)]">Aktive Sandbox-Kampfmagie<br/><span className="text-lg opacity-80">(Magic v10.10)</span></h3>
            <p className="text-base md:text-xl text-[#F0E6D2] font-semibold leading-relaxed mb-8 drop-shadow-[2px_2px_0_rgba(0,0,0,0.8)]">
              Ein hochentwickeltes Zaubersystem mit spektakulären Partikeleffekten. Schmiedet eigene Zauberstäbe, sammelt Magie-XP und steigt vom Lehrling zum Großmeister auf. Nutzt ein controller-optimiertes Kreismenü, um aktive Kampf-Spells wie Teleportation (Blink), Partikel-Schutzschilde, Feuerbälle oder Schwerkraft-Manipulation (Levitate, Telekinese) gegen Mobs oder eure Mitspieler einzusetzen.
            </p>
            <div className="flex justify-center gap-6 md:gap-12">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-[#A0A0A0] border-t-[8px] border-l-[8px] border-[#C0C0C0] border-b-[8px] border-r-[8px] border-[#606060] shadow-[6px_6px_0_rgba(0,0,0,0.5)]" />
              <div className="w-16 h-16 md:w-24 md:h-24 bg-[#8B5A2B] border-t-[8px] border-l-[8px] border-[#A67C52] border-b-[8px] border-r-[8px] border-[#5A3A1A] shadow-[6px_6px_0_rgba(0,0,0,0.5)]" />
              <div className="w-16 h-16 md:w-24 md:h-24 bg-[#C4A484] border-t-[8px] border-l-[8px] border-[#E6CDAA] border-b-[8px] border-r-[8px] border-[#8B6B4A] shadow-[6px_6px_0_rgba(0,0,0,0.5)]" />
            </div>
          </div>
        </div>
      </div>

      {/* Slide 3: System 03 */}
      <div className="relative min-h-[80vh] w-full rounded-2xl overflow-hidden border-[6px] border-black shadow-[8px_8px_0_rgba(0,0,0,0.5)]">
        {/* Nether Background */}
        <div className="absolute inset-0 bg-[#3C1111] flex flex-col justify-end">
          <div className="w-full h-[45%] bg-[#600000] border-t-[12px] border-[#8A0000] flex flex-col relative">
             <div className="w-full h-8 bg-[#400000]" />
             <div className="w-full flex-grow bg-[#300000]" />
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-8 mt-12">
          <div className="world-panel bg-[#600000] border-[6px] border-black shadow-[inset_-6px_-6px_0_rgba(48,0,0,1),inset_6px_6px_0_rgba(138,0,0,1),8px_8px_0_rgba(0,0,0,0.5)] p-8 md:p-12 max-w-4xl text-center mb-24 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#AA00FF_0%,_transparent_100%)] mix-blend-screen" />
            
            <h2 className="text-3xl md:text-5xl text-[#FF5555] font-bold tracking-widest uppercase mb-4 drop-shadow-[2px_2px_0_rgba(0,0,0,1)] relative z-10">
              [ SYSTEM 03 ]
            </h2>
            <div className="h-1.5 w-full bg-[#300000] mb-6 border-b-[3px] border-[#8A0000] relative z-10"></div>
            <h3 className="text-xl md:text-3xl text-yellow-400 font-bold mb-4 drop-shadow-[1px_1px_0_rgba(0,0,0,0.8)] relative z-10">Native RPG-Progression & Mana<br/><span className="text-lg opacity-80">(AuraSkills)</span></h3>
            <p className="text-base md:text-xl text-[#FFAAAA] font-semibold leading-relaxed relative z-10 drop-shadow-[2px_2px_0_rgba(0,0,0,0.8)]">
              Das MMO-Rückgrat des Servers. Jede alltägliche Aktion (Mining, Kampf, Holzfällen) bringt Skill-XP. Steigt im Level auf, um permanente globale Statuswerte zu skalieren – erhöht eure Lebenskraft von 10 auf 15, 20 oder mehr dauerhafte Herzen! Schaltet einen eigenen Mana-Balken frei, der sich automatisch regeneriert und als Treibstoff für eure aktiven magischen Fähigkeiten dient.
            </p>
          </div>
        </div>
      </div>

      {/* Slide 4: System 04 */}
      <div className="relative min-h-[80vh] w-full rounded-2xl overflow-hidden border-[6px] border-black shadow-[8px_8px_0_rgba(0,0,0,0.5)]">
        {/* End Background */}
        <div className="absolute inset-0 bg-[#0A0514] flex flex-col justify-end">
          <div className="absolute top-[20%] left-[40%] w-3 h-3 bg-[#EEDDFF] opacity-70" />
          <div className="absolute top-[15%] left-[70%] w-4 h-4 bg-[#EEDDFF] opacity-40" />
          <div className="w-full h-[30%] bg-[#F0F0A0] border-t-[12px] border-[#FFFFC0] flex flex-col relative">
             <div className="w-full h-8 bg-[#A0A050]" />
             <div className="w-full flex-grow bg-[#E0E080]" />
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-8 mt-12">
          <div className="world-panel bg-[#1A1A1A] border-[6px] border-[#333333] shadow-[inset_-6px_-6px_0_rgba(0,0,0,0.8),inset_6px_6px_0_rgba(255,255,255,0.1),8px_8px_0_rgba(0,0,0,1)] p-8 md:p-12 max-w-4xl text-center border-t-[#8B00FF] border-t-[12px] mb-24">
            <h2 className="text-3xl md:text-5xl text-[#EEDDFF] font-bold tracking-widest uppercase mb-4 drop-shadow-[2px_2px_0_rgba(139,0,255,0.8)]">
              [ SYSTEM 04 ]
            </h2>
            <div className="h-1.5 w-full bg-[#000000] mb-6 border-b-[3px] border-[#333333]"></div>
            <h3 className="text-xl md:text-3xl text-green-400 font-bold mb-4 drop-shadow-[1px_1px_0_rgba(0,0,0,0.8)]">Social Dynamics & Trolling-Mechanics<br/><span className="text-lg opacity-80">(GSit & EssentialsX)</span></h3>
            <p className="text-base md:text-xl text-[#D0C0E0] font-semibold leading-relaxed mb-10 drop-shadow-[2px_2px_0_rgba(0,0,0,0.8)]">
              Maximale Freiheit für Chaos und reibungsloses Teamplay. Nutzt physische Emotes (<span className="font-mono text-white">/sit, /lay</span>) oder krabbelt flach auf dem Bauch (<span className="font-mono text-white">/crawl</span>) durch geheime 1-Block-Tunnel. Das Highlight: Per Rechtsklick könnt ihr euch gegenseitig Huckepack auf den Kopf setzen und gigantische Spielertürme bilden. Dank EssentialsX-Infrastruktur stehen euch Ingame-Wirtschaft, <span className="font-mono text-white">/sethome</span> und <span className="font-mono text-white">/tpa</span>-Teleportation zur Verfügung.
            </p>
            
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-[#FFAAFF] border-[6px] border-[#FF55FF] rotate-45 shadow-[0_0_30px_rgba(255,85,255,0.8)]" />
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}
