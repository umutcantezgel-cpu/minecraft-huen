import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MagicSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const wandsRef = useRef(null);
  const spellsRef = useRef(null);
  const telekinesisRef = useRef(null);
  const wandIconRef = useRef(null);
  const spellIconRef = useRef(null);
  const teleIconRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main timeline for deep scrub interactivity based on scroll position
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        }
      });

      tl.fromTo(titleRef.current,
        { opacity: 0, scale: 0.5, y: -50 },
        { opacity: 1, scale: 1, y: 0, duration: 1 },
        0
      );

      // Card appearances
      tl.fromTo(wandsRef.current, 
        { opacity: 0, x: -150, rotation: -15 },
        { opacity: 1, x: 0, rotation: 0, duration: 1 },
        0.5
      );
      
      tl.fromTo(spellsRef.current, 
        { opacity: 0, scale: 0.5, y: 150 },
        { opacity: 1, scale: 1, y: 0, duration: 1 },
        0.8
      );

      tl.fromTo(telekinesisRef.current, 
        { opacity: 0, x: 150, rotation: 15 },
        { opacity: 1, x: 0, rotation: 0, duration: 1 },
        1.1
      );

      // Deep interactivity - Magic elements moving internally as we scroll further
      tl.to(wandIconRef.current, { rotation: 360, x: 20, duration: 1.5, ease: "power1.inOut" }, 1.5);
      tl.to(spellIconRef.current, { scale: 1.5, rotation: -360, duration: 1.5, ease: "power1.inOut" }, 1.5);
      tl.to(teleIconRef.current, { y: -30, scale: 1.2, duration: 1.5, ease: "power1.inOut" }, 1.5);
      
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative bg-[#25103c] text-white py-24 px-4 sm:px-6 lg:px-8 border-y-8 border-[#150a21] font-minecraft overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('/img/magic-bg.png')] bg-repeat" style={{ backgroundSize: '64px' }}></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 
          ref={titleRef}
          className="text-5xl md:text-6xl font-bold text-center mb-20 text-[#d97cff] drop-shadow-[4px_4px_0_rgba(0,0,0,1)] uppercase tracking-wider"
        >
          Active Magic System
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Wands & Staffs */}
          <div ref={wandsRef} className="mc-panel flex flex-col items-center text-center group">
            <div className="w-full bg-[#1a0f2e] p-6 border-4 border-[#000000] mb-6 flex justify-center items-center h-48 relative overflow-hidden">
              <span ref={wandIconRef} className="text-7xl z-10" role="img" aria-label="wand">🪄</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d97cff] to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-[#ffd700] drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">Arcane Wands</h3>
            <p className="text-[#e2e2e2] leading-relaxed drop-shadow-[1px_1px_0_rgba(0,0,0,0.8)] text-lg">
              Craft unique wands from rare materials found in the deep dark. Each wand core changes the nature of your spells. Master the Blaze Rod wand of fire or the Ender Pearl wand of teleportation.
            </p>
          </div>

          {/* Spells */}
          <div ref={spellsRef} className="mc-panel flex flex-col items-center text-center group">
            <div className="w-full bg-[#1a0f2e] p-6 border-4 border-[#000000] mb-6 flex justify-center items-center h-48 relative overflow-hidden">
              <div className="absolute w-32 h-32 bg-[#ff55ff] rounded-full blur-2xl animate-pulse opacity-50"></div>
              <span ref={spellIconRef} className="text-7xl relative z-10" role="img" aria-label="spell">✨</span>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-[#ff55ff] drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">Dynamic Spells</h3>
            <p className="text-[#e2e2e2] leading-relaxed drop-shadow-[1px_1px_0_rgba(0,0,0,0.8)] text-lg">
              Combine runes in your spellbook to discover new incantations. Cast devastating fireballs, summon protective arcane shields, or unleash chains of lightning to vanquish mobs.
            </p>
          </div>

          {/* Telekinesis */}
          <div ref={telekinesisRef} className="mc-panel flex flex-col items-center text-center group">
            <div className="w-full bg-[#1a0f2e] p-6 border-4 border-[#000000] mb-6 flex justify-center items-center h-48 relative overflow-hidden">
              <span ref={teleIconRef} className="text-7xl z-10" role="img" aria-label="telekinesis">📦</span>
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#55ffff] to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-[#55ffff] drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">Telekinesis</h3>
            <p className="text-[#e2e2e2] leading-relaxed drop-shadow-[1px_1px_0_rgba(0,0,0,0.8)] text-lg">
              Move blocks with the power of your mind! Solve environmental puzzles, build from afar, or throw anvils at unsuspecting Creepers. Your mind is your greatest tool.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
