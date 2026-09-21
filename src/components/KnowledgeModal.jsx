import React, { useEffect } from 'react';
import { playClickSound } from '../utils/audio';
import { X } from 'lucide-react';

export default function KnowledgeModal({ isOpen, onClose, title, content, icon }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xl transition-opacity"
      onClick={() => { playClickSound(); onClose(); }}
    >
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="bg-white/10 border border-white/20 rounded-3xl w-full max-w-4xl max-h-[85vh] flex flex-col shadow-[0_30px_100px_rgba(0,0,0,0.5)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="bg-black/40 p-6 md:p-8 flex justify-between items-center border-b border-white/10 backdrop-blur-md">
          <div className="flex items-center gap-6">
            {icon && <div className="w-12 h-12 md:w-16 md:h-16 transform scale-125 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">{icon}</div>}
            <h2 id="modal-title" className="text-3xl md:text-4xl text-white font-bold font-pixel tracking-wide">{title}</h2>
          </div>
          <button 
            aria-label="Schließen"
            onClick={() => { playClickSound(); onClose(); }}
            className="text-white/70 hover:text-white bg-white/5 hover:bg-white/20 border border-white/10 rounded-full w-12 h-12 flex items-center justify-center transition-all hover:rotate-90 hover:scale-110 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div data-lenis-prevent="true" className="p-8 md:p-12 overflow-y-auto font-pixel text-gray-200 text-xl md:text-2xl leading-loose space-y-8 custom-scrollbar">
          {content}
        </div>

      </div>
    </div>
  );
}
