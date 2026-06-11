import React from 'react';
import { cn } from '@/lib/utils';

export function AnimatedBorder({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('relative p-[2px] overflow-hidden rounded-xl', className)}>
      <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f97316_0%,#fb923c_50%,#f97316_100%)]" />
      <div className="relative h-full w-full bg-slate-950 rounded-[10px]">{children}</div>
    </div>
  );
}
