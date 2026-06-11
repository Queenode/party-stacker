import React from 'react';
import { PlayCircle } from 'lucide-react';

export function AudioPlayerLite({ title, duration }: { title: string; duration: string }) {
  return (
    <div className="flex items-center gap-3 p-3 bg-slate-900 border border-white/5 rounded-full">
      <button className="text-orange-500 hover:text-orange-400 transition-colors"><PlayCircle className="w-8 h-8" /></button>
      <div className="flex-1">
        <div className="text-sm font-medium text-white truncate max-w-[150px]">{title}</div>
        <div className="text-xs text-slate-500 font-mono">{duration}</div>
      </div>
      <div className="flex-1 h-6 flex items-center justify-center gap-0.5 opacity-50 px-2">
        {Array.from({length: 12}).map((_, i) => <div key={i} className="w-1 bg-orange-500 rounded-full animate-pulse" style={{ height: `${Math.random() * 100}%`, animationDelay: `${i * 0.1}s` }} />)}
      </div>
    </div>
  );
}
