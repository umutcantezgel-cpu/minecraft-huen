import React from 'react';
import { items } from '../assets/items';
import { playClickSound } from '../utils/audio';

export const MCPanel = ({ children, className = '', style }) => (
  <div className={`mc-panel ${className}`} style={style}>
    {children}
  </div>
);

export const MCItem = ({ name, size = 64, className = '', onClick }) => (
  <img 
    src={items[name]} 
    alt={name}
    width={size}
    height={size}
    className={`pixel-sword ${className} ${onClick ? 'cursor-pointer transition-transform hover:scale-110 active:scale-95' : ''}`}
    onClick={() => {
      if (onClick) {
        playClickSound();
        onClick();
      }
    }}
    style={{ imageRendering: 'pixelated' }}
  />
);

export const MCButton = ({ children, className = '', onClick }) => (
  <div 
    className={`mc-button inline-flex justify-center items-center ${className}`}
    onClick={(e) => {
      playClickSound();
      if(onClick) onClick(e);
    }}
  >
    {children}
  </div>
);

export const MCSlot = ({ children, className = '', count, onClick, selected }) => (
  <div 
    className={`mc-slot ${onClick ? 'interactive' : ''} ${selected ? 'selected' : ''} ${className}`}
    onClick={() => {
      if (onClick) {
        playClickSound();
        onClick();
      }
    }}
  >
    {children}
    {count !== undefined && (
      <span className="item-count font-bold font-pixel absolute bottom-[-4px] right-[2px] z-20 text-white text-shadow-mc">{count}</span>
    )}
  </div>
);

export const MCToast = ({ children, title, icon }) => (
  <div className="mc-toast p-4 flex items-center gap-6 w-full max-w-2xl">
    <div className="w-16 h-16 flex-shrink-0">
      {icon}
    </div>
    <div className="flex flex-col text-left">
      <span className="text-mc-gold text-xl md:text-2xl mb-1 font-bold">{title}</span>
      <div className="text-white text-2xl md:text-3xl font-bold">{children}</div>
    </div>
  </div>
);
