import React from 'react';
import { cn } from '@/lib/utils';

export function GradientText({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn('bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-rose-400', className)}>
      {children}
    </span>
  );
}
