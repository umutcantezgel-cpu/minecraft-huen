import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const rules = [
  {
    id: 1,
    title: "No Griefing",
    description: "Respect other players' builds. Do not destroy or alter structures that aren't yours. Let's keep our world beautiful!",
    icon: "⛏️",
    color: "#ff5555" // Red
  },
  {
    id: 2,
    title: "No Hacking or Cheating",
    description: "Fair play is essential. X-ray, flying, or any unauthorized client mods are strictly prohibited.",
    icon: "⚔️",
    color: "#ffaa00" // Gold
  },
  {
    id: 3,
    title: "Be Respectful",
    description: "Treat everyone with kindness. No hate speech, harassment, or excessive swearing in the chat.",
    icon: "💬",
    color: "#55ff55" // Green
  },
  {
    id: 4,
    title: "Keep the Spawn Clean",
    description: "The spawn area is a safe zone. Please don't build or leave random items lying around near the spawn point.",
    icon: "🗺️",
    color: "#55ffff" // Aqua
  },
  {
    id: 5,
    title: "Have Fun!",
    description: "This is the most important rule. Enjoy your time, make friends, and create amazing things together.",
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
            rotationX: -45, 
            scale: 0.8 
          },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            scale: 1,
            duration: 1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play reverse play reverse",
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
      style={{
        padding: '100px 20px',
        backgroundColor: '#71A03A', // Minecraft grass top color
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 2px, transparent 2px), linear-gradient(90deg, rgba(0,0,0,0.1) 2px, transparent 2px)',
        backgroundSize: '40px 40px',
        minHeight: '100vh',
        fontFamily: '"Courier New", Courier, monospace', // Fallback pixel-ish font
        color: 'white',
        overflow: 'hidden'
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ 
          textAlign: 'center', 
          fontSize: '4rem', 
          marginBottom: '60px',
          textShadow: '4px 4px 0px #38501e',
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}>
          Server Rules
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {rules.map((rule, index) => (
            <div 
              key={rule.id}
              ref={el => rulesRef.current[index] = el}
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                border: `4px solid ${rule.color}`,
                borderRadius: '8px',
                padding: '30px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '20px',
                boxShadow: `inset 0 0 20px rgba(0,0,0,0.5), 8px 8px 0px rgba(0,0,0,0.3)`,
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              <div style={{
                fontSize: '4rem',
                textShadow: '2px 2px 0px rgba(0,0,0,0.5)',
                minWidth: '80px',
                textAlign: 'center'
              }}>
                {rule.icon}
              </div>
              <div>
                <h3 style={{ 
                  margin: '0 0 15px 0', 
                  fontSize: '2rem',
                  color: rule.color,
                  textShadow: '2px 2px 0px black'
                }}>
                  {rule.id}. {rule.title}
                </h3>
                <p style={{ 
                  margin: 0, 
                  fontSize: '1.2rem', 
                  lineHeight: '1.6',
                  color: '#e0e0e0',
                  textShadow: '1px 1px 0px black'
                }}>
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
