import React from 'react';

export function ImageGallery({ images }: { images: string[] }) {
  return (
    <div className="columns-2 md:columns-3 gap-4 space-y-4">
      {images.map((src, i) => (
        <div key={i} className="break-inside-avoid relative group rounded-xl overflow-hidden">
          <img src={src} alt="Gallery item" className="w-full h-auto transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white font-medium drop-shadow-md">View</span>
          </div>
        </div>
      ))}
    </div>
  );
}
