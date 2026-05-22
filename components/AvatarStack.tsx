import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

export function AvatarStack({ urls, limit = 3, className }: { urls: string[]; limit?: number; className?: string }) {
  const displayUrls = urls.slice(0, limit);
  const remaining = urls.length - limit;
  return (
    <div className={cn('flex -space-x-2', className)}>
      {displayUrls.map((url, i) => (
        <Avatar key={i} className="border-2 border-slate-950 w-8 h-8"><AvatarImage src={url} /><AvatarFallback className="bg-slate-800 text-xs">U</AvatarFallback></Avatar>
      ))}
      {remaining > 0 && (
        <div className="w-8 h-8 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center text-xs font-medium text-white z-10">+{remaining}</div>
      )}
    </div>
  );
}
