import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function SocialSection() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=150%',
        scrub: 1,
        pin: true,
      }
    });

    tl.from(titleRef.current, { y: -50, opacity: 0, duration: 1 })
      .from(cardsRef.current, { 
        y: 100, 
        opacity: 0, 
        stagger: 0.3, 
        duration: 1,
        rotationX: -15
      }, "-=0.5")
      .to(titleRef.current, { textShadow: "4px 4px 0px #3FE0D8", scale: 1.05, duration: 1 })
      .to(cardsRef.current, { y: -10, duration: 1, stagger: 0.1 });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full h-screen flex flex-col items-center justify-center bg-[#05070E] overflow-hidden font-sans">
      
      {/* Pixelated Dirt/Stone Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ 
        backgroundImage: 'linear-gradient(#3FE0D8 2px, transparent 2px), linear-gradient(90deg, #3FE0D8 2px, transparent 2px)', 
        backgroundSize: '64px 64px' 
      }}></div>

      <div className="relative z-10 text-center mb-20 mt-10">
        <h2 ref={titleRef} className="text-5xl md:text-7xl font-bold text-white tracking-widest uppercase mb-4" style={{ fontFamily: '"Press Start 2P", monospace', textShadow: '4px 4px 0px #000' }}>
          SOZIALES
        </h2>
        <p className="text-xl text-[#9DAAC6] tracking-widest uppercase font-bold" style={{ fontFamily: '"Press Start 2P", monospace', textShadow: '2px 2px 0px #000' }}>
          Verbinden. Bauen. Erobern.
        </p>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row gap-8 px-8 w-full max-w-6xl">
        
        {/* Card 1: Discord */}
        <div ref={el => cardsRef.current[0] = el} className="flex-1 bg-[#8B8B8B] p-1 border-t-4 border-l-4 border-white border-b-4 border-r-4 border-black relative">
          <div className="bg-[#101728] h-full p-6 relative border-t-4 border-l-4 border-[#373737] border-b-4 border-r-4 border-[#C6C6C6]">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#3FE0D8] px-4 py-1 border-2 border-black shadow-[2px_2px_0px_#000]">
              <h3 className="text-black font-bold uppercase tracking-widest text-sm" style={{ fontFamily: '"Press Start 2P", monospace' }}>Discord</h3>
            </div>
            <div className="mt-6 text-[#EAEFFA] text-center leading-relaxed font-sans flex flex-col h-[calc(100%-2rem)]">
              <p className="mb-6 font-bold flex-grow">Unser Hauptquartier. Sprachkanäle, spontane Sessions und alle wichtigen Updates direkt für die Gruppe.</p>
              <a href="https://discord.com/channels/328246622834393088" target="_blank" rel="noopener noreferrer" className="block text-center w-full bg-[#3FE0D8] text-black font-bold py-3 uppercase border-t-2 border-l-2 border-white border-b-4 border-r-4 border-black hover:bg-[#2bc4bc] active:border-t-4 active:border-l-4 active:border-black active:border-b-0 active:border-r-0 transition-all" style={{ fontFamily: '"Press Start 2P", monospace', fontSize: '0.8rem' }}>
                JETZT BEITRETEN
              </a>
            </div>
          </div>
        </div>

        {/* Card 2: Factions */}
        <div ref={el => cardsRef.current[1] = el} className="flex-1 bg-[#8B8B8B] p-1 border-t-4 border-l-4 border-white border-b-4 border-r-4 border-black relative">
          <div className="bg-[#101728] h-full p-6 relative border-t-4 border-l-4 border-[#373737] border-b-4 border-r-4 border-[#C6C6C6]">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#17DD62] px-4 py-1 border-2 border-black shadow-[2px_2px_0px_#000]">
              <h3 className="text-black font-bold uppercase tracking-widest text-sm" style={{ fontFamily: '"Press Start 2P", monospace' }}>Fraktionen</h3>
            </div>
            <div className="mt-6 text-[#EAEFFA] text-center leading-relaxed font-sans">
              <p className="mb-6 font-bold">Bilde Allianzen, beanspruche Territorium und führe Krieg oder schließe Frieden. Das Schicksal des Servers liegt in deinen Händen.</p>
              <button className="w-full bg-[#17DD62] text-black font-bold py-3 uppercase border-t-2 border-l-2 border-white border-b-4 border-r-4 border-black hover:bg-[#12b950] active:border-t-4 active:border-l-4 active:border-black active:border-b-0 active:border-r-0 transition-all" style={{ fontFamily: '"Press Start 2P", monospace', fontSize: '0.8rem' }}>
                KARTE ANSEHEN
              </button>
            </div>
          </div>
        </div>

        {/* Card 3: Events */}
        <div ref={el => cardsRef.current[2] = el} className="flex-1 bg-[#8B8B8B] p-1 border-t-4 border-l-4 border-white border-b-4 border-r-4 border-black relative">
          <div className="bg-[#101728] h-full p-6 relative border-t-4 border-l-4 border-[#373737] border-b-4 border-r-4 border-[#C6C6C6]">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#FCDC5F] px-4 py-1 border-2 border-black shadow-[2px_2px_0px_#000]">
              <h3 className="text-black font-bold uppercase tracking-widest text-sm" style={{ fontFamily: '"Press Start 2P", monospace' }}>Events</h3>
            </div>
            <div className="mt-6 text-[#EAEFFA] text-center leading-relaxed font-sans">
              <p className="mb-6 font-bold">Wöchentliche Bosskämpfe, Bauwettbewerbe und Drop-Partys. Verdiene exklusive Beute und serverweite Anerkennung.</p>
              <button className="w-full bg-[#FCDC5F] text-black font-bold py-3 uppercase border-t-2 border-l-2 border-white border-b-4 border-r-4 border-black hover:bg-[#e0c141] active:border-t-4 active:border-l-4 active:border-black active:border-b-0 active:border-r-0 transition-all" style={{ fontFamily: '"Press Start 2P", monospace', fontSize: '0.8rem' }}>
                ZEITPLAN
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
