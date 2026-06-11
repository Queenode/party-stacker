import React from 'react';
import { Clock } from 'lucide-react';

export function TimePickerWrapper({ value, onClick }: { value?: string; onClick: () => void }) {
  return (
    <button onClick={onClick} className="flex items-center gap-2 px-3 py-2 bg-slate-900 border border-white/10 rounded-lg text-sm text-slate-300 hover:bg-slate-800 transition-colors w-full text-left">
      <Clock className="w-4 h-4 text-slate-500 shrink-0" />
      <span className="flex-1 truncate">{value || 'Select time'}</span>
    </button>
  );
}
