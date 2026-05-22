import React from 'react';
import { cn } from '@/lib/utils';

export function GlowEffect({ color = 'orange', className }: { color?: 'orange' | 'blue' | 'purple'; className?: string }) {
  const colors = { orange: 'bg-orange-500/20', blue: 'bg-blue-500/20', purple: 'bg-purple-500/20' };
  return <div className={cn('absolute -inset-1 blur-3xl rounded-full opacity-50', colors[color], className)} />;
}
