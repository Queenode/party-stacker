import React from 'react';
import { cn } from '@/lib/utils';

export function SectionHeading({ title, subtitle, className }: { title: string; subtitle?: string; className?: string }) {
  return (
    <div className={cn('mb-6', className)}>
      <h2 className="text-2xl font-bold text-white tracking-tight">{title}</h2>
      {subtitle && <p className="text-slate-400 mt-1">{subtitle}</p>}
    </div>
  );
}
