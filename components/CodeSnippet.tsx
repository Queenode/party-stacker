import React from 'react';
import { cn } from '@/lib/utils';
import { CopyableText } from './CopyableText';

export function CodeSnippet({ code, language = 'javascript', className }: { code: string; language?: string; className?: string }) {
  return (
    <div className={cn('relative rounded-xl bg-slate-950 border border-white/10 overflow-hidden', className)}>
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-white/5">
        <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{language}</span>
        <CopyableText text={code} display="Copy" className="bg-transparent hover:bg-slate-800" />
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono text-slate-300 leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}
