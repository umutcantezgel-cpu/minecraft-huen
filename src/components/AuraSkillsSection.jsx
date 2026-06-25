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
        
        // Deep scrub interactivity for the main content
        gsap.fromTo(content, 
          { y: 120, opacity: 0, scale: 0.85, rotation: -2 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotation: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: panel,
              containerAnimation: scrollTween,
              start: "left 85%",
              end: "center center",
              scrub: 1
            }
          }
        );

        // Continuous parallax and rotation for the background icon
        gsap.fromTo(iconBg, 
          { x: -150, rotate: -30, scale: 0.7, opacity: 0 },
          {
            x: 150,
            rotate: 30,
            scale: 1.2,
            opacity: 0.1,
            scrollTrigger: {
              trigger: panel,
              containerAnimation: scrollTween,
              start: "left right",
              end: "right left",
              scrub: 1
            }
          }
        );
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
              boxShadow: 'inset 0 0 200px rgba(0,0,0,0.9)',
              borderRight: index < skills.length - 1 ? '8px solid #111' : 'none'
            }}
          >
            {/* Background giant icon */}
            <div 
              className="skill-icon-bg"
              style={{
                position: 'absolute',
                fontSize: '40vw',
                pointerEvents: 'none',
                zIndex: 0,
                filter: 'drop-shadow(20px 20px 0 rgba(0,0,0,0.5))'
              }}
            >
              {skill.icon}
            </div>

            {/* Main content box in Minecraft UI style */}
            <div 
              className="skill-content mc-panel"
              style={{
                padding: '40px 50px',
                position: 'relative',
                zIndex: 1,
                width: '90%',
                maxWidth: '680px',
                boxShadow: '0 30px 80px rgba(0,0,0,0.8)',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}
            >
              {/* Header section */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '30px', marginBottom: '10px' }}>
                <div className="mc-panel-wood" style={{ padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '64px', filter: 'drop-shadow(4px 4px 0 rgba(0,0,0,0.5))' }}>
                    {skill.icon}
                  </span>
                </div>
                <div>
                  <h2 style={{
                    fontSize: '48px',
                    margin: '0 0 10px 0',
                    color: '#ffff55', // Minecraft Yellow
                    textShadow: '4px 4px 0 #3e3e15',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    lineHeight: '1.1'
                  }}>
                    {skill.name}
                  </h2>
                  <h3 style={{
                    fontSize: '24px',
                    margin: '0',
                    color: '#ffffff',
                    textShadow: '3px 3px 0 #3f3f3f',
                    letterSpacing: '1px'
                  }}>
                    {skill.title}
                  </h3>
                </div>
              </div>

              {/* Description section */}
              <div className="mc-panel-wood" style={{ padding: '25px' }}>
                <p style={{
                  fontSize: '20px',
                  lineHeight: '1.6',
                  color: '#aaaaaa', // Minecraft lore text
                  margin: '0',
                  textShadow: '2px 2px 0 #000'
                }}>
                  {skill.desc}
                </p>
              </div>

              {/* Progress Bar */}
              <div style={{ marginTop: '10px' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '12px',
                  color: '#ffffff',
                  fontWeight: 'bold',
                  fontSize: '22px',
                  textShadow: '3px 3px 0 #000'
                }}>
                  <span>Level {index * 15 + 10}</span>
                  <span style={{ color: '#55ff55' }}>{1500 * (index + 1)} / {3000 * (index + 1)} XP</span>
                </div>
                
                {/* Custom XP Bar */}
                <div style={{
                  height: '34px',
                  backgroundColor: '#000',
                  border: '3px solid #333',
                  padding: '3px',
                  boxShadow: 'inset 0 0 10px #000'
                }}>
                  <div style={{
                    height: '100%',
                    width: '65%',
                    backgroundColor: '#55ff55', // Minecraft experience green
                    borderTop: '2px solid #aaffaa',
                    borderRight: '2px solid #00aa00',
                    borderBottom: '2px solid #00aa00',
                    borderLeft: '2px solid #aaffaa',
                    boxShadow: '0 0 15px rgba(85,255,85,0.4)'
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
