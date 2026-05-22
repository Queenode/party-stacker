import React from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LogOut, Settings, User } from 'lucide-react';

export function UserMenu({ address, onDisconnect }: { address: string; onDisconnect: () => void }) {
  const shortAddress = address.slice(0, 4) + '...' + address.slice(-4);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <Avatar className="w-9 h-9 border border-white/10 hover:border-orange-500/50 transition-colors">
          <AvatarFallback className="bg-orange-500/20 text-orange-500 text-xs font-medium">STX</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 bg-slate-900 border-white/10 text-white">
        <div className="p-2 border-b border-white/10 mb-1">
          <p className="text-sm font-medium">Connected Wallet</p>
          <p className="text-xs text-slate-400 font-mono mt-0.5">{shortAddress}</p>
        </div>
        <DropdownMenuItem className="focus:bg-slate-800 cursor-pointer">
          <User className="w-4 h-4 mr-2" /> My Profile
        </DropdownMenuItem>
        <DropdownMenuItem className="focus:bg-slate-800 cursor-pointer">
          <Settings className="w-4 h-4 mr-2" /> Settings
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onDisconnect} className="focus:bg-red-500/20 focus:text-red-400 cursor-pointer text-red-400">
          <LogOut className="w-4 h-4 mr-2" /> Disconnect
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
