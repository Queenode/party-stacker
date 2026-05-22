import React from 'react';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function SkeletonCard() {
  return (
    <Card className="p-4 bg-slate-900 border-white/5">
      <Skeleton className="h-40 w-full rounded-xl bg-slate-800 mb-4" />
      <Skeleton className="h-6 w-3/4 bg-slate-800 mb-2" />
      <Skeleton className="h-4 w-1/2 bg-slate-800" />
    </Card>
  );
}
