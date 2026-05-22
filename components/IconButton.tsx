import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function IconButton({ icon: Icon, onClick, className }: { icon: any; onClick?: () => void; className?: string }) {
  return (
    <Button variant="ghost" size="icon" onClick={onClick} className={cn('hover:bg-white/10 rounded-full', className)}>
      <Icon className="w-5 h-5" />
    </Button>
  );
}
