'use client';

import { cn } from '@/lib/utils';

interface EventStatusBadgeProps {
  status: 'upcoming' | 'live' | 'ended' | 'cancelled';
  className?: string;
}

export function EventStatusBadge({ status, className }: EventStatusBadgeProps) {
  const styles = {
    upcoming: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    live: "bg-green-500/10 text-green-500 border-green-500/20",
    ended: "bg-slate-500/10 text-slate-500 border-slate-500/20",
    cancelled: "bg-red-500/10 text-red-500 border-red-500/20"
  };

  return (
    <span className={cn(
      "px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest border",
      styles[status],
      className
    )}>
      {status}
    </span>
  );
}
