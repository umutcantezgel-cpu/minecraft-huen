import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LoreSection = () => {
  const sectionRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        elementsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return (
    <div ref={sectionRef} className="lore-section py-16 px-4 min-h-screen flex flex-col items-center justify-center bg-black/80 font-minecraft">
      <h2 ref={addToRefs} className="text-4xl md:text-6xl text-white mb-12 uppercase tracking-widest text-shadow-mc">Die Lore</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        {/* Panel 1 */}
        <div ref={addToRefs} className="mc-panel-wood p-6 border-4 border-[#3c2a16] bg-[#5a3a1f] text-[#f2f2f2] relative shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#8f5a30]"></div>
          <div className="absolute top-0 left-0 w-1 h-full bg-[#8f5a30]"></div>
          <div className="absolute bottom-0 right-0 w-full h-1 bg-[#2b1b0d]"></div>
          <div className="absolute bottom-0 right-0 w-1 h-full bg-[#2b1b0d]"></div>
          
          <h3 className="text-2xl mb-4 text-[#ffff55]">Der Anfang</h3>
          <p className="text-sm leading-relaxed">
            In den alten Tagen, bevor die großen Server zerbrachen, gab es eine einzige zusammenhängende Welt. 
            Spieler bauten Monumente in den Himmel und gruben tief in die Erde. Die Gemeinschaft war vereint durch 
            ein gemeinsames Ziel: Überleben und Erschaffen.
          </p>
        </div>

        {/* Panel 2 */}
        <div ref={addToRefs} className="mc-panel-dirt p-6 border-4 border-[#4d3318] bg-[#68492d] text-[#f2f2f2] relative shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
          <div className="absolute top-0 left-0 w-full h-2 bg-[#5e8c3b]"></div>
          <div className="absolute top-0 left-0 w-1 h-full bg-[#845e3c]"></div>
          <div className="absolute bottom-0 right-0 w-full h-1 bg-[#3a2515]"></div>
          <div className="absolute bottom-0 right-0 w-1 h-full bg-[#3a2515]"></div>

          <h3 className="text-2xl mb-4 text-[#55ff55]">Die große Spaltung</h3>
          <p className="text-sm leading-relaxed">
            Dann kam die Ära der Zersplitterung. Fraktionen erhoben sich und das Land wurde geteilt. 
            Ressourcen wurden knapp und Allianzen wurden auf die Probe gestellt. Doch inmitten des Chaos 
            wurden Legenden geschmiedet.
          </p>
        </div>

        {/* Panel 3 */}
        <div ref={addToRefs} className="mc-panel-wood p-6 border-4 border-[#3c2a16] bg-[#5a3a1f] text-[#f2f2f2] relative shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] md:col-span-2">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#8f5a30]"></div>
          <div className="absolute top-0 left-0 w-1 h-full bg-[#8f5a30]"></div>
          <div className="absolute bottom-0 right-0 w-full h-1 bg-[#2b1b0d]"></div>
          <div className="absolute bottom-0 right-0 w-1 h-full bg-[#2b1b0d]"></div>

          <h3 className="text-2xl mb-4 text-[#ff5555]">Ein neuer Morgen</h3>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <p className="text-sm leading-relaxed flex-1">
              Jetzt vereinen sich die Server wieder. Eine neue Generation von Spielern tritt hervor 
              und bringt das Wissen der Ahnen und die Innovationen der Moderne mit sich. 
              Das Huen Event markiert den Beginn dieses neuen Kapitels. Wirst du dem Ruf folgen?
            </p>
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-[#333] border-4 border-[#555] flex items-center justify-center">
                <span className="text-3xl text-white">⚔️</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoreSection;
