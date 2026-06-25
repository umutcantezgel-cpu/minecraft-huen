import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MagicSection() {
  const sectionRef = useRef(null);
  const wandsRef = useRef(null);
  const spellsRef = useRef(null);
  const telekinesisRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Wands animation
      gsap.fromTo(wandsRef.current, 
        { opacity: 0, x: -100, rotation: -45 },
        { 
          opacity: 1, 
          x: 0, 
          rotation: 0,
          scrollTrigger: {
            trigger: wandsRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          }
        }
      );

      // Spells animation
      gsap.fromTo(spellsRef.current, 
        { opacity: 0, scale: 0.5, y: 50 },
        { 
          opacity: 1, 
          scale: 1, 
          y: 0,
          scrollTrigger: {
            trigger: spellsRef.current,
            start: "top 85%",
            end: "top 60%",
            scrub: 1,
          }
        }
      );

      // Telekinesis animation
      gsap.fromTo(telekinesisRef.current, 
        { opacity: 0, y: -100 },
        { 
          opacity: 1, 
          y: 0, 
          ease: "bounce.out",
          scrollTrigger: {
            trigger: telekinesisRef.current,
            start: "top 80%",
            end: "top 40%",
            scrub: 2,
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#5a9c36] text-white py-20 px-4 sm:px-6 lg:px-8 border-t-8 border-[#3d6e22] font-minecraft">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 text-yellow-300 drop-shadow-[4px_4px_0_rgba(0,0,0,1)] uppercase tracking-wider">
          Active Magic System
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Wands & Staffs */}
          <div ref={wandsRef} className="bg-[#8b8b8b] border-4 border-[#373737] p-6 shadow-[inset_-4px_-4px_0px_0px_rgba(0,0,0,0.3),inset_4px_4px_0px_0px_rgba(255,255,255,0.3)]">
            <div className="bg-[#2c2c2c] p-4 mb-4 border-2 border-black flex justify-center items-center h-48">
              <span className="text-6xl" role="img" aria-label="wand">🪄</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">Arcane Wands</h3>
            <p className="text-[#dcdcdc] leading-relaxed drop-shadow-[1px_1px_0_rgba(0,0,0,0.8)]">
              Craft unique wands from rare materials found in the deep dark. Each wand core changes the nature of your spells. Will you master the Blaze Rod wand of fire or the Ender Pearl wand of teleportation?
            </p>
          </div>

          {/* Spells */}
          <div ref={spellsRef} className="bg-[#8b8b8b] border-4 border-[#373737] p-6 shadow-[inset_-4px_-4px_0px_0px_rgba(0,0,0,0.3),inset_4px_4px_0px_0px_rgba(255,255,255,0.3)]">
            <div className="bg-[#2c2c2c] p-4 mb-4 border-2 border-black flex justify-center items-center h-48 relative overflow-hidden">
              <div className="absolute w-20 h-20 bg-purple-500 rounded-full blur-xl animate-pulse"></div>
              <span className="text-6xl relative z-10" role="img" aria-label="spell">✨</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">Dynamic Spells</h3>
            <p className="text-[#dcdcdc] leading-relaxed drop-shadow-[1px_1px_0_rgba(0,0,0,0.8)]">
              Combine runes in your spellbook to discover new incantations. Cast devastating fireballs, summon protective arcane shields, or unleash chains of lightning to vanquish mobs.
            </p>
          </div>

          {/* Telekinesis */}
          <div ref={telekinesisRef} className="bg-[#8b8b8b] border-4 border-[#373737] p-6 shadow-[inset_-4px_-4px_0px_0px_rgba(0,0,0,0.3),inset_4px_4px_0px_0px_rgba(255,255,255,0.3)]">
            <div className="bg-[#2c2c2c] p-4 mb-4 border-2 border-black flex justify-center items-center h-48">
              <span className="text-6xl animate-bounce" role="img" aria-label="telekinesis">📦</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">Telekinesis</h3>
            <p className="text-[#dcdcdc] leading-relaxed drop-shadow-[1px_1px_0_rgba(0,0,0,0.8)]">
              Move blocks with the power of your mind! Solve environmental puzzles, build from afar, or throw anvils at unsuspecting Creepers. Your mind is your greatest tool.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
