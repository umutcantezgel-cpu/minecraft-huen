import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ranks = [
  {
    name: "Neuling",
    price: "Kostenlos",
    bgClass: "bg-[#e5e5e5]",
    borderClass: "border-[#ffffff] border-b-[#8b8b8b] border-r-[#8b8b8b]",
    textClass: "text-[#333333]",
    perks: ["Benutzerdefiniertes Präfix", "/fly im Hub", "1 Home", "Weiße Chatfarbe"],
  },
  {
    name: "Stammspieler",
    price: "Nach 10h Spielzeit",
    bgClass: "bg-[#fcefa1]",
    borderClass: "border-[#fdf5c3] border-b-[#d6b738] border-r-[#d6b738]",
    textClass: "text-[#7a5800]",
    perks: ["Alles von Eisen", "Warteschlangen-Priorität", "3 Homes", "Gelbe Chatfarbe", "Zugriff auf /kit gold"],
  },
  {
    name: "Veteran",
    price: "Nach 100h Spielzeit",
    bgClass: "bg-[#6bebe4]",
    borderClass: "border-[#a5f4f0] border-b-[#32a49f] border-r-[#32a49f]",
    textClass: "text-[#0d5955]",
    perks: ["Alles von Gold", "/nick Befehl", "5 Homes", "Türkise Chatfarbe", "Zugriff auf /kit diamond", "Eigene Beitrittsnachricht"],
  },
  {
    name: "Huen Legende",
    price: "Gruppen-Mitglied",
    bgClass: "bg-[#41f384]",
    borderClass: "border-[#85f8b2] border-b-[#26ad55] border-r-[#26ad55]",
    textClass: "text-[#0a4720]",
    perks: ["Alles von Diamant", "Unbegrenzte Homes", "Grüne Chatfarbe", "Zugriff auf /kit emerald", "Privater Tresor", "Exklusive Kosmetika"],
  }
];

export default function RanksSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Deep scrub animation for title
      gsap.fromTo(titleRef.current, 
        {
          y: 150,
          scale: 0.5,
          opacity: 0,
          rotationX: 45,
        },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "top 25%",
            scrub: 1,
          },
          y: 0,
          scale: 1,
          opacity: 1,
          rotationX: 0,
          transformOrigin: "center bottom",
          ease: "none"
        }
      );

      // Deep scrub animation for cards coming in from different angles/positions
      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(card, 
          {
            y: 350,
            z: -500,
            rotationX: 45,
            rotationY: (i % 2 === 0 ? -15 : 15),
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "center center",
              scrub: 1,
            },
            y: 0,
            z: 0,
            rotationX: 0,
            rotationY: 0,
            opacity: 1,
            ease: "none"
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Minecraft dirt background pattern
  const dirtPattern = "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0iIzg2NjAyNCIgZD0iTTAgMGgxNnYxNkgweiIvPjxwYXRoIGZpbGw9IiM1YzRkMzYiIGQ9Ik0wIDBoNHY0SDB6bTEyIDBoNHY0aC00em0tOCAwaDR2NEg0em04IDRoNHY0aC00em0tOCAwaDR2NEg0eiIvPjxwYXRoIGZpbGw9IiM3NDUxMjAiIGQ9Ik0wIDRoNHY0SDB6bTEyIDRoNHY0aC00em0tNCA0aDR2NEg4em0tOCAwaDR2NEgweiIvPjwvc3ZnPg==')";

  return (
    <section 
      ref={sectionRef} 
      className="py-32 border-y-[16px] border-[#5c4d36] relative overflow-hidden font-mono" 
      style={{ backgroundImage: dirtPattern, backgroundSize: '64px 64px', imageRendering: 'pixelated' }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div ref={titleRef} className="text-center mb-24">
          <h2 
            className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#ffff55] to-[#ffaa00] mb-6 inline-block" 
            style={{ 
              WebkitTextStroke: '3px #3e2800', 
              filter: 'drop-shadow(4px 4px 0px #000)',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}
          >
            Server Rollen
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-[#dddddd] font-bold max-w-2xl mx-auto drop-shadow-[2px_2px_0px_#000] px-4">
            Wir sind komplett kostenlos. Spiele aktiv, hilf anderen und schalte coole Ränge frei!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto" style={{ perspective: '1200px' }}>
          {ranks.map((rank, index) => (
            <div 
              key={rank.name}
              ref={(el) => (cardsRef.current[index] = el)}
              className="will-change-transform"
            >
              <div className="p-1 transform transition-transform duration-300 hover:-translate-y-4 hover:scale-105 group h-full">
                {/* Outer stroke effect for Minecraft UI */}
                <div className="bg-[#000000] p-1 h-full shadow-[8px_8px_0px_rgba(0,0,0,0.5)]">
                  {/* Inner block styling */}
                  <div className={`h-full ${rank.bgClass} border-[6px] ${rank.borderClass} p-6 flex flex-col`}>
                    
                    <div className="text-center mb-6 pb-6 border-b-4 border-black/10">
                      <h3 
                        className={`text-2xl md:text-3xl lg:text-4xl font-black uppercase mb-3 ${rank.textClass} drop-shadow-[2px_2px_0px_rgba(255,255,255,0.4)] break-words`}
                        style={{ letterSpacing: '1px' }}
                      >
                        {rank.name}
                      </h3>
                      <div className={`text-xl md:text-2xl font-black ${rank.textClass} opacity-80 bg-black/10 inline-block px-4 py-1 border-2 border-black/20 break-words`}>
                        {rank.price}
                      </div>
                    </div>
                    
                    <ul className="space-y-4 mb-8 flex-grow">
                      {rank.perks.map((perk, i) => (
                        <li key={i} className={`flex items-start font-bold text-lg md:text-xl ${rank.textClass} leading-tight`}>
                          <span className="mr-3 text-black/40 mt-1 text-sm">▶</span>
                          <span className="drop-shadow-[1px_1px_0px_rgba(255,255,255,0.3)]">{perk}</span>
                        </li>
                      ))}
                    </ul>


                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
