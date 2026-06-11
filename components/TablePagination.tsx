import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function TablePagination({ current, total, onPage }: { current: number; total: number; onPage: (p: number) => void }) {
  return (
    <div className="flex items-center justify-between px-2 py-3 border-t border-white/5">
      <div className="text-sm text-slate-500">Page {current} of {total}</div>
      <div className="flex gap-1">
        <button disabled={current <= 1} onClick={() => onPage(current - 1)} className="p-1.5 rounded bg-slate-900 border border-white/5 text-slate-400 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-800"><ChevronLeft className="w-4 h-4"/></button>
        <button disabled={current >= total} onClick={() => onPage(current + 1)} className="p-1.5 rounded bg-slate-900 border border-white/5 text-slate-400 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-800"><ChevronRight className="w-4 h-4"/></button>
      </div>
    </div>
  );
}
