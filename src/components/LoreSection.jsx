import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function LoreSection() {
  const containerRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      textRefs.current.forEach((el) => {
        gsap.fromTo(el, 
          { opacity: 0, y: 100 },
          {
            opacity: 1, 
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              end: "center 50%",
              scrub: 1,
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const loreParagraphs = [
    "In the beginning, there was only the Void. An endless expanse of nothingness, until the Great Builders descended from the starry realms. They carried with them the First Blocks—diamonds that pulsed with raw, untamed energy.",
    "With these blocks, they laid the foundation of our world. The Overworld was forged from their dreams, a vibrant tapestry of emerald forests, azure oceans, and towering golden peaks that touched the sky.",
    "But creation is never without cost. The chaotic energies of the First Blocks seeped deep into the bedrock, giving birth to the Nether, a realm of fire and shadows where the builders' nightmares took physical form.",
    "For millennia, the Overworld knew peace. Ancient civilizations rose, constructing magnificent temples of quartz and towering citadels of prismarine. They lived in harmony with the creatures of the land.",
    "Then came the End. A fracture in reality itself, spewing forth the great Dragon and its endless legion of void-walkers. The sky turned dark, and the Great Builders were forced to seal the rift, trapping themselves on the other side.",
    "Without their creators, the civilizations of the Overworld slowly crumbled into ruin. Their grand cities were reclaimed by nature, buried beneath the sand, and swallowed by the sea.",
    "But the magic of the First Blocks remained. It pulsed in the deep caverns, waiting for a new generation of heroes to discover it, to wield its power, and to rebuild what was lost.",
    "Now, the age of the players has begun. You are the inheritors of this fractured world. Will you restore the glory of the ancients, or will you forge a new destiny from the shattered remnants of the past?",
    "Every block you place, every tool you craft, echoes with the legacy of the Great Builders. The world is a blank canvas once more, and you are the artist.",
    "Gather your friends, sharpen your swords, and prepare for the ultimate adventure. The lore of this server is not just a story of the past; it is the foundation of the future you will create."
  ];

  return (
    <section 
      ref={containerRef} 
      style={{
        backgroundColor: '#55FF55', // Bright Minecraft Green
        color: '#FFFFFF',
        fontFamily: "'Courier New', Courier, monospace",
        padding: '5rem 2rem',
        minHeight: '200vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40vh',
        backgroundImage: 'linear-gradient(135deg, #55FF55 0%, #00AA00 100%)',
        borderTop: '8px solid #000',
        borderBottom: '8px solid #000',
      }}
    >
      <h2 style={{
        fontSize: '4rem',
        textShadow: '4px 4px 0 #000',
        textAlign: 'center',
        marginTop: '10vh',
        marginBottom: '10vh'
      }}>
        The Ancient Chronicles
      </h2>
      
      {loreParagraphs.map((text, i) => (
        <div 
          key={i} 
          ref={el => textRefs.current[i] = el}
          style={{
            maxWidth: '800px',
            fontSize: '2rem',
            lineHeight: '1.6',
            padding: '2rem',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            border: '4px solid #FFF',
            borderRadius: '0px',
            boxShadow: '12px 12px 0 #000',
            textShadow: '2px 2px 0 #000',
            textAlign: 'center'
          }}
        >
          {text}
        </div>
      ))}
      <div style={{ height: '20vh' }}></div>
    </section>
  );
}
