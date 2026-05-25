import React from 'react';
import { cn } from '@/lib/utils';

export function HoverCard({ trigger, content, className }: { trigger: React.ReactNode; content: React.ReactNode; className?: string }) {
  return (
    <div className={cn('group relative inline-block', className)}>
      {trigger}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block w-48 p-2 bg-slate-900 border border-white/10 rounded-xl shadow-xl z-50">
        {content}
      </div>
    </div>
  );
}
