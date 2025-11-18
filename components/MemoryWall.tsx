import React from 'react';
import { MemoryImage } from '../types';

interface MemoryWallProps {
  images: MemoryImage[];
}

const MemoryWall: React.FC<MemoryWallProps> = ({ images }) => {
  // We duplicate the array exactly once. 
  // The CSS animation translates -50% (the width of one full set).
  // This creates a seamless loop where the second set replaces the first instantly.
  const rowItems = [...images, ...images];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center relative z-10">
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Memory Lane</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          A gallery of bugs fixed, deadlines met, and moments shared.
        </p>
      </div>

      {/* Gradients to fade edges */}
      <div className="absolute top-0 bottom-0 left-0 w-12 md:w-32 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-12 md:w-32 bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none"></div>

      <div className="flex flex-col gap-8">
        {/* Row 1: Left to Right */}
        <div className="relative flex overflow-hidden group">
          <div className="flex gap-6 animate-scroll-left hover:[animation-play-state:paused]">
            {rowItems.map((img, idx) => (
              <div 
                key={`${img.id}-top-${idx}`} 
                className="relative w-[300px] h-[200px] md:w-[400px] md:h-[280px] flex-shrink-0 rounded-xl overflow-hidden border border-slate-800 bg-slate-900 transition-transform duration-300 hover:scale-105 cursor-pointer"
              >
                <img 
                  src={img.url} 
                  alt={img.caption} 
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <span className="text-white text-sm font-medium">{img.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="relative flex overflow-hidden group">
          <div className="flex gap-6 animate-scroll-right hover:[animation-play-state:paused]">
             {rowItems.map((img, idx) => (
              <div 
                key={`${img.id}-btm-${idx}`} 
                className="relative w-[300px] h-[200px] md:w-[400px] md:h-[280px] flex-shrink-0 rounded-xl overflow-hidden border border-slate-800 bg-slate-900 transition-transform duration-300 hover:scale-105 cursor-pointer"
              >
                <img 
                  src={img.url} 
                  alt={img.caption} 
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <span className="text-white text-sm font-medium">{img.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemoryWall;