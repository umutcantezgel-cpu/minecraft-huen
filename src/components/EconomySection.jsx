import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const EconomySection = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
    });

    tl.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power1.inOut' }
    );

    cardsRef.current.forEach((card, index) => {
      tl.fromTo(
        card,
        { y: 50, opacity: 0, rotationY: -15 },
        { y: 0, opacity: 1, rotationY: 0, duration: 1, ease: 'power1.inOut' },
        `-=${0.8}`
      );
    });
  }, { scope: sectionRef });

  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full py-24 min-h-screen flex items-center justify-center font-minecraft bg-black/40 overflow-hidden"
    >
      {/* Background styling for immersive feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-transparent pointer-events-none" />
      
      <div ref={containerRef} className="container mx-auto px-4 relative z-10 max-w-5xl">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl text-mc-gold drop-shadow-mc mb-6 tracking-wider">
            Player-Driven Economy
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto drop-shadow-md">
            Forge your own path to wealth. Our custom economy is built from the ground up to reward 
            dedication, creativity, and trading mastery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Card 1 */}
          <div 
            ref={addToCardsRef} 
            className="mc-panel-dirt p-8 text-center transform transition-transform duration-300 hover:scale-105"
          >
            <div className="text-4xl mb-6 drop-shadow-mc text-mc-emerald">💎</div>
            <h3 className="text-2xl text-white mb-4 drop-shadow-md">Dynamic Markets</h3>
            <p className="text-gray-200 leading-relaxed text-sm">
              Prices fluctuate based on supply and demand. Exploit shortages, monopolize resources, 
              and build your merchant empire.
            </p>
          </div>

          {/* Card 2 */}
          <div 
            ref={addToCardsRef} 
            className="mc-panel p-8 text-center transform transition-transform duration-300 hover:scale-105"
          >
            <div className="text-4xl mb-6 drop-shadow-mc text-mc-gold">⚔️</div>
            <h3 className="text-2xl text-white mb-4 drop-shadow-md">Bounty System</h3>
            <p className="text-gray-200 leading-relaxed text-sm">
              Place hits on rivals or claim bounties to earn cash. The wilderness is dangerous, 
              but it's where the real money is made.
            </p>
          </div>

          {/* Card 3 */}
          <div 
            ref={addToCardsRef} 
            className="mc-panel-dirt p-8 text-center transform transition-transform duration-300 hover:scale-105"
          >
            <div className="text-4xl mb-6 drop-shadow-mc text-mc-light">🏪</div>
            <h3 className="text-2xl text-white mb-4 drop-shadow-md">Player Shops</h3>
            <p className="text-gray-200 leading-relaxed text-sm">
              Rent stalls in the grand bazaar or set up hidden outposts. You control the inventory, 
              you control the prices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EconomySection;
