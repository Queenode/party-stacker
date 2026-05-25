import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

export function StatCounter({ label, value, trend }: { label: string; value: string; trend: number }) {
  return (
    <div className="flex flex-col p-4 bg-slate-900/50 rounded-xl border border-white/5">
      <span className="text-sm text-slate-400">{label}</span>
      <div className="flex items-end gap-2 mt-1">
        <span className="text-2xl font-bold text-white">{value}</span>
        <span className={`flex items-center text-xs ${trend >= 0 ? 'text-green-500' : 'text-red-500'} mb-1`}>
          {trend >= 0 ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
          {Math.abs(trend)}%
        </span>
      </div>
    </div>
  );
}
