import React from 'react';
import { cn } from '@/lib/utils';

export function GlassPanel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-xl', className)}>
      {children}
    </div>
  );
}
