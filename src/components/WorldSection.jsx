import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WorldSection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;

    let totalWidth = container.scrollWidth - window.innerWidth;

    gsap.to(container, {
      x: () => -totalWidth,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        end: () => "+=" + totalWidth,
        invalidateOnRefresh: true,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="world-section relative h-screen w-full overflow-hidden bg-[#87CEEB] font-sans"
      style={{
        imageRendering: 'pixelated'
      }}
    >
      {/* Sun */}
      <div className="absolute top-10 right-20 w-32 h-32 bg-yellow-300 border-4 border-black" />

      {/* Clouds */}
      <div className="absolute top-20 left-40 flex space-x-2">
        <div className="w-24 h-12 bg-white border-2 border-black" />
        <div className="w-32 h-16 bg-white border-2 border-black -ml-4 -mt-2" />
        <div className="w-20 h-10 bg-white border-2 border-black -ml-2 mt-4" />
      </div>

      <div 
        ref={containerRef}
        className="flex h-full w-[400vw]"
      >
        {/* Slide 1 */}
        <div className="w-screen h-full flex flex-col justify-end items-center relative">
          <div className="absolute inset-0 flex flex-col items-center justify-center mb-40">
            <h2 className="text-6xl text-white font-bold tracking-widest uppercase drop-shadow-[4px_4px_0_rgba(0,0,0,1)] text-center">
              Explore The Overworld
            </h2>
            <p className="mt-4 text-2xl text-white drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">
              Vast landscapes await.
            </p>
          </div>
          <div className="w-full h-1/3 bg-[#5C8930] border-t-8 border-[#3A561E] flex flex-col">
            <div className="w-full flex-grow bg-[#8B5A2B]" />
          </div>
        </div>

        {/* Slide 2 */}
        <div className="w-screen h-full flex flex-col justify-end items-center relative">
          <div className="absolute inset-0 flex flex-col items-center justify-center mb-40">
            <h2 className="text-6xl text-white font-bold tracking-widest uppercase drop-shadow-[4px_4px_0_rgba(0,0,0,1)] text-center">
              Build Your Dream Base
            </h2>
            <div className="mt-8 flex gap-4">
              <div className="w-16 h-16 bg-[#A0A0A0] border-4 border-black" />
              <div className="w-16 h-16 bg-[#8B5A2B] border-4 border-black" />
              <div className="w-16 h-16 bg-[#C4A484] border-4 border-black" />
            </div>
          </div>
          <div className="w-full h-1/3 bg-[#5C8930] border-t-8 border-[#3A561E] flex flex-col">
            <div className="w-full flex-grow bg-[#8B5A2B]" />
          </div>
        </div>

        {/* Slide 3 */}
        <div className="w-screen h-full flex flex-col justify-end items-center relative bg-[#3C3C3C] border-l-8 border-black">
          <div className="absolute top-10 left-20 flex space-x-2">
            <div className="w-20 h-10 bg-gray-600 border-2 border-black" />
            <div className="w-24 h-12 bg-gray-600 border-2 border-black -ml-4 -mt-2" />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center mb-40">
            <h2 className="text-6xl text-red-500 font-bold tracking-widest uppercase drop-shadow-[4px_4px_0_rgba(0,0,0,1)] text-center">
              Venture Into The Nether
            </h2>
            <p className="mt-4 text-2xl text-white drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">
              Where danger lurks.
            </p>
          </div>
          <div className="w-full h-1/3 bg-[#600000] border-t-8 border-[#400000] flex flex-col">
            <div className="w-full flex-grow bg-[#300000]" />
          </div>
        </div>

        {/* Slide 4 */}
        <div className="w-screen h-full flex flex-col justify-end items-center relative bg-[#110022] border-l-8 border-black">
          <div className="absolute inset-0 flex flex-col items-center justify-center mb-40">
            <h2 className="text-6xl text-[#EEDDFF] font-bold tracking-widest uppercase drop-shadow-[4px_4px_0_rgba(255,255,255,0.5)] text-center">
              Defeat The End
            </h2>
            <p className="mt-4 text-2xl text-[#EEDDFF] drop-shadow-[2px_2px_0_rgba(255,255,255,0.5)]">
              The final frontier.
            </p>
          </div>
          <div className="w-full h-1/3 bg-[#F0F0A0] border-t-8 border-[#A0A050] flex flex-col">
            <div className="w-full flex-grow bg-[#E0E080]" />
          </div>
        </div>
      </div>
    </section>
  );
}
