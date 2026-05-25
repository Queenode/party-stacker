import React from 'react';

export function Timeline({ events }: { events: { date: string; title: string }[] }) {
  return (
    <div className="space-y-4 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
      {events.map((event, i) => (
        <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-5 h-5 rounded-full border border-orange-500 bg-slate-900 text-slate-500 group-[.is-active]:text-orange-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm" />
          <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] p-4 rounded-xl border border-slate-800 bg-slate-900/50 shadow">
            <time className="font-mono text-xs text-orange-500 mb-1">{event.date}</time>
            <div className="text-sm font-bold text-slate-100">{event.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
