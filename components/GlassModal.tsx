import React from 'react';
import { cn } from '@/lib/utils';

export function GlassModal({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: React.ReactNode }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-md" onClick={onClose} />
      <div className="relative bg-slate-900/80 border border-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-2xl max-w-lg w-full">
        {children}
      </div>
    </div>
  );
}
