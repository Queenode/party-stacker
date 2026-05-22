import React from 'react';
import { cn } from '@/lib/utils';

export function Divider({ className }: { className?: string }) {
  return <div className={cn('h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent', className)} />;
}
