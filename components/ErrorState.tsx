import React from 'react';
import { AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function ErrorState({ message, onRetry, className }: { message: string; onRetry?: () => void; className?: string }) {
  return (
    <div className={cn('flex flex-col items-center justify-center p-6 text-center bg-red-500/5 border border-red-500/10 rounded-xl', className)}>
      <AlertCircle className="w-8 h-8 text-red-400 mb-3" />
      <p className="text-sm text-red-200 mb-4">{message}</p>
      {onRetry && <Button variant="outline" size="sm" onClick={onRetry} className="border-red-500/20 hover:bg-red-500/10 text-red-400">Try Again</Button>}
    </div>
  );
}
