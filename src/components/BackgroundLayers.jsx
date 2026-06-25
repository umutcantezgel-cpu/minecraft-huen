import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function BackgroundLayers() {
  const starsRef = useRef(null);
  
  useGSAP(() => {
    // Make clouds drift
    gsap.to('.cloud-layer', {
      xPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      }
    });

    // Fade in stars as we scroll down
    gsap.to(starsRef.current, {
      opacity: 1,
      ease: 'power1.in',
      scrollTrigger: {
        trigger: 'body',
        start: '50% top',
        end: '80% bottom',
        scrub: 1,
      }
    });
  }, []);

  return (
    <>
      {/* Stars (Hidden initially) */}
      <div ref={starsRef} className="absolute inset-0 opacity-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      
      {/* Drifting Clouds */}
      <div className="cloud-layer absolute top-20 w-[200vw] h-full flex gap-40">
        <div className="bg-white/80 h-16 w-32 mt-12"></div>
        <div className="bg-white/80 h-24 w-48 mt-40"></div>
        <div className="bg-white/80 h-12 w-24 mt-8"></div>
        <div className="bg-white/80 h-20 w-40 mt-64"></div>
        <div className="bg-white/80 h-16 w-32 mt-12"></div>
        <div className="bg-white/80 h-24 w-48 mt-40"></div>
        <div className="bg-white/80 h-12 w-24 mt-8"></div>
      </div>
    </>
  );
}
