import React, { useState } from 'react';

export function CookieBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:w-96 bg-slate-900 border border-white/10 p-4 rounded-xl shadow-2xl z-50 flex flex-col gap-3">
      <p className="text-sm text-slate-300">We use cookies to improve your experience on PartyStacker.</p>
      <div className="flex gap-2">
        <button onClick={() => setVisible(false)} className="flex-1 py-2 bg-orange-500 text-white rounded-lg text-sm font-medium">Accept</button>
        <button onClick={() => setVisible(false)} className="flex-1 py-2 bg-slate-800 text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-700">Decline</button>
      </div>
    </div>
  );
}
