import React from 'react';

export function CodeBlock({ code, language }: { code: string; language: string }) {
  return (
    <div className="relative rounded-lg bg-slate-950 p-4 border border-slate-800 overflow-x-auto">
      <div className="absolute top-2 right-2 text-xs text-slate-500">{language}</div>
      <pre className="text-sm font-mono text-slate-300"><code>{code}</code></pre>
    </div>
  );
}
