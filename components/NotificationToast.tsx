import React from 'react';
import { X, Bell } from 'lucide-react';

export function NotificationToast({ title, description, onClose }: { title: string; description: string; onClose: () => void }) {
  return (
    <div className="flex items-start gap-3 p-4 bg-slate-900 border border-white/10 rounded-xl shadow-2xl max-w-sm w-full relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500" />
      <div className="p-2 bg-orange-500/10 rounded-lg text-orange-500 shrink-0"><Bell className="w-5 h-5"/></div>
      <div className="flex-1 pr-6">
        <h4 className="text-sm font-semibold text-white mb-1">{title}</h4>
        <p className="text-xs text-slate-400 leading-relaxed">{description}</p>
      </div>
      <button onClick={onClose} className="absolute right-3 top-3 text-slate-500 hover:text-white transition-colors"><X className="w-4 h-4"/></button>
    </div>
  );
}
