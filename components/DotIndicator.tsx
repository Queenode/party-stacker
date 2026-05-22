import React from 'react';
import { cn } from '@/lib/utils';

export function DotIndicator({ active, className }: { active: boolean; className?: string }) {
  return (
    <div className={cn('w-2 h-2 rounded-full transition-all duration-300', active ? 'bg-orange-500 scale-110 shadow-[0_0_8px_rgba(249,115,22,0.8)]' : 'bg-slate-700', className)} />
  );
}
