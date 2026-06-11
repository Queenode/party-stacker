import React from 'react';

export function GanttChartRow({ title, start, end, totalDays }: { title: string; start: number; end: number; totalDays: number }) {
  const left = (start / totalDays) * 100;
  const width = ((end - start) / totalDays) * 100;
  return (
    <div className="flex items-center gap-4 py-2 border-b border-white/5 last:border-0">
      <div className="w-32 truncate text-sm text-slate-400">{title}</div>
      <div className="flex-1 relative h-6 bg-slate-900 rounded overflow-hidden">
        <div className="absolute top-1 bottom-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded shadow-sm" style={{ left: `${left}%`, width: `${width}%` }} />
      </div>
    </div>
  );
}
