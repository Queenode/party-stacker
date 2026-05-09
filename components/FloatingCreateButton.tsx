'use client';

import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import Link from 'next/link';

export function FloatingCreateButton() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      className="fixed bottom-8 right-8 z-50 md:hidden"
    >
      <Link href="/create">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-orange-500/40 border border-orange-400"
        >
          <Plus className="w-8 h-8" />
        </motion.button>
      </Link>
    </motion.div>
  );
}
