import React from 'react';
import { MCItem } from '../components/ui';

export default function HotbarFooter({ selectedPath, funds }) {
  const slots = [
    { icon: null },
    { icon: selectedPath === 'premium' ? <MCItem name="command_block" size={32} /> : null },
    { icon: selectedPath === 'smart' ? <MCItem name="emerald" size={32} /> : null },
    { icon: null },
    { 
      icon: (
        <div className="flex items-center justify-center font-pixel text-mc-gold text-2xl font-bold">
          <span className="text-shadow-mc">{funds}%</span>
        </div>
      ) 
    },
    { icon: null },
    { icon: null },
    { icon: null },
    { icon: null },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none">
      <div className="flex bg-[#8B8B8B] p-1 border-2 border-[#373737] shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
        {slots.map((slot, index) => (
          <div 
            key={index} 
            className={`w-10 h-10 md:w-14 md:h-14 flex justify-center items-center relative border border-[#373737] bg-[#8B8B8B] transition-all`}
          >
            <div className="absolute inset-0 border-t-2 border-l-2 border-[#373737] border-b-2 border-r-2 border-[#FFFFFF] opacity-50"></div>
            {slot.icon && <div className="transform scale-150 z-10 transition-transform">{slot.icon}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
