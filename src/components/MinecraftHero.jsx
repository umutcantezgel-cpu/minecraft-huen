import React, { useState, useEffect, useRef } from 'react';
import { Play, Volume2, VolumeX, Server, Users } from 'lucide-react';
import gsap from 'gsap';

export default function MinecraftHero() {
  const [entered, setEntered] = useState(false);
  const [muted, setMuted] = useState(false);
  const audioRef = useRef(null);
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    // Create audio element - placeholder ambient track
    audioRef.current = new Audio('https://assets.mixkit.co/music/preview/mixkit-beautiful-dream-493.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const handleEnter = () => {
    setEntered(true);
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log('Audio play failed:', e));
    }

    // GSAP animations
    setTimeout(() => {
      const tl = gsap.timeline();
      
      tl.fromTo(titleRef.current, 
        { y: 150, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "back.out(1.5)" }
      )
      .fromTo(subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo(ctaRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.2)" },
        "-=0.5"
      )
      .fromTo(statsRef.current.children,
        { y: 30, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.15, ease: "power2.out" },
        "-=0.4"
      );
    }, 100);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  if (!entered) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950">
        <button 
          onClick={handleEnter}
          className="group relative px-10 py-5 font-black text-white text-3xl uppercase tracking-[0.2em] bg-green-500 hover:bg-green-400 transition-all border-b-[6px] border-green-700 hover:border-green-500 rounded-md active:translate-y-2 active:border-b-0"
        >
          <span className="flex items-center gap-4">
            <Play className="w-10 h-10 fill-current group-hover:scale-110 transition-transform" />
            Enter World
          </span>
        </button>
      </div>
    );
  }

  return (
    <div ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-sky-300">
      {/* Dynamic bright background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-300 via-sky-200 to-sky-100" />
        {/* Sun/Light burst effect */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-yellow-100/60 blur-[100px] rounded-full mix-blend-overlay" />
        
        {/* Animated clouds (CSS simulated) */}
        <div className="absolute top-20 left-10 w-48 h-16 bg-white/40 blur-xl rounded-full" />
        <div className="absolute top-40 right-20 w-64 h-24 bg-white/30 blur-2xl rounded-full" />
        <div className="absolute bottom-1/3 left-1/4 w-72 h-20 bg-white/40 blur-xl rounded-full" />
      </div>

      {/* Minecraft-like Grid pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#000 2px, transparent 2px), linear-gradient(90deg, #000 2px, transparent 2px)', backgroundSize: '64px 64px' }} />

      {/* Audio toggle */}
      <button 
        onClick={toggleMute}
        className="absolute top-8 right-8 z-20 p-4 bg-white/30 hover:bg-white/50 backdrop-blur-md rounded-xl text-zinc-800 transition-all shadow-lg border border-white/50"
      >
        {muted ? <VolumeX className="w-8 h-8" /> : <Volume2 className="w-8 h-8" />}
      </button>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center mt-12">
        <h1 
          ref={titleRef}
          className="text-7xl md:text-[9rem] font-black text-white tracking-tighter drop-shadow-2xl mb-6 uppercase"
          style={{ 
            textShadow: '0 20px 40px rgba(0,0,0,0.3), 0 8px 8px rgba(0,0,0,0.4), inset 0 2px 0 rgba(255,255,255,0.5)',
            WebkitTextStroke: '4px #1f2937'
          }}
        >
          CRAFT<span className="text-green-400">MC</span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-2xl md:text-4xl font-bold text-zinc-800 max-w-3xl mb-16 drop-shadow-lg"
          style={{ textShadow: '0 2px 10px rgba(255,255,255,0.8)' }}
        >
          The ultimate survival experience awaits. Build, explore, and conquer together.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 mb-24">
          <button className="px-12 py-6 bg-green-500 hover:bg-green-400 text-white font-black text-2xl rounded-md shadow-[0_10px_0_rgb(21,128,61)] hover:shadow-[0_5px_0_rgb(21,128,61)] hover:translate-y-[5px] active:translate-y-[10px] active:shadow-none transition-all flex items-center justify-center gap-4 border-2 border-green-600 uppercase tracking-wide">
            <Play className="fill-current w-8 h-8" />
            Play Now
          </button>
          
          <button className="px-12 py-6 bg-white hover:bg-zinc-100 text-zinc-800 font-black text-2xl rounded-md shadow-[0_10px_0_rgb(161,161,170)] hover:shadow-[0_5px_0_rgb(161,161,170)] hover:translate-y-[5px] active:translate-y-[10px] active:shadow-none transition-all flex items-center justify-center gap-4 border-2 border-zinc-300 uppercase tracking-wide">
            <Server className="w-8 h-8" />
            Copy IP
          </button>
        </div>

        {/* Server Stats */}
        <div ref={statsRef} className="flex flex-wrap justify-center gap-6 md:gap-12">
          <div className="bg-white/50 backdrop-blur-xl px-10 py-8 rounded-3xl border-2 border-white shadow-2xl flex flex-col items-center transform transition-transform hover:scale-105">
            <Users className="w-12 h-12 text-blue-600 mb-4" />
            <span className="text-5xl font-black text-zinc-900 mb-2 tracking-tight">1,204</span>
            <span className="text-zinc-700 font-bold uppercase tracking-widest text-sm">Players Online</span>
          </div>
          <div className="bg-white/50 backdrop-blur-xl px-10 py-8 rounded-3xl border-2 border-white shadow-2xl flex flex-col items-center transform transition-transform hover:scale-105">
            <Server className="w-12 h-12 text-green-600 mb-4" />
            <span className="text-5xl font-black text-zinc-900 mb-2 tracking-tight">99.9%</span>
            <span className="text-zinc-700 font-bold uppercase tracking-widest text-sm">Server Uptime</span>
          </div>
        </div>
      </div>
    </div>
  );
}
