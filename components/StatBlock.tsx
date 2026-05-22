import React from 'react';
import { cn } from '@/lib/utils';

export function StatBlock({ label, value, className }: { label: string; value: string | number; className?: string }) {
  return (
    <div className={cn('space-y-1', className)}>
      <p className="text-sm font-medium text-slate-400">{label}</p>
      <p className="text-2xl font-bold text-white tracking-tight">{value}</p>
    </div>
  );
}
