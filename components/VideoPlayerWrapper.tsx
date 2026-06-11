import React from 'react';
import { Play, Volume2, Maximize } from 'lucide-react';

export function VideoPlayerWrapper({ src }: { src: string }) {
  return (
    <div className="relative group rounded-xl overflow-hidden bg-black aspect-video">
      <video src={src} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
        <div className="flex items-center justify-between text-white">
          <button className="hover:text-orange-500"><Play className="w-5 h-5 fill-current" /></button>
          <div className="flex-1 mx-4 h-1 bg-white/30 rounded-full overflow-hidden"><div className="w-1/3 h-full bg-orange-500" /></div>
          <div className="flex gap-3">
            <button className="hover:text-orange-500"><Volume2 className="w-5 h-5" /></button>
            <button className="hover:text-orange-500"><Maximize className="w-5 h-5" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
