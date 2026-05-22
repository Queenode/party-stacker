import React from 'react';
import { cn } from '@/lib/utils';

export function TagList({ tags, className }: { tags: string[]; className?: string }) {
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {tags.map((tag, i) => (
        <span key={i} className="px-2.5 py-1 rounded-md bg-slate-800 text-xs text-slate-300">{tag}</span>
      ))}
    </div>
  );
}
