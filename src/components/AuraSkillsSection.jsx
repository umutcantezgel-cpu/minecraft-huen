import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const skills = [
  { name: 'Mining', color: '#555555', icon: '⛏️', title: 'Deep Earth Mastery', desc: 'Shatter bedrock and unearth ancient debris to forge legendary gear.' },
  { name: 'Farming', color: '#7a9e35', icon: '🌾', title: 'Bountiful Harvest', desc: 'Cultivate golden crops and brew powerful elixirs to sustain your journey.' },
  { name: 'Combat', color: '#8b0000', icon: '⚔️', title: 'Mob Slayer', desc: 'Vanquish the Ender Dragon and claim its bounty. True warriors never yield.' },
  { name: 'Foraging', color: '#2d4c1e', icon: '🪓', title: 'Lumberjack', desc: 'Fell the thickest jungle trees with a single swing. Nature is your domain.' }
];

export default function AuraSkillsSection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray('.skill-panel');
      
      // Pinning and horizontal scroll
      let scrollTween = gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + containerRef.current.offsetWidth * 1.5
        }
      });

      // Parallax and fade ins for each panel
      panels.forEach((panel) => {
        const content = panel.querySelector('.skill-content');
        const iconBg = panel.querySelector('.skill-icon-bg');
        
        gsap.from(content, {
          y: 80,
          opacity: 0,
          scale: 0.9,
          duration: 1,
          scrollTrigger: {
            trigger: panel,
            containerAnimation: scrollTween,
            start: "left center",
            toggleActions: "play none none reverse"
          }
        });

        gsap.to(iconBg, {
          rotate: 360,
          scale: 1.2,
          scrollTrigger: {
            trigger: panel,
            containerAnimation: scrollTween,
            start: "left right",
            end: "right left",
            scrub: 0.5
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#000' }}>
      <div 
        ref={containerRef}
        style={{
          display: 'flex',
          width: `${skills.length * 100}vw`,
          height: '100vh',
          fontFamily: '"Minecraft", "Courier New", Courier, monospace'
        }}
      >
        {skills.map((skill, index) => (
          <div 
            key={skill.name}
            className="skill-panel"
            style={{
              width: '100vw',
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: skill.color,
              position: 'relative',
              boxShadow: 'inset 0 0 150px rgba(0,0,0,0.9)',
              borderRight: index < skills.length - 1 ? '10px solid #222' : 'none'
            }}
          >
            {/* Background giant icon */}
            <div 
              className="skill-icon-bg"
              style={{
                position: 'absolute',
                fontSize: '45vw',
                opacity: 0.08,
                pointerEvents: 'none',
                zIndex: 0
              }}
            >
              {skill.icon}
            </div>

            {/* Main content box in Minecraft UI style */}
            <div 
              className="skill-content"
              style={{
                backgroundColor: '#c6c6c6', // Classic Minecraft inventory gray
                border: '6px solid',
                borderColor: '#ffffff #555555 #555555 #ffffff',
                padding: '40px',
                position: 'relative',
                zIndex: 1,
                width: '85%',
                maxWidth: '650px',
                boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
                color: '#333'
              }}
            >
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <span style={{ fontSize: '90px', filter: 'drop-shadow(6px 6px 0 rgba(0,0,0,0.4))' }}>
                  {skill.icon}
                </span>
              </div>
              
              <h2 style={{
                fontSize: '52px',
                textAlign: 'center',
                margin: '0 0 15px 0',
                color: '#ffff55', // Minecraft Yellow
                textShadow: '4px 4px 0 #3e3e15',
                textTransform: 'uppercase',
                letterSpacing: '3px'
              }}>
                {skill.name}
              </h2>
              
              <h3 style={{
                fontSize: '26px',
                textAlign: 'center',
                margin: '0 0 25px 0',
                color: '#ffffff',
                textShadow: '3px 3px 0 #3f3f3f',
                letterSpacing: '1px'
              }}>
                {skill.title}
              </h3>

              <p style={{
                fontSize: '20px',
                lineHeight: '1.6',
                textAlign: 'center',
                backgroundColor: '#000000',
                color: '#aaaaaa', // Minecraft lore text
                padding: '25px',
                border: '4px solid',
                borderColor: '#373737 #8f8f8f #8f8f8f #373737',
                margin: '0 0 40px 0'
              }}>
                {skill.desc}
              </p>

              {/* Progress Bar */}
              <div style={{ width: '100%', position: 'relative' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '10px',
                  color: '#000',
                  fontWeight: 'bold',
                  fontSize: '20px',
                  textShadow: '1px 1px 0 rgba(255,255,255,0.3)'
                }}>
                  <span>Level {index * 15 + 10}</span>
                  <span>{1500 * (index + 1)} / {3000 * (index + 1)} XP</span>
                </div>
                <div style={{
                  height: '30px',
                  backgroundColor: '#000',
                  border: '3px solid #555',
                  padding: '3px'
                }}>
                  <div style={{
                    height: '100%',
                    width: '65%',
                    backgroundColor: '#55ff55', // Minecraft experience green
                    borderRight: '3px solid #00aa00',
                    borderBottom: '3px solid #00aa00',
                    boxShadow: 'inset 0 0 10px rgba(0,255,0,0.5)'
                  }} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
