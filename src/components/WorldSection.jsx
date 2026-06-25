import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WorldSection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const bgLayer1Ref = useRef(null);
  const bgLayer2Ref = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    
    let totalWidth = container.scrollWidth - window.innerWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        end: () => "+=" + totalWidth,
        invalidateOnRefresh: true,
      }
    });

    // Main horizontal scroll
    tl.to(container, {
      x: () => -totalWidth,
      ease: "none",
    }, 0);

    // Deep scrub interactivity: Parallax background layers
    if (bgLayer1Ref.current) {
      tl.to(bgLayer1Ref.current, {
        x: () => -(totalWidth * 0.3),
        ease: "none",
      }, 0);
    }
    
    if (bgLayer2Ref.current) {
      tl.to(bgLayer2Ref.current, {
        x: () => -(totalWidth * 0.6),
        ease: "none",
      }, 0);
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="world-section relative h-screen w-full overflow-hidden bg-[#78A7FF] font-sans select-none"
      style={{ imageRendering: 'pixelated' }}
    >
      {/* Background Parallax Layer 1 (Slowest - Sun & Clouds) */}
      <div ref={bgLayer1Ref} className="absolute inset-0 w-[200vw] h-full pointer-events-none flex z-0">
        <div className="absolute top-10 left-[10vw] w-24 h-24 bg-[#FFDF00] border-[6px] border-black" />
        
        <div className="absolute top-24 left-[20vw] flex space-x-2 opacity-90">
          <div className="w-32 h-12 bg-white border-[6px] border-black shadow-[6px_6px_0_rgba(0,0,0,0.15)]" />
          <div className="w-48 h-16 bg-white border-[6px] border-black -ml-8 -mt-4 shadow-[6px_6px_0_rgba(0,0,0,0.15)]" />
        </div>
        
        <div className="absolute top-16 left-[80vw] flex space-x-2 opacity-90">
          <div className="w-24 h-10 bg-white border-[6px] border-black shadow-[6px_6px_0_rgba(0,0,0,0.15)]" />
          <div className="w-32 h-16 bg-white border-[6px] border-black -ml-4 -mt-2 shadow-[6px_6px_0_rgba(0,0,0,0.15)]" />
        </div>
      </div>

      {/* Background Parallax Layer 2 (Medium - Distant Mountains) */}
      <div ref={bgLayer2Ref} className="absolute inset-0 w-[300vw] h-full pointer-events-none flex items-end pb-[33vh] z-0">
         <div className="w-[100vw] h-64 bg-[#4A7023] border-t-[8px] border-black border-r-[8px]" />
         <div className="w-[100vw] h-48 bg-[#3D5C1D] border-t-[8px] border-black border-r-[8px] -ml-10" />
         <div className="w-[100vw] h-72 bg-[#527A27] border-t-[8px] border-black" />
      </div>

      {/* Foreground Container (Fastest - Main Content) */}
      <div ref={containerRef} className="flex h-full w-[400vw] relative z-10">
        
        {/* Slide 1: The Overworld */}
        <div className="w-screen h-full flex flex-col justify-end items-center relative">
          <div className="absolute inset-0 flex flex-col items-center justify-center mb-40 px-4">
            {/* Minecraft Style Panel */}
            <div className="bg-[#C6C6C6] border-[6px] border-black shadow-[inset_-6px_-6px_0_rgba(85,85,85,1),inset_6px_6px_0_rgba(255,255,255,1),8px_8px_0_rgba(0,0,0,0.25)] p-10 max-w-3xl text-center">
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
          {/* Ground */}
          <div className="w-full h-[33vh] bg-[#5C8930] border-t-[12px] border-[#81B947] flex flex-col relative">
             <div className="absolute top-0 left-10 w-12 h-12 bg-[#81B947]" />
             <div className="absolute top-0 left-32 w-16 h-16 bg-[#81B947]" />
             <div className="absolute top-0 right-40 w-14 h-14 bg-[#81B947]" />
             <div className="w-full h-10 bg-[#3A561E]" />
             <div className="w-full flex-grow bg-[#8B5A2B] relative overflow-hidden">
                <div className="absolute top-10 left-10 w-6 h-6 bg-[#6A4420]" />
                <div className="absolute top-4 left-40 w-8 h-8 bg-[#6A4420]" />
                <div className="absolute top-20 left-[60%] w-6 h-6 bg-[#6A4420]" />
             </div>
          </div>
        </div>

        {/* Slide 2: Building */}
        <div className="w-screen h-full flex flex-col justify-end items-center relative">
          <div className="absolute inset-0 flex flex-col items-center justify-center mb-40 px-4">
            {/* Dirt Style Panel */}
            <div className="bg-[#8B5A2B] border-[6px] border-black shadow-[inset_-6px_-6px_0_rgba(90,58,26,1),inset_6px_6px_0_rgba(166,124,82,1),8px_8px_0_rgba(0,0,0,0.3)] p-10 max-w-3xl text-center">
              <h2 className="text-3xl md:text-5xl text-white font-bold tracking-widest uppercase mb-4 drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">
                [ SYSTEM 02 ]
              </h2>
              <div className="h-1.5 w-full bg-[#5A3A1A] mb-6 border-b-[3px] border-[#A67C52]"></div>
              <h3 className="text-xl md:text-3xl text-purple-300 font-bold mb-4 drop-shadow-[1px_1px_0_rgba(0,0,0,0.8)]">Aktive Sandbox-Kampfmagie<br/><span className="text-lg opacity-80">(Magic v10.10)</span></h3>
              <p className="text-base md:text-xl text-[#F0E6D2] font-semibold leading-relaxed mb-8 drop-shadow-[2px_2px_0_rgba(0,0,0,0.8)]">
                Ein hochentwickeltes Zaubersystem mit spektakulären Partikeleffekten. Schmiedet eigene Zauberstäbe, sammelt Magie-XP und steigt vom Lehrling zum Großmeister auf. Nutzt ein controller-optimiertes Kreismenü, um aktive Kampf-Spells wie Teleportation (Blink), Partikel-Schutzschilde, Feuerbälle oder Schwerkraft-Manipulation (Levitate, Telekinese) gegen Mobs oder eure Mitspieler einzusetzen.
              </p>
              <div className="flex justify-center gap-8">
                {/* Stone Block */}
                <div className="w-24 h-24 bg-[#A0A0A0] border-t-[12px] border-l-[12px] border-[#C0C0C0] border-b-[12px] border-r-[12px] border-[#606060] shadow-[6px_6px_0_rgba(0,0,0,0.5)] relative">
                  <div className="absolute inset-0 border-[4px] border-black mix-blend-overlay opacity-20"></div>
                </div>
                {/* Wood Block */}
                <div className="w-24 h-24 bg-[#8B5A2B] border-t-[12px] border-l-[12px] border-[#A67C52] border-b-[12px] border-r-[12px] border-[#5A3A1A] shadow-[6px_6px_0_rgba(0,0,0,0.5)] relative flex items-center justify-center overflow-hidden">
                   <div className="w-full h-3 bg-[#5A3A1A] absolute opacity-40"></div>
                   <div className="absolute inset-0 border-[4px] border-black mix-blend-overlay opacity-20"></div>
                </div>
                {/* Planks Block */}
                <div className="w-24 h-24 bg-[#C4A484] border-t-[12px] border-l-[12px] border-[#E6CDAA] border-b-[12px] border-r-[12px] border-[#8B6B4A] shadow-[6px_6px_0_rgba(0,0,0,0.5)] relative">
                   <div className="absolute inset-0 border-[4px] border-black mix-blend-overlay opacity-20"></div>
                </div>
              </div>
            </div>
          </div>
          {/* Ground */}
          <div className="w-full h-[33vh] bg-[#5C8930] border-t-[12px] border-[#81B947] flex flex-col relative">
             <div className="absolute top-0 left-20 w-10 h-10 bg-[#81B947]" />
             <div className="w-full h-10 bg-[#3A561E]" />
             <div className="w-full flex-grow bg-[#8B5A2B] relative overflow-hidden">
                <div className="absolute top-12 left-[20%] w-8 h-8 bg-[#6A4420]" />
                <div className="absolute top-24 left-[80%] w-6 h-6 bg-[#6A4420]" />
             </div>
          </div>
        </div>

        {/* Slide 3: The Nether */}
        <div className="w-screen h-full flex flex-col justify-end items-center relative transition-colors duration-1000 group">
          <div className="absolute inset-0 bg-[#3C1111] -z-10 border-l-[16px] border-black" />
          <div className="absolute inset-0 flex flex-col items-center justify-center mb-40 px-4">
            {/* Nether Style Panel */}
            <div className="bg-[#600000] border-[6px] border-black shadow-[inset_-6px_-6px_0_rgba(48,0,0,1),inset_6px_6px_0_rgba(138,0,0,1),8px_8px_0_rgba(0,0,0,0.8)] p-10 max-w-3xl text-center relative overflow-hidden">
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
          {/* Nether Ground */}
          <div className="w-full h-[33vh] bg-[#600000] border-t-[12px] border-[#8A0000] flex flex-col relative z-10">
             <div className="w-full h-10 bg-[#400000]" />
             <div className="w-full flex-grow bg-[#300000] relative overflow-hidden">
                <div className="absolute top-4 left-[30%] w-24 h-12 bg-[#FF5500] border-b-[6px] border-[#CC4400]" />
                <div className="absolute top-16 left-[35%] w-12 h-12 bg-[#FF5500]" />
                <div className="absolute top-10 left-[70%] w-6 h-6 bg-[#1A0000]" />
             </div>
          </div>
        </div>

        {/* Slide 4: The End */}
        <div className="w-screen h-full flex flex-col justify-end items-center relative">
          <div className="absolute inset-0 bg-[#0A0514] -z-10 border-l-[16px] border-black">
             <div className="absolute top-[10%] left-[10%] w-3 h-3 bg-[#EEDDFF] opacity-50" />
             <div className="absolute top-[20%] left-[40%] w-3 h-3 bg-[#EEDDFF] opacity-70" />
             <div className="absolute top-[15%] left-[70%] w-4 h-4 bg-[#EEDDFF] opacity-40" />
             <div className="absolute top-[30%] left-[85%] w-3 h-3 bg-[#EEDDFF] opacity-80" />
             <div className="absolute top-[50%] left-[25%] w-2 h-2 bg-[#EEDDFF] opacity-60" />
          </div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center mb-40 px-4">
            {/* End Style Panel */}
            <div className="bg-[#1A1A1A] border-[6px] border-[#333333] shadow-[inset_-6px_-6px_0_rgba(0,0,0,0.8),inset_6px_6px_0_rgba(255,255,255,0.1),8px_8px_0_rgba(0,0,0,1)] p-10 max-w-3xl text-center border-t-[#8B00FF] border-t-[12px]">
              <h2 className="text-3xl md:text-5xl text-[#EEDDFF] font-bold tracking-widest uppercase mb-4 drop-shadow-[2px_2px_0_rgba(139,0,255,0.8)]">
                [ SYSTEM 04 ]
              </h2>
              <div className="h-1.5 w-full bg-[#000000] mb-6 border-b-[3px] border-[#333333]"></div>
              <h3 className="text-xl md:text-3xl text-green-400 font-bold mb-4 drop-shadow-[1px_1px_0_rgba(0,0,0,0.8)]">Social Dynamics & Trolling-Mechanics<br/><span className="text-lg opacity-80">(GSit & EssentialsX)</span></h3>
              <p className="text-base md:text-xl text-[#D0C0E0] font-semibold leading-relaxed mb-10 drop-shadow-[2px_2px_0_rgba(0,0,0,0.8)]">
                Maximale Freiheit für Chaos und reibungsloses Teamplay. Nutzt physische Emotes (<span className="font-mono text-white">/sit, /lay</span>) oder krabbelt flach auf dem Bauch (<span className="font-mono text-white">/crawl</span>) durch geheime 1-Block-Tunnel. Das Highlight: Per Rechtsklick könnt ihr euch gegenseitig Huckepack auf den Kopf setzen und gigantische Spielertürme bilden. Dank EssentialsX-Infrastruktur stehen euch Ingame-Wirtschaft, <span className="font-mono text-white">/sethome</span> und <span className="font-mono text-white">/tpa</span>-Teleportation zur Verfügung.
              </p>
              
              <div className="flex justify-center">
                {/* End Crystal */}
                <div className="w-20 h-20 bg-[#FFAAFF] border-[6px] border-[#FF55FF] rotate-45 shadow-[0_0_30px_rgba(255,85,255,0.8)] relative">
                   <div className="absolute inset-0 border-[4px] border-white mix-blend-overlay opacity-50"></div>
                </div>
              </div>
            </div>
          </div>
          {/* End Stone Ground */}
          <div className="w-full h-[33vh] bg-[#F0F0A0] border-t-[12px] border-[#FFFFC0] flex flex-col relative z-10">
             <div className="w-full h-10 bg-[#A0A050]" />
             <div className="w-full flex-grow bg-[#E0E080] relative overflow-hidden">
                <div className="absolute top-10 left-[25%] w-6 h-6 bg-[#C0C060]" />
                <div className="absolute top-20 left-[75%] w-8 h-8 bg-[#C0C060]" />
             </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
