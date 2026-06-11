import React from 'react';

export function KanbanBoard({ columns }: { columns: { title: string; count: number; items: React.ReactNode[] }[] }) {
  return (
    <div className="flex gap-6 overflow-x-auto pb-4 h-full">
      {columns.map((col, i) => (
        <div key={i} className="w-80 shrink-0 flex flex-col bg-slate-950/50 rounded-xl">
          <div className="p-3 border-b border-white/5 flex justify-between items-center">
            <span className="font-semibold text-sm text-slate-200">{col.title}</span>
            <span className="text-xs font-mono bg-slate-800 px-2 py-0.5 rounded text-slate-400">{col.count}</span>
          </div>
          <div className="p-3 flex flex-col gap-3 flex-1 overflow-y-auto">
            {col.items}
          </div>
        </div>
      ))}
    </div>
  );
}
