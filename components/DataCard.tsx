import React from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export function DataCard({ title, value, trend, className }: { title: string; value: string; trend?: { value: number; isPositive: boolean }; className?: string }) {
  return (
    <Card className={cn('p-5 bg-slate-900 border-white/5', className)}>
      <h4 className="text-sm font-medium text-slate-400 mb-2">{title}</h4>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold text-white tracking-tight">{value}</span>
        {trend && (
          <span className={cn('text-xs font-medium', trend.isPositive ? 'text-green-400' : 'text-red-400')}>
            {trend.isPositive ? '+' : '-'}{trend.value}%
          </span>
        )}
      </div>
    </Card>
  );
}
