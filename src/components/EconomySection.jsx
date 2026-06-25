import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function EconomySection() {
  const containerRef = useRef(null);
  const panelsRef = useRef([]);

  useEffect(() => {
    const panels = panelsRef.current;

    let ctx = gsap.context(() => {
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + containerRef.current.offsetWidth
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = el => {
    if (el && !panelsRef.current.includes(el)) {
      panelsRef.current.push(el);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#5C8A2E] text-white font-minecraft border-t-8 border-b-8 border-[#1D4A12]">
      <div 
        ref={containerRef} 
        className="flex w-[300vw] h-screen"
        style={{ width: '300vw' }}
      >
        {/* Panel 1: Player Shops */}
        <div ref={addToRefs} className="w-screen h-full flex flex-col justify-center items-center p-8 bg-[#8B8B8B] border-r-8 border-[#3D3D3D] relative shadow-inner">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/minecraft-dirt.png')] mix-blend-multiply pointer-events-none"></div>
          <h2 className="text-6xl md:text-8xl mb-8 text-yellow-400 drop-shadow-[4px_4px_0_#000] tracking-widest text-center">PLAYER SHOPS</h2>
          
          <div className="bg-[#C6C6C6] border-4 border-white border-b-[#555] border-r-[#555] p-6 max-w-4xl w-full shadow-[8px_8px_0_rgba(0,0,0,0.5)] z-10 relative">
            <p className="text-2xl text-black mb-6 text-center leading-relaxed">
              Create your own storefront, set your prices, and build your retail empire!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Diamond Sword", price: "500 Coins", img: "🗡️" },
                { name: "Enchanted Apple", price: "1000 Coins", img: "🍎" },
                { name: "Elytra", price: "5000 Coins", img: "🦋" },
              ].map((item, i) => (
                <div key={i} className="bg-[#8B8B8B] p-4 border-4 border-white border-b-[#555] border-r-[#555] flex flex-col items-center hover:-translate-y-2 transition-transform duration-300">
                  <span className="text-6xl mb-4">{item.img}</span>
                  <h3 className="text-xl text-white drop-shadow-[2px_2px_0_#000] mb-2 text-center">{item.name}</h3>
                  <p className="text-yellow-300 drop-shadow-[1px_1px_0_#000] font-bold">{item.price}</p>
                  <button className="mt-4 bg-[#3B8526] hover:bg-[#4C9A2A] text-white px-4 py-2 border-2 border-white border-b-[#1D4A12] border-r-[#1D4A12] w-full text-lg shadow-[2px_2px_0_#000] active:translate-y-1 active:shadow-none transition-all">
                    BUY
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Panel 2: Global Trading */}
        <div ref={addToRefs} className="w-screen h-full flex flex-col justify-center items-center p-8 bg-[#3B8526] border-r-8 border-[#1D4A12] relative shadow-inner">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/minecraft-dirt.png')] mix-blend-multiply pointer-events-none"></div>
          <h2 className="text-6xl md:text-8xl mb-8 text-white drop-shadow-[4px_4px_0_#000] tracking-widest text-center">GLOBAL TRADING</h2>
          
          <div className="bg-[#C6C6C6] border-4 border-white border-b-[#555] border-r-[#555] p-6 max-w-4xl w-full shadow-[8px_8px_0_rgba(0,0,0,0.5)] z-10 relative">
             <div className="flex flex-col md:flex-row items-center justify-between gap-8">
               <div className="flex-1 bg-black/80 p-6 border-4 border-[#555] w-full">
                 <h3 className="text-green-400 text-2xl mb-4">Stock Market</h3>
                 <ul className="space-y-3 text-lg">
                   <li className="flex justify-between text-white"><span>Diamonds</span> <span className="text-green-400">▲ +12%</span></li>
                   <li className="flex justify-between text-white"><span>Iron Ingots</span> <span className="text-red-400">▼ -5%</span></li>
                   <li className="flex justify-between text-white"><span>Gold Blocks</span> <span className="text-green-400">▲ +3%</span></li>
                   <li className="flex justify-between text-white"><span>Netherite</span> <span className="text-green-400">▲ +25%</span></li>
                 </ul>
               </div>
               <div className="flex-1 text-black text-center w-full">
                 <p className="text-2xl mb-4 leading-relaxed">
                   Invest in commodities, track market trends, and become the server's wealthiest magnate.
                 </p>
                 <div className="inline-block bg-[#8B8B8B] p-4 border-4 border-white border-b-[#555] border-r-[#555]">
                    <div className="text-4xl text-yellow-300 drop-shadow-[2px_2px_0_#000]">💰 SERVER BANK 💰</div>
                 </div>
               </div>
             </div>
          </div>
        </div>

        {/* Panel 3: Auction House */}
        <div ref={addToRefs} className="w-screen h-full flex flex-col justify-center items-center p-8 bg-[#5C1A1A] relative shadow-inner">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/minecraft-dirt.png')] mix-blend-multiply pointer-events-none"></div>
          <h2 className="text-6xl md:text-8xl mb-8 text-[#FF5555] drop-shadow-[4px_4px_0_#000] tracking-widest text-center animate-pulse">AUCTION HOUSE</h2>
          
          <div className="bg-[#C6C6C6] border-4 border-white border-b-[#555] border-r-[#555] p-6 max-w-4xl w-full shadow-[12px_12px_0_rgba(0,0,0,0.6)] transform md:rotate-1 z-10 relative">
            <p className="text-2xl text-black mb-6 text-center leading-relaxed">
              Bid on rare artifacts, legendary gear, and exclusive server cosmetics!
            </p>
            
            <div className="bg-black/90 border-4 border-[#333] p-6 text-white">
              <div className="flex justify-between items-end border-b-2 border-[#555] pb-4 mb-4">
                <div>
                  <h3 className="text-3xl text-purple-400 drop-shadow-[2px_2px_0_#000]">Dragon Egg</h3>
                  <p className="text-gray-400">Seller: <span className="text-yellow-300">Notch</span></p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">Current Bid</p>
                  <p className="text-4xl text-green-400">1,000,000 🪙</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-[#8B8B8B] hover:bg-[#A0A0A0] text-black font-bold px-4 py-3 border-4 border-white border-b-[#555] border-r-[#555] text-xl active:translate-y-1 transition-transform">
                  BID +10k
                </button>
                <button className="flex-1 bg-[#3B8526] hover:bg-[#4C9A2A] text-white font-bold px-4 py-3 border-4 border-white border-b-[#1D4A12] border-r-[#1D4A12] text-xl active:translate-y-1 transition-transform">
                  BUYOUT
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
