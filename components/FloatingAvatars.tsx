import React from 'react';

export function FloatingAvatars({ urls }: { urls: string[] }) {
  return (
    <div className="relative h-32 w-full overflow-hidden">
      {urls.map((url, i) => (
        <img key={i} src={url} className="absolute rounded-full w-10 h-10 border-2 border-slate-900 animate-[float_6s_ease-in-out_infinite]" style={{ left: `${Math.random() * 80}%`, top: `${Math.random() * 60}%`, animationDelay: `${i * 0.5}s` }} alt="" />
      ))}
    </div>
  );
}
