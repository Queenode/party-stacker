import React from 'react';
import { cn } from '@/lib/utils';

export function DotBackground({ className }: { className?: string }) {
  return (
    <div className={cn('absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:16px_16px]', className)} />
  );
}
