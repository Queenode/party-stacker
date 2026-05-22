import React from 'react';
import { cn } from '@/lib/utils';

export function KbdHint({ keys, className }: { keys: string[]; className?: string }) {
  return (
    <div className={cn('flex items-center gap-1', className)}>
      {keys.map((k, i) => (
        <kbd key={i} className="px-1.5 py-0.5 rounded-md bg-slate-800 border border-slate-700 border-b-2 text-[10px] font-mono text-slate-300 uppercase shadow-sm">
          {k}
        </kbd>
      ))}
    </div>
  );
}
