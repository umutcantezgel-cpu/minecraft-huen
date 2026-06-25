import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ConnectionGuide() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const steps = gsap.utils.toArray('.guide-step');
      
      steps.forEach((step, i) => {
        gsap.fromTo(step, 
          { opacity: 0, y: 50, scale: 0.95 },
          { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
      
      gsap.fromTo('.server-info-card',
        { opacity: 0, rotateX: 15, y: 30 },
        {
          opacity: 1,
          rotateX: 0,
          y: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: '.server-info-card',
            start: "top 80%"
          }
        }
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="py-24 bg-[#0a0a0a] text-white min-h-screen relative overflow-hidden" id="connection-guide">
      {/* Background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none" 
           style={{ background: 'radial-gradient(ellipse at top, #22c55e 0%, transparent 70%)' }}></div>
           
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-white">
            How to Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Adventure</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-light">
            Follow this comprehensive guide to connect to our server on any platform. We support both Java and Bedrock editions.
          </p>
        </div>

        {/* Server Info Card */}
        <div className="server-info-card bg-neutral-900/60 backdrop-blur-xl rounded-3xl p-8 mb-24 border border-neutral-800 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-duration-700"></div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-neutral-800">
            <div className="p-4 md:p-6">
              <h3 className="text-neutral-500 font-semibold mb-3 text-sm uppercase tracking-widest">Server IP</h3>
              <p className="text-2xl md:text-3xl font-bold text-green-400 font-mono select-all">Umutcan_Emre.exaroton.me</p>
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-neutral-500 font-semibold mb-3 text-sm uppercase tracking-widest">Port</h3>
              <p className="text-2xl md:text-3xl font-bold text-white font-mono select-all">28198</p>
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-neutral-500 font-semibold mb-3 text-sm uppercase tracking-widest">Version</h3>
              <p className="text-2xl md:text-3xl font-bold text-white font-mono">1.21.4</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* PC / Java Edition Guide */}
          <div className="space-y-10">
            <div className="flex items-center gap-5 mb-10 pb-6 border-b border-neutral-800">
              <div className="w-14 h-14 bg-neutral-900 rounded-2xl flex items-center justify-center text-3xl shadow-inner border border-neutral-800">💻</div>
              <h3 className="text-3xl font-bold tracking-tight">Java Edition <span className="text-neutral-500 font-light text-2xl">(PC)</span></h3>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-7 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-green-500/50 before:via-neutral-800 before:to-transparent hidden-before-mobile">
              
              <div className="guide-step relative flex items-start gap-8">
                <div className="w-14 h-14 rounded-full bg-[#0a0a0a] border-2 border-green-500 flex items-center justify-center font-bold text-green-400 shrink-0 z-10 shadow-[0_0_20px_rgba(34,197,94,0.2)] text-xl">1</div>
                <div className="bg-neutral-900/50 p-8 rounded-3xl border border-neutral-800 flex-1 hover:bg-neutral-900 transition-colors">
                  <h4 className="text-2xl font-bold mb-3">Launch Minecraft</h4>
                  <p className="text-neutral-400 leading-relaxed">Open your Minecraft Launcher and ensure you are using version <strong className="text-white bg-neutral-800 px-2 py-0.5 rounded">1.21.4</strong>. Click Play.</p>
                </div>
              </div>

              <div className="guide-step relative flex items-start gap-8">
                <div className="w-14 h-14 rounded-full bg-[#0a0a0a] border-2 border-green-500 flex items-center justify-center font-bold text-green-400 shrink-0 z-10 shadow-[0_0_20px_rgba(34,197,94,0.2)] text-xl">2</div>
                <div className="bg-neutral-900/50 p-8 rounded-3xl border border-neutral-800 flex-1 hover:bg-neutral-900 transition-colors">
                  <h4 className="text-2xl font-bold mb-3">Multiplayer</h4>
                  <p className="text-neutral-400 leading-relaxed">From the main menu, click on the <strong className="text-white">Multiplayer</strong> button. Read and accept the warning if it appears.</p>
                </div>
              </div>

              <div className="guide-step relative flex items-start gap-8">
                <div className="w-14 h-14 rounded-full bg-[#0a0a0a] border-2 border-green-500 flex items-center justify-center font-bold text-green-400 shrink-0 z-10 shadow-[0_0_20px_rgba(34,197,94,0.2)] text-xl">3</div>
                <div className="bg-neutral-900/50 p-8 rounded-3xl border border-neutral-800 flex-1 hover:bg-neutral-900 transition-colors">
                  <h4 className="text-2xl font-bold mb-3">Add Server</h4>
                  <p className="text-neutral-400 leading-relaxed">Click the <strong className="text-white">Add Server</strong> button located at the bottom right corner of the screen.</p>
                </div>
              </div>

              <div className="guide-step relative flex items-start gap-8">
                <div className="w-14 h-14 rounded-full bg-[#0a0a0a] border-2 border-green-500 flex items-center justify-center font-bold text-green-400 shrink-0 z-10 shadow-[0_0_20px_rgba(34,197,94,0.2)] text-xl">4</div>
                <div className="bg-neutral-900/50 p-8 rounded-3xl border border-neutral-800 flex-1 hover:bg-neutral-900 transition-colors">
                  <h4 className="text-2xl font-bold mb-5">Enter Details</h4>
                  <div className="space-y-4">
                    <div className="bg-[#050505] p-4 rounded-xl border border-neutral-800">
                      <span className="text-xs text-neutral-500 font-semibold uppercase tracking-wider block mb-2">Server Name</span>
                      <code className="text-white text-lg">Minecraft Server</code>
                    </div>
                    <div className="bg-[#050505] p-4 rounded-xl border border-neutral-800">
                      <span className="text-xs text-neutral-500 font-semibold uppercase tracking-wider block mb-2">Server Address</span>
                      <code className="text-green-400 text-lg select-all">Umutcan_Emre.exaroton.me:28198</code>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="guide-step relative flex items-start gap-8">
                <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center font-bold text-[#0a0a0a] shrink-0 z-10 shadow-[0_0_30px_rgba(34,197,94,0.4)] text-2xl">✓</div>
                <div className="bg-gradient-to-br from-green-900/20 to-neutral-900/50 p-8 rounded-3xl border border-green-500/20 flex-1">
                  <h4 className="text-2xl font-bold mb-3 text-green-400">Connect!</h4>
                  <p className="text-neutral-300 leading-relaxed">Click "Done", select our server from your list, and hit <strong className="text-white">Join Server</strong>.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Bedrock / Console Edition Guide */}
          <div className="space-y-10">
            <div className="flex items-center gap-5 mb-10 pb-6 border-b border-neutral-800">
              <div className="w-14 h-14 bg-neutral-900 rounded-2xl flex items-center justify-center text-3xl shadow-inner border border-neutral-800">🎮</div>
              <h3 className="text-3xl font-bold tracking-tight">Bedrock Edition <span className="text-neutral-500 font-light text-2xl">(Console/PE)</span></h3>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-7 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-emerald-500/50 before:via-neutral-800 before:to-transparent hidden-before-mobile">
              
              <div className="guide-step relative flex items-start gap-8">
                <div className="w-14 h-14 rounded-full bg-[#0a0a0a] border-2 border-emerald-500 flex items-center justify-center font-bold text-emerald-400 shrink-0 z-10 shadow-[0_0_20px_rgba(16,185,129,0.2)] text-xl">1</div>
                <div className="bg-neutral-900/50 p-8 rounded-3xl border border-neutral-800 flex-1 hover:bg-neutral-900 transition-colors">
                  <h4 className="text-2xl font-bold mb-3">Open Minecraft</h4>
                  <p className="text-neutral-400 leading-relaxed">Launch Minecraft on your Xbox, PlayStation, Switch, or Mobile device. Ensure you are on version <strong className="text-white bg-neutral-800 px-2 py-0.5 rounded">1.21.4</strong>.</p>
                </div>
              </div>

              <div className="guide-step relative flex items-start gap-8">
                <div className="w-14 h-14 rounded-full bg-[#0a0a0a] border-2 border-emerald-500 flex items-center justify-center font-bold text-emerald-400 shrink-0 z-10 shadow-[0_0_20px_rgba(16,185,129,0.2)] text-xl">2</div>
                <div className="bg-neutral-900/50 p-8 rounded-3xl border border-neutral-800 flex-1 hover:bg-neutral-900 transition-colors">
                  <h4 className="text-2xl font-bold mb-3">Play Menu</h4>
                  <p className="text-neutral-400 leading-relaxed">Click <strong className="text-white">Play</strong> from the main menu, then navigate to the <strong className="text-white">Servers</strong> tab at the top.</p>
                </div>
              </div>

              <div className="guide-step relative flex items-start gap-8">
                <div className="w-14 h-14 rounded-full bg-[#0a0a0a] border-2 border-emerald-500 flex items-center justify-center font-bold text-emerald-400 shrink-0 z-10 shadow-[0_0_20px_rgba(16,185,129,0.2)] text-xl">3</div>
                <div className="bg-neutral-900/50 p-8 rounded-3xl border border-neutral-800 flex-1 hover:bg-neutral-900 transition-colors">
                  <h4 className="text-2xl font-bold mb-3">Add External Server</h4>
                  <p className="text-neutral-400 leading-relaxed">Scroll down past the featured servers and click on <strong className="text-white">Add Server</strong>.</p>
                </div>
              </div>

              <div className="guide-step relative flex items-start gap-8">
                <div className="w-14 h-14 rounded-full bg-[#0a0a0a] border-2 border-emerald-500 flex items-center justify-center font-bold text-emerald-400 shrink-0 z-10 shadow-[0_0_20px_rgba(16,185,129,0.2)] text-xl">4</div>
                <div className="bg-neutral-900/50 p-8 rounded-3xl border border-neutral-800 flex-1 hover:bg-neutral-900 transition-colors">
                  <h4 className="text-2xl font-bold mb-5">Enter Details</h4>
                  <div className="space-y-4">
                    <div className="bg-[#050505] p-4 rounded-xl border border-neutral-800">
                      <span className="text-xs text-neutral-500 font-semibold uppercase tracking-wider block mb-2">Server Name</span>
                      <code className="text-white text-lg">Minecraft Server</code>
                    </div>
                    <div className="bg-[#050505] p-4 rounded-xl border border-neutral-800">
                      <span className="text-xs text-neutral-500 font-semibold uppercase tracking-wider block mb-2">Server Address</span>
                      <code className="text-emerald-400 text-lg select-all">Umutcan_Emre.exaroton.me</code>
                    </div>
                    <div className="bg-[#050505] p-4 rounded-xl border border-neutral-800">
                      <span className="text-xs text-neutral-500 font-semibold uppercase tracking-wider block mb-2">Port</span>
                      <code className="text-white text-lg select-all">28198</code>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="guide-step relative flex items-start gap-8">
                <div className="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-[#0a0a0a] shrink-0 z-10 shadow-[0_0_30px_rgba(16,185,129,0.4)] text-2xl">✓</div>
                <div className="bg-gradient-to-br from-emerald-900/20 to-neutral-900/50 p-8 rounded-3xl border border-emerald-500/20 flex-1">
                  <h4 className="text-2xl font-bold mb-3 text-emerald-400">Save & Play!</h4>
                  <p className="text-neutral-300 leading-relaxed">Click <strong className="text-white">Save</strong>, then click on our server in your list and select <strong className="text-white">Join Server</strong>.</p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .hidden-before-mobile::before {
            display: none;
          }
        }
      `}} />
    </div>
  );
}
