import React from 'react';
import { cn } from '@/lib/utils';

export function DetailRow({ label, value, className }: { label: string; value: React.ReactNode; className?: string }) {
  return (
    <div className={cn('flex justify-between items-center py-2 border-b border-white/5 last:border-0', className)}>
      <span className="text-sm text-slate-400">{label}</span>
      <span className="text-sm font-medium text-white">{value}</span>
    </div>
  );
}
