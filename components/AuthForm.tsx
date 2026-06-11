import React from 'react';
import { Card } from '@/components/ui/card';

export function AuthForm({ title, children, footer }: { title: string; children: React.ReactNode; footer?: React.ReactNode }) {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white tracking-tight">{title}</h2>
      </div>
      <Card className="p-6 bg-slate-900 border-white/5 shadow-2xl">
        {children}
        {footer && <div className="mt-6 pt-6 border-t border-white/5 text-center text-sm text-slate-400">{footer}</div>}
      </Card>
    </div>
  );
}
