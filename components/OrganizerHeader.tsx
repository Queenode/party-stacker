'use client';

import { VerifiedBadge } from './VerifiedBadge';
import { Wallet, Settings, LayoutDashboard } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface OrganizerHeaderProps {
  address: string;
}

export function OrganizerHeader({ address }: OrganizerHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/5">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
          <LayoutDashboard className="w-8 h-8 text-white" />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-2xl font-black text-white italic uppercase tracking-tighter">Organizer Portal</h1>
            <VerifiedBadge />
          </div>
          <p className="text-slate-500 font-mono text-xs">{address}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="outline" className="glass-card border-white/5 hover:bg-white/5 text-white">
          <Settings className="w-4 h-4 mr-2" />
          Settings
        </Button>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 shadow-lg shadow-orange-500/20">
          Create New Event
        </Button>
      </div>
    </div>
  );
}
