import React, { useState, useMemo } from 'react';
import { MemoryImage } from '../types';

interface MemoryWallProps {
  images: MemoryImage[];
}


const MemoryWall: React.FC<MemoryWallProps> = ({ images }) => {
  // Create two differently shuffled orders (memoized so they stay stable across renders).
  // Each row duplicates its own ordering to provide a seamless scrolling loop.
  const shuffleArray = (arr: MemoryImage[]) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const [rowOrderTop, rowOrderBottom] = useMemo(() => {
    if (!images || images.length === 0) return [[], []] as MemoryImage[][];

    const first = shuffleArray(images);
    let second = shuffleArray(images);

    // Try a few times to get a different ordering; fall back to reversing if unlucky.
    let attempts = 0;
    const idsEqual = (a: MemoryImage[], b: MemoryImage[]) => a.map(i => i.id).join(',') === b.map(i => i.id).join(',');
    while (idsEqual(first, second) && attempts < 5) {
      second = shuffleArray(images);
      attempts++;
    }
    if (idsEqual(first, second) && images.length > 1) {
      second = [...first].reverse();
    }

    return [first, second];
  }, [images]);

  const rowItemsTop = [...rowOrderTop, ...rowOrderTop];
  const rowItemsBottom = [...rowOrderBottom, ...rowOrderBottom];

  const [zoomedImage, setZoomedImage] = useState<MemoryImage | null>(null);

  const handleImageClick = (img: MemoryImage) => {
    setZoomedImage(img);
  };

  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // Only close if background (not image/caption) is clicked
    if (e.target === e.currentTarget) {
      setZoomedImage(null);
    }
  };

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
            {rowItemsTop.map((img, idx) => (
              <div 
                key={`${img.id}-top-${idx}`} 
                className="relative w-[300px] h-[200px] md:w-[400px] md:h-[280px] flex-shrink-0 rounded-xl overflow-hidden border border-slate-800 bg-slate-900 transition-transform duration-300 hover:scale-105 cursor-pointer"
                onClick={() => handleImageClick(img)}
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
             {rowItemsBottom.map((img, idx) => (
              <div 
                key={`${img.id}-btm-${idx}`} 
                className="relative w-[300px] h-[200px] md:w-[400px] md:h-[280px] flex-shrink-0 rounded-xl overflow-hidden border border-slate-800 bg-slate-900 transition-transform duration-300 hover:scale-105 cursor-pointer"
                onClick={() => handleImageClick(img)}
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

      {/* Zoomed Image Popup */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-zoom-out"
          onClick={handleClose}
        >
          <div className="max-w-[90vw] max-h-[80vh] flex flex-col items-center" style={{ pointerEvents: 'auto' }}>
            <img
              src={zoomedImage.url}
              alt={zoomedImage.caption}
              className="rounded-xl shadow-2xl max-h-[60vh] max-w-full object-contain border-4 border-white"
              style={{ background: '#222' }}
            />
            <div className="mt-4 px-4 py-2 bg-black/70 rounded text-white text-lg text-center max-w-xl">
              {zoomedImage.caption}
            </div>
            <button
              className="mt-4 px-4 py-2 bg-white/80 hover:bg-white text-slate-900 rounded shadow text-base font-semibold"
              onClick={() => setZoomedImage(null)}
              type="button"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default MemoryWall;