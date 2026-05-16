'use client';

import { LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
}

export function EmptyState({ icon: Icon, title, description, className, children }: EmptyStateProps) {
  return (
    <Card className={cn(
      "p-12 text-center bg-slate-900/30 border-white/5 flex flex-col items-center justify-center space-y-4",
      className
    )}>
      <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center">
        <Icon className="w-8 h-8 text-slate-500" />
      </div>
      <div className="space-y-2 max-w-xs">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-sm text-slate-500">{description}</p>
      </div>
      {children && <div className="pt-2">{children}</div>}
    </Card>
  );
}
