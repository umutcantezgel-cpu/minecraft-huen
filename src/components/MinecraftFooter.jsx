import React from 'react';

export default function MinecraftFooter() {
  return (
    <footer className="minecraft-footer bg-[#2b2b2b] text-white py-12 border-t-8 border-[#1e1e1e] font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        
        {/* Brand / About */}
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-3xl font-bold mb-4 text-[#55FF55] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] tracking-wide">
            MC Network
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4 text-sm">
            The ultimate Minecraft survival experience. Build, explore, and conquer in a world without limits. Join thousands of players today!
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 bg-[#555555] flex items-center justify-center border-2 border-[#1e1e1e] hover:bg-[#55FF55] hover:text-[#1e1e1e] transition-colors shadow-[inset_0_2px_0_rgba(255,255,255,0.2)]">
              🐦
            </a>
            <a href="#" className="w-10 h-10 bg-[#555555] flex items-center justify-center border-2 border-[#1e1e1e] hover:bg-[#FF5555] hover:text-[#1e1e1e] transition-colors shadow-[inset_0_2px_0_rgba(255,255,255,0.2)]">
              📺
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 border-b-2 border-[#555555] pb-2 inline-block text-[#FFAA00]">Navigation</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-[#55FF55] transition-colors flex items-center gap-2"><span className="text-[#555555]">&gt;</span> Home</a></li>
            <li><a href="#" className="hover:text-[#55FF55] transition-colors flex items-center gap-2"><span className="text-[#555555]">&gt;</span> Store</a></li>
            <li><a href="#" className="hover:text-[#55FF55] transition-colors flex items-center gap-2"><span className="text-[#555555]">&gt;</span> Rules</a></li>
            <li><a href="#" className="hover:text-[#55FF55] transition-colors flex items-center gap-2"><span className="text-[#555555]">&gt;</span> Vote</a></li>
            <li><a href="#" className="hover:text-[#55FF55] transition-colors flex items-center gap-2"><span className="text-[#555555]">&gt;</span> Staff</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-xl font-bold mb-4 border-b-2 border-[#555555] pb-2 inline-block text-[#FFAA00]">Support</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-[#55FF55] transition-colors flex items-center gap-2"><span className="text-[#555555]">&gt;</span> Help Center</a></li>
            <li><a href="#" className="hover:text-[#55FF55] transition-colors flex items-center gap-2"><span className="text-[#555555]">&gt;</span> Ban Appeal</a></li>
            <li><a href="#" className="hover:text-[#55FF55] transition-colors flex items-center gap-2"><span className="text-[#555555]">&gt;</span> Report Player</a></li>
            <li><a href="#" className="hover:text-[#55FF55] transition-colors flex items-center gap-2"><span className="text-[#555555]">&gt;</span> Contact Us</a></li>
          </ul>
        </div>

        {/* Discord CTA */}
        <div className="bg-[#5865F2] p-6 border-4 border-[#3c45a5] shadow-[inset_0_4px_0_rgba(255,255,255,0.2),_0_4px_0_rgba(0,0,0,0.5)] transform -rotate-1 hover:rotate-0 transition-transform">
          <h3 className="text-2xl font-bold mb-2 text-white drop-shadow-md">Join our Discord</h3>
          <p className="text-indigo-100 mb-4 text-sm drop-shadow-sm">Get real-time updates, chat with the community, and participate in exclusive giveaways!</p>
          <a href="#" className="block w-full text-center bg-white text-[#5865F2] font-bold py-3 px-4 border-b-4 border-gray-300 hover:bg-gray-100 hover:border-gray-400 active:border-b-0 active:translate-y-1 transition-all">
            Connect Now
          </a>
        </div>
        
      </div>
      
      {/* Copyright Bar */}
      <div className="container mx-auto px-4 mt-12 pt-8 border-t-4 border-[#1e1e1e] text-center text-sm text-[#AAAAAA] flex flex-col md:flex-row justify-between items-center relative z-10">
        <p>&copy; {new Date().getFullYear()} MC Network. Not affiliated with Mojang AB.</p>
        <div className="flex space-x-4 mt-4 md:mt-0 font-bold">
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-[#55FF55] transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
