import React from 'react';
import { cn } from '@/lib/utils';

export function ShimmerButton({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <button className={cn('relative overflow-hidden rounded-lg bg-slate-900 px-6 py-2 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.1)] transition-transform active:scale-95', className)}>
      <span className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <span className="relative">{children}</span>
    </button>
  );
}
