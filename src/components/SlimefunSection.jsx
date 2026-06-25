import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SlimefunSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
        }
      });

      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        scale: 0.9,
        ease: 'none',
      })
      .to(titleRef.current, {
        y: 0,
        opacity: 1,
        scale: 1,
        ease: 'none',
      }, 0.2);

      itemsRef.current.forEach((item, i) => {
        tl.from(item, {
          y: 150 + (i * 50),
          opacity: 0,
          rotation: (i % 2 === 0 ? -5 : 5),
          ease: 'none',
        }, i * 0.1)
        .to(item, {
          y: 0,
          opacity: 1,
          rotation: 0,
          ease: 'none',
        }, i * 0.1 + 0.3);
      });
      
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      title: "Automatisierte Fabriken",
      desc: "Baue gigantische Produktionslinien mit Auto-Craftern, Schmelzöfen und Sortierern. Automatisiere alles von der Erzverdopplung bis zum komplexen Crafting.",
      icon: "🏭"
    },
    {
      title: "Frachtnetzwerke",
      desc: "Transportiere Items nahtlos durch deine Basis mithilfe fortschrittlicher Routing-Knoten. Halte dein Lager perfekt sortiert.",
      icon: "📦"
    },
    {
      title: "Atomreaktoren",
      desc: "Nutze immense Energie, um deine Maschinen zu betreiben, aber halte die Kühlsysteme am Laufen, um verheerende Kernschmelzen zu verhindern!",
      icon: "☢️"
    },
    {
      title: "Magische Gadgets",
      desc: "Crafte Jetpacks, Greifhaken und Elementarstäbe. Beherrsche den Himmel und durchquere die Welt mit Leichtigkeit.",
      icon: "✨"
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen bg-[#111111] py-32 px-6 lg:px-12 overflow-hidden mc-font"
    >
      {/* Minecraft-like grid background */}
      <div 
        className="absolute inset-0 opacity-[0.2] pointer-events-none image-pixelated" 
        style={{ 
          backgroundImage: 'linear-gradient(45deg, #222 25%, transparent 25%, transparent 75%, #222 75%, #222), linear-gradient(45deg, #222 25%, transparent 25%, transparent 75%, #222 75%, #222)', 
          backgroundSize: '64px 64px',
          backgroundPosition: '0 0, 32px 32px'
        }} 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={titleRef} className="text-center mb-24 flex flex-col items-center">
          <div className="mc-panel bg-[#1a1a1a] inline-block px-6 py-2 mb-6 border-4 border-[#3a3a3a]">
            <span className="text-[#55FF55] font-bold tracking-widest text-sm drop-shadow-[2px_2px_0px_#000]">
              MODPACK-ERLEBNIS
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-white drop-shadow-[4px_4px_0px_#000]">
            Entdecke <span className="text-[#55FF55]">Slimefun 4</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#AAAAAA] max-w-3xl mx-auto leading-relaxed drop-shadow-[2px_2px_0px_#000]">
            Erweitere deine Minecraft-Welt mit Hunderten von neuen Items, Maschinen und Multi-Block-Strukturen – ganz ohne Client-Mods.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, i) => (
            <div 
              key={i}
              ref={el => itemsRef.current[i] = el}
              className="mc-panel relative p-6 flex flex-col group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-16 h-16 bg-[#222222] border-4 border-[#111111] border-b-[#444444] border-r-[#444444] flex items-center justify-center text-3xl mb-6 shadow-[inset_0px_0px_10px_#000] drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
                {feat.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-[2px_2px_0px_#000]">{feat.title}</h3>
              <p className="text-[#AAAAAA] leading-relaxed flex-grow drop-shadow-[2px_2px_0px_#000]">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-32 text-center flex flex-col items-center">
          <div className="mc-panel bg-[#444444] w-2 h-24 mb-8 border-2 border-[#222222]" />
          <button className="mc-btn px-8 py-4 text-xl">
            Öffne das Handbuch
          </button>
        </div>
      </div>
    </section>
  );
}
