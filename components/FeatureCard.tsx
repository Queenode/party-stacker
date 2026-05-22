import React from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export function FeatureCard({ icon: Icon, title, description, className }: { icon: any; title: string; description: string; className?: string }) {
  return (
    <Card className={cn('p-6 bg-slate-900/50 border-white/5 hover:border-orange-500/30 transition-colors', className)}>
      <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4"><Icon className="w-6 h-6 text-orange-500" /></div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-slate-400">{description}</p>
    </Card>
  );
}
