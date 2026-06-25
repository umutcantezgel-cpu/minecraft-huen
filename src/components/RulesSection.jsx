import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const rules = [
  {
    id: 1,
    title: "Kein Griefing",
    description: "Respektiere die Bauwerke anderer Spieler. Zerstöre oder verändere keine Strukturen, die nicht dir gehören. Lass uns unsere Welt schön halten!",
    icon: "⛏️",
    color: "#ff5555" // Red
  },
  {
    id: 2,
    title: "Kein Hacken oder Cheaten",
    description: "Fairplay ist unerlässlich. X-Ray, Fliegen oder andere unerlaubte Client-Mods sind strengstens verboten.",
    icon: "⚔️",
    color: "#ffaa00" // Gold
  },
  {
    id: 3,
    title: "Sei respektvoll",
    description: "Behandle jeden mit Freundlichkeit. Keine Hassrede, Belästigung oder übermäßiges Fluchen im Chat.",
    icon: "💬",
    color: "#55ff55" // Green
  },
  {
    id: 4,
    title: "Halte den Spawn sauber",
    description: "Der Spawn-Bereich ist eine sichere Zone. Bitte baue nicht in der Nähe des Spawns und lass keine zufälligen Items herumliegen.",
    icon: "🗺️",
    color: "#55ffff" // Aqua
  },
  {
    id: 5,
    title: "Hab Spaß!",
    description: "Das ist die wichtigste Regel. Genieße deine Zeit, finde Freunde und erschaffe gemeinsam großartige Dinge.",
    icon: "🎉",
    color: "#ffff55" // Yellow
  }
];

export default function RulesSection() {
  const containerRef = useRef(null);
  const rulesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      rulesRef.current.forEach((el, index) => {
        gsap.fromTo(el,
          { 
            opacity: 0, 
            y: 100, 
            rotationX: -15, 
            scale: 0.9 
          },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 95%",
              end: "center center",
              scrub: 1,
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="w-full relative py-32 z-10"
      style={{ overflow: 'hidden' }}
    >
      <div className="max-w-5xl mx-auto px-4 flex flex-col gap-16 relative z-10">
        
        <div className="text-center">
          <h2 className="mc-heading text-5xl md:text-7xl text-white drop-shadow-md mb-8" style={{ textShadow: '4px 4px 0px #38501e' }}>
            Server Regeln
          </h2>
          <p className="font-pixel text-xl text-gray-200 drop-shadow-sm max-w-2xl mx-auto leading-relaxed" style={{ textShadow: '2px 2px 0px black' }}>
            Bitte lies diese Regeln sorgfältig durch. Verstöße führen zu einem Bann. Lass uns eine freundliche und faire Umgebung für alle bewahren!
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-12">
          {rules.map((rule, index) => (
            <div 
              key={rule.id}
              ref={el => rulesRef.current[index] = el}
              className="mc-panel-wood p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8"
              style={{
                border: `4px solid ${rule.color}`,
                boxShadow: `inset 0 0 20px rgba(0,0,0,0.5), 8px 8px 0px rgba(0,0,0,0.3)`,
              }}
            >
              <div 
                className="text-6xl md:text-7xl flex-shrink-0 flex items-center justify-center p-4 bg-black/40 rounded-lg border-2 border-black/50"
                style={{ textShadow: '4px 4px 0px rgba(0,0,0,0.6)' }}
              >
                {rule.icon}
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 
                  className="font-pixel text-3xl md:text-4xl mb-4"
                  style={{ 
                    color: rule.color,
                    textShadow: '2px 2px 0px black'
                  }}
                >
                  {rule.id}. {rule.title}
                </h3>
                <p 
                  className="font-pixel text-lg md:text-xl leading-relaxed text-[#e0e0e0]"
                  style={{ textShadow: '1px 1px 0px black' }}
                >
                  {rule.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
