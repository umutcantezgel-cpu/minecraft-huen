"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MinecraftFooter() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-element", {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
        }
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="mc-panel-dirt relative overflow-hidden py-12 px-6 mt-20 w-full z-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        
        {/* Brand / About */}
        <div className="col-span-1 md:col-span-1 footer-element">
          <h2 className="text-3xl font-bold mb-4 text-[#55FF55] text-shadow-mc tracking-wide font-pixel">
            Huen Server
          </h2>
          <p className="text-[#AAAAAA] leading-relaxed mb-4 text-sm text-shadow-mc">
            Ein gemütlicher privater Server für die Huen Gruppe. Kommt vorbei, wir freuen uns auf euch!
          </p>
          <div className="flex space-x-4">
            <a href="#" className="mc-btn px-4 py-2 text-white">
              🐦
            </a>
            <a href="#" className="mc-btn px-4 py-2 text-white">
              📺
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-element">
          <h3 className="text-xl font-bold mb-4 text-[#FFAA00] text-shadow-mc font-pixel">Navigation</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-[#55FF55] transition-colors flex items-center gap-2 text-shadow-mc"><span className="text-[#555555]">&gt;</span> Startseite</a></li>
            <li><a href="#" className="hover:text-[#55FF55] transition-colors flex items-center gap-2 text-shadow-mc"><span className="text-[#555555]">&gt;</span> Regeln</a></li>
            <li><a href="#" className="hover:text-[#55FF55] transition-colors flex items-center gap-2 text-shadow-mc"><span className="text-[#555555]">&gt;</span> Team</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-element">
          <h3 className="text-xl font-bold mb-4 text-[#FFAA00] text-shadow-mc font-pixel">Support</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-[#55FF55] transition-colors flex items-center gap-2 text-shadow-mc"><span className="text-[#555555]">&gt;</span> Hilfe & Fragen</a></li>
            <li><a href="#" className="hover:text-[#55FF55] transition-colors flex items-center gap-2 text-shadow-mc"><span className="text-[#555555]">&gt;</span> Kontakt</a></li>
          </ul>
        </div>

        {/* Discord CTA */}
        <div className="footer-element bg-[#5865F2] p-6 border-[3px] border-[#373737] shadow-[inset_0_4px_0_rgba(255,255,255,0.2),0_4px_0_rgba(0,0,0,0.5)] transform -rotate-1 hover:rotate-0 transition-transform">
          <h3 className="text-2xl font-bold mb-2 text-white text-shadow-mc font-pixel">Tritt unserem Discord bei</h3>
          <p className="text-indigo-100 mb-4 text-sm text-shadow-mc">Erhalte Echtzeit-Updates, chatte mit der Huen Gruppe und nimm an Events teil!</p>
          <a href="https://discord.com/channels/328246622834393088" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-[#FFFFFF] text-[#5865F2] font-bold py-3 px-4 border-b-4 border-gray-300 hover:bg-gray-100 hover:border-gray-400 active:border-b-0 active:translate-y-1 transition-all font-pixel text-shadow-mc">
            Jetzt verbinden
          </a>
        </div>
        
      </div>
      
      {/* Copyright Bar */}
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t-4 border-[#373737] text-center text-sm text-[#AAAAAA] flex flex-col md:flex-row justify-between items-center relative z-10 footer-element">
        <p className="text-shadow-mc font-pixel">Made with ❤️ for the Huen group.</p>
        <div className="flex space-x-4 mt-4 md:mt-0 font-bold">
          <span className="text-shadow-mc">Privater Community Server</span>
        </div>
      </div>
    </footer>
  );
}
