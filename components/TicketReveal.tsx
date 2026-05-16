'use client';

import { motion } from 'framer-motion';
import { Ticket, Sparkles } from 'lucide-react';

export function TicketReveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.6
      }}
      className="relative"
    >
      <div className="absolute -top-4 -right-4 animate-bounce">
        <div className="p-2 bg-orange-500 rounded-full shadow-lg shadow-orange-500/50">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
      </div>
      {children}
    </motion.div>
  );
}
