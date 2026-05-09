'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Ticket, Sparkles } from 'lucide-react';

interface TicketRevealProps {
  ticketId: string;
  eventName: string;
  tier: string;
}

export default function TicketReveal({ ticketId, eventName, tier }: TicketRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <AnimatePresence mode="wait">
        {!isRevealed ? (
          <motion.div
            key="hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.1, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsRevealed(true)}
            className="cursor-pointer group relative"
          >
            <div className="absolute inset-0 bg-orange-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative w-64 h-96 bg-slate-900 border-2 border-dashed border-white/20 rounded-2xl flex flex-col items-center justify-center p-8 text-center space-y-4">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center">
                <Ticket className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-white">Your Ticket</h3>
              <p className="text-sm text-slate-400">Click to reveal your unique NFT ticket metadata</p>
              <div className="pt-4 flex items-center text-orange-500 text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-4 h-4 mr-2" />
                Tap to Reveal
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="revealed"
            initial={{ rotateY: 180, opacity: 0, scale: 0.8 }}
            animate={{ rotateY: 0, opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="relative w-64 h-96 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-[0_0_50px_rgba(249,115,22,0.4)] p-0.5"
          >
            <div className="w-full h-full bg-slate-950 rounded-[15px] overflow-hidden flex flex-col">
              <div className="h-2/3 relative bg-slate-900 flex items-center justify-center">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                 <Ticket className="w-24 h-24 text-orange-500/20 absolute" />
                 <div className="z-10 text-center p-4">
                    <p className="text-[10px] font-bold text-orange-500 uppercase tracking-[0.2em] mb-1">Official Entry</p>
                    <h4 className="text-lg font-black text-white leading-tight uppercase italic">{eventName}</h4>
                 </div>
              </div>
              <div className="flex-1 p-4 flex flex-col justify-between border-t border-white/10 bg-slate-900/50 backdrop-blur-md">
                 <div className="flex justify-between items-end">
                    <div>
                        <p className="text-[8px] text-slate-500 uppercase font-bold">Tier</p>
                        <p className="text-sm font-bold text-white uppercase tracking-tighter">{tier}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-[8px] text-slate-500 uppercase font-bold">Token ID</p>
                        <p className="text-sm font-mono text-white">#{ticketId}</p>
                    </div>
                 </div>
                 <div className="w-full h-8 bg-white rounded-md flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-[repeating-linear-gradient(90deg,#000,#000_2px,#fff_2px,#fff_4px)] opacity-80" />
                 </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
