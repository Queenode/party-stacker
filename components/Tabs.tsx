import React, { useState } from 'react';

export function Tabs({ tabs }: { tabs: { label: string; content: React.ReactNode }[] }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="flex gap-2 border-b border-white/10 mb-4">
        {tabs.map((tab, i) => (
          <button key={i} onClick={() => setActive(i)} className={`px-4 py-2 border-b-2 transition-colors ${active === i ? 'border-orange-500 text-white' : 'border-transparent text-slate-400 hover:text-slate-200'}`}>
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs[active].content}</div>
    </div>
  );
}
