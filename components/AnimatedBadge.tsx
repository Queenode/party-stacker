import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function AnimatedBadge({ text, className }: { text: string; className?: string }) {
  return (
    <motion.span whileHover={{ scale: 1.05 }} className={cn('px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-500/10 text-orange-500 border border-orange-500/20 cursor-default', className)}>
      {text}
    </motion.span>
  );
}
