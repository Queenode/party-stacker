import React from 'react';
import { cn } from '@/lib/utils';

export function TextReveal({ text, className }: { text: string; className?: string }) {
  return (
    <div className={cn('relative overflow-hidden', className)}>
      <span className="block translate-y-full animate-[reveal_0.5s_ease-out_forwards]">{text}</span>
    </div>
  );
}
