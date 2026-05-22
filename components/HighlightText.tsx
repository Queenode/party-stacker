import React from 'react';
import { cn } from '@/lib/utils';

export function HighlightText({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn('relative inline-block', className)}>
      <span className="relative z-10 text-white">{children}</span>
      <span className="absolute bottom-1 left-0 w-full h-2 bg-orange-500/50 -rotate-1 z-0" />
    </span>
  );
}
