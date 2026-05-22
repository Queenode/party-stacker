import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { cn } from '@/lib/utils';

export function TimeAgo({ date, className }: { date: Date | string | number; className?: string }) {
  const parsedDate = new Date(date);
  const timeAgo = formatDistanceToNow(parsedDate, { addSuffix: true });
  
  return (
    <span className={cn('text-xs text-slate-500', className)} title={parsedDate.toLocaleString()}>
      {timeAgo}
    </span>
  );
}
