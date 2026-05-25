import React from 'react';
import { cn } from '@/lib/utils';

export function ParallaxLayer({ children, offset, className }: { children: React.ReactNode; offset: number; className?: string }) {
  return (
    <div className={cn('absolute inset-0', className)} style={{ transform: `translateZ(${offset}px) scale(${1 + (offset * -1) / 1000})` }}>
      {children}
    </div>
  );
}
