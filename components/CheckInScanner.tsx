'use client';

import { motion } from 'framer-motion';
import { QrCode, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CheckInScannerProps {
  onClose: () => void;
  onScan: (data: string) => void;
}

export function CheckInScanner({ onClose, onScan }: CheckInScannerProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-xl flex flex-col items-center justify-center p-6"
    >
      <div className="absolute top-8 right-8">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onClose}
          className="text-white/50 hover:text-white hover:bg-white/10 rounded-full"
        >
          <X className="w-6 h-6" />
        </Button>
      </div>

      <div className="w-full max-w-sm space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">Gatekeeper Scanner</h2>
          <p className="text-slate-400 text-sm">Position the ticket QR code within the frame.</p>
        </div>

        <div className="relative aspect-square w-full border-2 border-orange-500/30 rounded-3xl overflow-hidden group">
          {/* Simulated Scanner View */}
          <div className="absolute inset-0 bg-slate-900 flex items-center justify-center">
            <QrCode className="w-24 h-24 text-white/5 animate-pulse" />
          </div>

          {/* Scanner Line */}
          <motion.div 
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-[2px] bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.8)] z-10"
          />

          {/* Corners */}
          <div className="absolute top-6 left-6 w-8 h-8 border-t-4 border-l-4 border-orange-500 rounded-tl-lg" />
          <div className="absolute top-6 right-6 w-8 h-8 border-t-4 border-r-4 border-orange-500 rounded-tr-lg" />
          <div className="absolute bottom-6 left-6 w-8 h-8 border-b-4 border-l-4 border-orange-500 rounded-bl-lg" />
          <div className="absolute bottom-6 right-6 w-8 h-8 border-b-4 border-r-4 border-orange-500 rounded-br-lg" />
        </div>

        <div className="flex flex-col gap-4">
          <Button 
            className="bg-orange-500 hover:bg-orange-600 text-white font-black uppercase tracking-widest h-14 rounded-2xl shadow-lg shadow-orange-500/20"
            onClick={() => onScan('SIMULATED_TICKET_ID')}
          >
            <Zap className="w-4 h-4 mr-2" />
            Simulate Scan
          </Button>
          <p className="text-[10px] text-center text-slate-600 font-bold uppercase tracking-widest">
            Powered by x402 Security Protocol
          </p>
        </div>
      </div>
    </motion.div>
  );
}
