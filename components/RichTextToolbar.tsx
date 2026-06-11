import React from 'react';
import { Bold, Italic, Underline, List, Link as LinkIcon } from 'lucide-react';

export function RichTextToolbar() {
  return (
    <div className="flex items-center gap-1 p-1 border-b border-white/10 bg-slate-900/50">
      {[Bold, Italic, Underline, List, LinkIcon].map((Icon, i) => (
        <button key={i} className="p-1.5 text-slate-400 hover:text-white hover:bg-white/5 rounded transition-colors">
          <Icon className="w-4 h-4" />
        </button>
      ))}
    </div>
  );
}
