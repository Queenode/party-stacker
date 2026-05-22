import React from 'react';
import { cn } from '@/lib/utils';

export function BlurOverlay({ className }: { className?: string }) {
  return <div className={cn('absolute inset-0 backdrop-blur-sm bg-slate-950/20', className)} />;
}
