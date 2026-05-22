import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export function CopyableText({ text, display, className }: { text: string; display?: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button 
      onClick={handleCopy}
      className={cn('inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-slate-800/50 hover:bg-slate-800 text-sm text-slate-300 font-mono transition-colors', className)}
    >
      {display || text}
      {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
    </button>
  );
}
