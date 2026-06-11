import React from 'react';

export function HeroVideo({ src, poster }: { src: string; poster?: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <video autoPlay muted loop playsInline poster={poster} className="w-full h-full object-cover opacity-30 mix-blend-screen">
        <source src={src} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
    </div>
  );
}
