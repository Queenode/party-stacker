import React from 'react';
import { cn } from '@/lib/utils';

export function GridOverlay({ className }: { className?: string }) {
  return (
    <div className={cn('pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]', className)} />
  );
}
