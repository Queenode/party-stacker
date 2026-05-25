import React, { useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const [style, setStyle] = useState({});
  const cardRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; const y = e.clientY - rect.top;
    const centerX = rect.width / 2; const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    setStyle({ transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)` });
  };
  return (
    <div ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={() => setStyle({ transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)' })} style={style} className={cn('transition-transform duration-200 ease-out', className)}>
      {children}
    </div>
  );
}
