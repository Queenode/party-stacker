import React from 'react';
import { cn } from '@/lib/utils';

export function GradientBorder({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('relative p-[1px] rounded-2xl bg-gradient-to-b from-white/20 to-transparent', className)}>
      <div className="bg-slate-950 rounded-[15px] h-full w-full">{children}</div>
    </div>
  );
}
