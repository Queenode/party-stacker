'use client';

import { cn } from '@/lib/utils';

type StatusType = 'live' | 'ended' | 'upcoming';

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const configs = {
    live: {
      label: 'Live Now',
      bg: 'bg-green-500/10',
      text: 'text-green-500',
      dot: 'bg-green-500',
      pulse: 'animate-pulse'
    },
    upcoming: {
      label: 'Upcoming',
      bg: 'bg-orange-500/10',
      text: 'text-orange-500',
      dot: 'bg-orange-500',
      pulse: ''
    },
    ended: {
      label: 'Ended',
      bg: 'bg-slate-500/10',
      text: 'text-slate-500',
      dot: 'bg-slate-500',
      pulse: ''
    }
  };

  const config = configs[status];

  return (
    <div className={cn(
      "inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
      config.bg,
      config.text,
      className
    )}>
      <span className={cn("w-1.5 h-1.5 rounded-full", config.dot, config.pulse)} />
      {config.label}
    </div>
  );
}
