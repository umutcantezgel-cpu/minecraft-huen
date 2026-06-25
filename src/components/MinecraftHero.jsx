import React, { useEffect, useRef } from 'react';
import { Play, Server, Users } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MinecraftHero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);
  const cloudsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline tied to scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        }
      });

      // Parallax and fade out as we scroll down
      tl.to(titleRef.current, { y: 150, scale: 1.1, opacity: 0 }, 0)
        .to(subtitleRef.current, { y: 100, opacity: 0 }, 0)
        .to(ctaRef.current, { y: 50, opacity: 0 }, 0)
        .to(statsRef.current, { y: 20, opacity: 0 }, 0);

      // Clouds moving effect
      cloudsRef.current.forEach((cloud, i) => {
        if (cloud) {
          tl.to(cloud, { x: i % 2 === 0 ? 300 : -300 }, 0);
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const setCloudRef = (el) => {
    if (el && !cloudsRef.current.includes(el)) {
      cloudsRef.current.push(el);
    }
  };

  return (
    <div ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-sky-300">
      {/* Dynamic bright background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-300 via-sky-200 to-sky-100" />
        {/* Sun/Light burst effect */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-yellow-100/60 blur-[100px] rounded-full mix-blend-overlay" />
        
        {/* Animated clouds (CSS simulated) */}
        <div ref={setCloudRef} className="absolute top-20 left-10 w-48 h-16 bg-white/40 blur-xl rounded-full" />
        <div ref={setCloudRef} className="absolute top-40 right-20 w-64 h-24 bg-white/30 blur-2xl rounded-full" />
        <div ref={setCloudRef} className="absolute bottom-1/3 left-1/4 w-72 h-20 bg-white/40 blur-xl rounded-full" />
      </div>

      {/* Minecraft-like Grid pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 2px, transparent 2px), linear-gradient(90deg, #000 2px, transparent 2px)', backgroundSize: '64px 64px' }} />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center mt-12">
        <h1 
          ref={titleRef}
          className="text-7xl md:text-[9rem] font-black text-white tracking-tighter drop-shadow-2xl mb-6 uppercase"
          style={{ 
            textShadow: '4px 4px 0 #000, -4px -4px 0 #000, 4px -4px 0 #000, -4px 4px 0 #000, 0 8px 0 #000',
          }}
        >
          CRAFT<span className="text-green-400">MC</span>
        </h1>
        
        <div ref={subtitleRef} className="mc-panel mb-16 max-w-3xl p-6">
          <p className="text-2xl md:text-4xl font-bold text-white text-center" style={{ textShadow: '2px 2px 0 #000' }}>
            Das ultimative Survival-Erlebnis erwartet dich. Bauen, erkunden und gemeinsam erobern.
          </p>
        </div>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 mb-24">
          <button className="mc-btn flex items-center justify-center gap-4 px-12 py-6 text-2xl font-black text-white" style={{ textShadow: '2px 2px 0 #000' }}>
            <Play className="fill-current w-8 h-8" />
            Jetzt spielen
          </button>
          
          <button className="mc-btn flex items-center justify-center gap-4 px-12 py-6 text-2xl font-black text-white" style={{ textShadow: '2px 2px 0 #000' }}>
            <Server className="w-8 h-8" />
            IP kopieren
          </button>
        </div>

        {/* Server Stats */}
        <div ref={statsRef} className="flex flex-wrap justify-center gap-6 md:gap-12">
          <div className="mc-panel flex flex-col items-center px-10 py-8 min-w-[240px] transform transition-transform hover:scale-105">
            <Users className="w-12 h-12 text-blue-400 mb-4 drop-shadow-[2px_2px_0_#000]" />
            <span className="text-5xl font-black text-white mb-2 drop-shadow-[2px_2px_0_#000]">1,204</span>
            <span className="text-zinc-200 font-bold uppercase tracking-widest text-sm drop-shadow-[1px_1px_0_#000]">Spieler online</span>
          </div>
          <div className="mc-panel flex flex-col items-center px-10 py-8 min-w-[240px] transform transition-transform hover:scale-105">
            <Server className="w-12 h-12 text-green-400 mb-4 drop-shadow-[2px_2px_0_#000]" />
            <span className="text-5xl font-black text-white mb-2 drop-shadow-[2px_2px_0_#000]">99.9%</span>
            <span className="text-zinc-200 font-bold uppercase tracking-widest text-sm drop-shadow-[1px_1px_0_#000]">Server-Laufzeit</span>
          </div>
        </div>
      </div>
    </div>
  );
}
