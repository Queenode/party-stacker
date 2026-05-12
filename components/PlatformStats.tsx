'use client';

import { motion } from 'framer-motion';
import { Users, Ticket, Zap, DollarSign } from 'lucide-react';
import { AnimatedNumber } from './AnimatedNumber';

const stats = [
  { label: 'Tickets Minted', value: 12450, icon: Ticket, color: 'text-orange-500' },
  { label: 'Total Volume', value: 850000, prefix: '$', icon: DollarSign, color: 'text-green-500' },
  { label: 'Active Events', value: 342, icon: Zap, color: 'text-yellow-500' },
  { label: 'Unique Fans', value: 8900, icon: Users, color: 'text-blue-500' },
];

export function PlatformStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 px-6 glass-card border-white/5">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="text-center space-y-2"
        >
          <div className="flex justify-center">
            <div className={`p-3 rounded-2xl bg-white/5 ${stat.color} mb-2 shadow-xl`}>
              <stat.icon className="w-6 h-6" />
            </div>
          </div>
          <div className="text-3xl font-black text-white italic tracking-tighter flex items-center justify-center">
            {stat.prefix}
            <AnimatedNumber value={stat.value} />
            {stat.label.includes('Volume') && <span className="text-xs ml-1 text-slate-500 font-bold uppercase">STX</span>}
          </div>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
