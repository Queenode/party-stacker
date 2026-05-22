import React from 'react';
import { cn } from '@/lib/utils';

export function StepIndicator({ currentStep, totalSteps, className }: { currentStep: number; totalSteps: number; className?: string }) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      {Array.from({ length: totalSteps }).map((_, i) => (
        <div key={i} className={cn('h-1.5 rounded-full transition-all duration-300', i < currentStep ? 'w-8 bg-orange-500' : 'w-2 bg-slate-800')} />
      ))}
    </div>
  );
}
