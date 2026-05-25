import React from 'react';
import { cn } from '@/lib/utils';

export function ToggleSwitch({ checked, onChange }: { checked: boolean; onChange: (checked: boolean) => void }) {
  return (
    <button onClick={() => onChange(!checked)} className={cn('relative inline-flex h-6 w-11 items-center rounded-full transition-colors', checked ? 'bg-orange-500' : 'bg-slate-700')}>
      <span className={cn('inline-block h-4 w-4 transform rounded-full bg-white transition-transform', checked ? 'translate-x-6' : 'translate-x-1')} />
    </button>
  );
}
