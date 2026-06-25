"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SocialSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title Animation
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
          },
        }
      );

      // Cards Animation
      gsap.fromTo(
        cardsRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className="py-20 px-4 min-h-screen flex flex-col justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #74CCF4, #5ABCB4)',
        fontFamily: "'Minecraft', 'Courier New', Courier, monospace"
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-20 rounded-sm" style={{ boxShadow: '20px 20px 0 rgba(255,255,255,0.2)' }}></div>
      <div className="absolute bottom-20 right-10 w-48 h-24 bg-white opacity-30 rounded-sm" style={{ boxShadow: '-20px -20px 0 rgba(255,255,255,0.2)' }}></div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-5xl md:text-6xl font-bold text-white mb-4"
            style={{ 
              textShadow: '4px 4px 0px #3A8679, -2px -2px 0px #8DE2D7',
              WebkitTextStroke: '2px #2A6658'
            }}
          >
            Hang Out & Chat
          </h2>
          <p className="text-xl text-white font-semibold max-w-2xl mx-auto drop-shadow-md">
            Connect with friends like never before using our custom social features!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* GSit Feature Card */}
          <div 
            ref={addToRefs}
            className="bg-white/90 backdrop-blur-sm p-8 rounded-xl border-4 border-[#5ABCB4] shadow-[8px_8px_0px_#3A8679] transform transition-transform hover:-translate-y-2 hover:shadow-[12px_12px_0px_#3A8679]"
          >
            <div className="h-48 bg-[#E5F6F4] rounded-lg mb-6 flex items-center justify-center border-2 border-[#5ABCB4] overflow-hidden relative">
              <div className="absolute bottom-0 w-full h-8 bg-[#8DE2D7]"></div>
              <div className="w-16 h-16 bg-[#F4A261] border-4 border-black mb-4 z-10 animate-bounce"></div>
              <div className="absolute top-4 left-4 bg-[#E76F51] text-white text-xs px-2 py-1 font-bold border-2 border-black rotate-[-10deg]">/sit</div>
              <div className="absolute top-4 right-4 bg-[#2A9D8F] text-white text-xs px-2 py-1 font-bold border-2 border-black rotate-[10deg]">/crawl</div>
            </div>
            <h3 className="text-3xl font-bold text-[#2A6658] mb-4 uppercase tracking-wider">Take a Seat (Anywhere!)</h3>
            <p className="text-gray-700 text-lg leading-relaxed font-medium">
              Tired after a long mining session? Use our <strong>GSit</strong> features to sit on stairs, slabs, or even players! Need to get through a tight spot? <strong>Crawl</strong> your way into hidden bases.
            </p>
            <ul className="mt-4 space-y-2 text-[#2A9D8F] font-bold">
              <li>✓ Click blocks to sit naturally</li>
              <li>✓ Crawl through 1x1 gaps</li>
              <li>✓ Express yourself with lay and spin!</li>
            </ul>
          </div>

          {/* Voice Chat Feature Card */}
          <div 
            ref={addToRefs}
            className="bg-white/90 backdrop-blur-sm p-8 rounded-xl border-4 border-[#F4A261] shadow-[8px_8px_0px_#D67D3E] transform transition-transform hover:-translate-y-2 hover:shadow-[12px_12px_0px_#D67D3E]"
          >
            <div className="h-48 bg-[#FFF3E8] rounded-lg mb-6 flex items-center justify-center border-2 border-[#F4A261] overflow-hidden relative">
               <div className="flex items-end justify-center space-x-2 h-20">
                  <div className="w-4 bg-[#E76F51] rounded-t-sm animate-[pulse_1s_ease-in-out_infinite] h-8"></div>
                  <div className="w-4 bg-[#E76F51] rounded-t-sm animate-[pulse_1.2s_ease-in-out_infinite] h-16"></div>
                  <div className="w-4 bg-[#E76F51] rounded-t-sm animate-[pulse_0.8s_ease-in-out_infinite] h-12"></div>
                  <div className="w-4 bg-[#E76F51] rounded-t-sm animate-[pulse_1.5s_ease-in-out_infinite] h-20"></div>
                  <div className="w-4 bg-[#E76F51] rounded-t-sm animate-[pulse_1.1s_ease-in-out_infinite] h-10"></div>
               </div>
               <div className="absolute top-4 left-4 bg-black text-white text-xs px-2 py-1 font-bold border-2 border-[#E76F51]">Proximity Audio</div>
            </div>
            <h3 className="text-3xl font-bold text-[#A55627] mb-4 uppercase tracking-wider">Proximity Voice Chat</h3>
            <p className="text-gray-700 text-lg leading-relaxed font-medium">
              Immerse yourself in the world with <strong>Simple Voice Chat</strong>. Hear players getting louder as they approach, whisper secrets, and coordinate builds without leaving the game.
            </p>
            <ul className="mt-4 space-y-2 text-[#D67D3E] font-bold">
              <li>✓ Realistic 3D positional audio</li>
              <li>✓ Whisper, talk, or shout</li>
              <li>✓ No external apps required!</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
