'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Settings, Save, AlertCircle, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EventSettingsPage({ params }: { params: { id: string } }) {
  const [loading, setLoading] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 pt-32 pb-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-orange-500/10 rounded-2xl border border-orange-500/20">
            <Settings className="w-6 h-6 text-orange-500" />
          </div>
          <div>
            <h1 className="text-3xl font-black text-white italic uppercase tracking-tighter">Event Settings</h1>
            <p className="text-slate-500 text-sm">Configure lifecycle, permissions, and metadata.</p>
          </div>
        </div>

        <div className="grid gap-6">
          <Card className="glass-card p-6 border-white/5 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">Public Status</h3>
                <p className="text-sm text-slate-500">Toggle event visibility on the marketplace.</p>
              </div>
              <Button className="bg-green-500/10 text-green-500 border border-green-500/20 hover:bg-green-500/20 rounded-full px-6">
                Active
              </Button>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/5">
              <div className="grid gap-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Metadata URI</label>
                <div className="flex gap-2">
                  <Input 
                    placeholder="ipfs://..." 
                    className="bg-slate-900 border-white/10 text-white"
                  />
                  <Button variant="outline" className="border-white/10 hover:bg-white/5">Update</Button>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-red-500/5 border-red-500/10 p-6 space-y-4">
            <div className="flex items-center gap-3 text-red-500">
              <AlertCircle className="w-5 h-5" />
              <h3 className="font-bold">Danger Zone</h3>
            </div>
            <p className="text-sm text-slate-500">Ending an event is permanent. All ticket sales will stop immediately.</p>
            <Button variant="destructive" className="bg-red-600 hover:bg-red-700">
              End Event Sales
            </Button>
          </Card>
        </div>
      </div>
    </main>
  );
}
