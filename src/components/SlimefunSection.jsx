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
          start: 'top 70%',
          end: 'bottom center',
          toggleActions: 'play none none reverse',
        }
      });

      tl.from(titleRef.current, {
        y: 80,
        opacity: 0,
        duration: 0.8,
        ease: 'power4.out',
      })
      .from(itemsRef.current, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.5)',
      }, "-=0.4");
      
      // Continuous floating animation
      itemsRef.current.forEach((item, i) => {
        gsap.to(item, {
          y: i % 2 === 0 ? -10 : 10,
          duration: 2 + i * 0.2,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
          delay: i * 0.1
        });
      });
      
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      title: "Automated Factories",
      desc: "Build massive production lines with auto-crafters, smelters, and sorters. Automate everything from ore doubling to complex crafting.",
      icon: "🏭",
      color: "from-green-400 to-emerald-600",
      shadow: "shadow-emerald-500/50"
    },
    {
      title: "Cargo Networks",
      desc: "Transport items seamlessly across your base using advanced routing nodes. Keep your storage perfectly sorted.",
      icon: "📦",
      color: "from-blue-400 to-cyan-600",
      shadow: "shadow-cyan-500/50"
    },
    {
      title: "Nuclear Reactors",
      desc: "Harness immense power to run your machines, but keep the cooling systems running to prevent devastating meltdowns!",
      icon: "☢️",
      color: "from-amber-400 to-orange-600",
      shadow: "shadow-orange-500/50"
    },
    {
      title: "Magical Gadgets",
      desc: "Craft jetpacks, grappling hooks, and elemental staves. Dominate the skies and traverse the world with ease.",
      icon: "✨",
      color: "from-purple-400 to-fuchsia-600",
      shadow: "shadow-fuchsia-500/50"
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen bg-neutral-900 py-32 px-6 lg:px-12 overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Minecraft-like grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', 
          backgroundSize: '64px 64px' 
        }} 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={titleRef} className="text-center mb-24">
          <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold tracking-wide text-sm mb-6">
            MODPACK EXPERIENCE
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tight">
            Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Slimefun 4</span>
          </h2>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Expand your Minecraft world with hundreds of new items, machines, and multi-block structures—no client mods required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, i) => (
            <div 
              key={i}
              ref={el => itemsRef.current[i] = el}
              className="group relative"
            >
              <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-br ${feat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md`} />
              <div className="relative h-full bg-neutral-800 p-8 rounded-2xl border border-neutral-700/50 flex flex-col hover:-translate-y-2 transition-transform duration-300">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-6 bg-gradient-to-br ${feat.color} shadow-lg ${feat.shadow}`}>
                  {feat.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feat.title}</h3>
                <p className="text-neutral-400 leading-relaxed flex-grow">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-32 text-center flex flex-col items-center">
          <div className="h-24 w-px bg-gradient-to-b from-transparent via-emerald-500 to-transparent mb-8 opacity-50" />
          <button className="group relative px-8 py-4 bg-white text-neutral-900 font-bold rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(16,185,129,0.3)]">
            <span className="relative z-10 flex items-center gap-2 text-lg">
              Open the Guidebook
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
