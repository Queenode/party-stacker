import React from 'react';

export function CalendarMonthView({ days }: { days: number[] }) {
  return (
    <div className="grid grid-cols-7 gap-px bg-slate-800 border border-slate-800 rounded-xl overflow-hidden">
      {['S','M','T','W','T','F','S'].map(d => <div key={d} className="bg-slate-900 p-2 text-center text-xs font-semibold text-slate-500 uppercase">{d}</div>)}
      {days.map((d, i) => (
        <div key={i} className={`bg-slate-950 p-2 min-h-[80px] transition-colors hover:bg-slate-900 ${d ? '' : 'opacity-20'}`}>
          {d && <span className="text-sm font-medium text-slate-300">{d}</span>}
        </div>
      ))}
    </div>
  );
}
