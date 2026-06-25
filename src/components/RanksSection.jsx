import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ranks = [
  {
    name: "Iron",
    price: "$4.99/mo",
    color: "bg-gray-300 text-gray-800",
    border: "border-gray-500",
    perks: ["Custom Prefix", "/fly in hub", "1 Home", "White Chat Color"],
  },
  {
    name: "Gold",
    price: "$9.99/mo",
    color: "bg-yellow-400 text-yellow-900",
    border: "border-yellow-600",
    perks: ["Everything in Iron", "Priority Queue", "3 Homes", "Yellow Chat Color", "Access to /kit gold"],
  },
  {
    name: "Diamond",
    price: "$19.99/mo",
    color: "bg-cyan-400 text-cyan-900",
    border: "border-cyan-600",
    perks: ["Everything in Gold", "/nick command", "5 Homes", "Cyan Chat Color", "Access to /kit diamond", "Custom Join Message"],
  },
  {
    name: "Emerald",
    price: "$39.99/mo",
    color: "bg-green-500 text-green-900",
    border: "border-green-700",
    perks: ["Everything in Diamond", "Unlimited Homes", "Green Chat Color", "Access to /kit emerald", "Private Vault", "Exclusive Cosmetics"],
  }
];

export default function RanksSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll animation for title
      gsap.from(".ranks-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      });

      // Scroll animation for cards
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });

      // Hover animations for cards
      cardsRef.current.forEach((card) => {
        if (!card) return;
        card.addEventListener("mouseenter", () => {
          gsap.to(card, { y: -10, scale: 1.05, duration: 0.3, ease: "power2.out" });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, { y: 0, scale: 1, duration: 0.3, ease: "power2.out" });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-sky-100 border-y-8 border-sky-300" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%239C92AC\\' fill-opacity=\\'0.1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 ranks-title">
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-600 mb-4 inline-block drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]" style={{ WebkitTextStroke: '2px #422800' }}>
            SERVER RANKS
          </h2>
          <p className="text-xl md:text-2xl text-slate-800 font-bold max-w-2xl mx-auto drop-shadow-sm">
            Support the server and get amazing perks in return! Choose the rank that fits your playstyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ranks.map((rank, index) => (
            <div 
              key={rank.name}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`rounded-none p-6 border-b-[12px] border-r-[12px] border-t-[4px] border-l-[4px] ${rank.color} ${rank.border} shadow-2xl relative overflow-hidden`}
              style={{
                boxShadow: "inset 0 0 0 4px rgba(255,255,255,0.3)"
              }}
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-white/20 transform rotate-45 translate-x-8 -translate-y-8"></div>
              
              <h3 className="text-3xl md:text-4xl font-black mb-2 uppercase tracking-widest drop-shadow-md" style={{ WebkitTextStroke: '1px rgba(0,0,0,0.2)' }}>{rank.name}</h3>
              <div className="text-2xl md:text-3xl font-black mb-6 opacity-90 drop-shadow-sm">{rank.price}</div>
              
              <ul className="space-y-4 mb-8">
                {rank.perks.map((perk, i) => (
                  <li key={i} className="flex items-start font-bold text-lg md:text-xl drop-shadow-sm leading-tight">
                    <span className="mr-3 text-current opacity-80 mt-1">✦</span>
                    {perk}
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 px-4 bg-black/20 hover:bg-black/30 text-white font-black text-2xl uppercase tracking-widest border-b-4 border-r-4 border-t-2 border-l-2 border-black/50 transition-colors shadow-lg active:translate-y-1 active:border-b-2 active:border-r-2" style={{ textShadow: "2px 2px 0 #000" }}>
                Select
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
