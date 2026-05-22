import React from 'react';
import { cn } from '@/lib/utils';

export function LoadingPulse({ className }: { className?: string }) {
  return <div className={cn('animate-pulse bg-white/5 rounded', className)} />;
}
