import React from 'react';
import { cn } from '@/lib/utils';

export function PriceTag({ amount, currency = 'STX', className }: { amount: number; currency?: string; className?: string }) {
  return (
    <div className={cn('inline-flex items-baseline gap-1', className)}>
      <span className="text-2xl font-bold text-white">{amount}</span>
      <span className="text-sm font-medium text-slate-400">{currency}</span>
    </div>
  );
}
