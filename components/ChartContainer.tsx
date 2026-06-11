import React from 'react';

export function ChartContainer({ title, children, action }: { title: string; children: React.ReactNode; action?: React.ReactNode }) {
  return (
    <div className="p-5 bg-slate-900 border border-white/5 rounded-2xl flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold text-white">{title}</h3>
        {action && <div>{action}</div>}
      </div>
      <div className="flex-1 min-h-[200px]">
        {children}
      </div>
    </div>
  );
}
