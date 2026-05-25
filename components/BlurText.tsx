import React from 'react';
import { cn } from '@/lib/utils';

export function BlurText({ text, isRevealed, className }: { text: string; isRevealed: boolean; className?: string }) {
  return (
    <span className={cn('transition-all duration-700 ease-out', isRevealed ? 'filter-none opacity-100' : 'blur-sm opacity-50', className)}>
      {text}
    </span>
  );
}
