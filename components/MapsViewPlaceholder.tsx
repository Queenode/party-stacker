import React from 'react';
import { MapPin } from 'lucide-react';

export function MapsViewPlaceholder({ location }: { location: string }) {
  return (
    <div className="w-full aspect-[2/1] bg-slate-900 rounded-xl border border-white/5 relative overflow-hidden flex items-center justify-center group">
      <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=0,0&zoom=1&size=600x300')] opacity-20 bg-cover bg-center grayscale" />
      <div className="relative flex flex-col items-center text-orange-500 group-hover:-translate-y-2 transition-transform">
        <MapPin className="w-8 h-8 fill-orange-500/20 mb-2" />
        <span className="font-medium text-white bg-slate-950/80 px-3 py-1 rounded-full text-sm backdrop-blur-sm border border-white/10 shadow-xl">{location}</span>
      </div>
    </div>
  );
}
