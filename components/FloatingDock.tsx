import React from 'react';
import { cn } from '@/lib/utils';

export function FloatingDock({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className={cn('flex items-center gap-2 p-2 rounded-2xl bg-slate-950/80 backdrop-blur-xl border border-white/10 shadow-2xl', className)}>
        {children}
      </div>
    </div>
  );
}
