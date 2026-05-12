'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { X, Save, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface UpdateMetadataModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: {
    id: string;
    title: string;
    description: string;
  };
  onUpdate: (title: string, description: string) => Promise<void>;
}

export function UpdateMetadataModal({ isOpen, onClose, event, onUpdate }: UpdateMetadataModalProps) {
  const [title, setTitle] = useState(event.title);
  const [description, setDescription] = useState(event.description);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onUpdate(title, description);
      onClose();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="w-full max-w-md relative z-10"
          >
            <Card className="glass-card border-white/10 p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-black text-white italic uppercase tracking-tight">Edit Event Info</h2>
                  <p className="text-xs text-slate-400">Sync changes to Stacks V2.1 Contract</p>
                </div>
                <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors text-slate-400">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase">Event Title</label>
                  <Input 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                    className="bg-white/5 border-white/10 text-white focus:border-orange-500/50 transition-colors"
                    placeholder="Enter new title..."
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase">Description</label>
                  <Textarea 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)}
                    className="bg-white/5 border-white/10 text-white min-h-[100px] focus:border-orange-500/50 transition-colors"
                    placeholder="Tell your fans what's changed..."
                  />
                </div>

                <div className="p-3 bg-orange-500/10 border border-orange-500/20 rounded-lg flex gap-3 items-start">
                  <AlertCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <p className="text-[10px] text-orange-200/70 leading-tight">
                    This will broadcast a transaction to update the metadata-uri on-chain. Gas fees apply.
                  </p>
                </div>

                <Button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-white text-slate-900 font-black hover:bg-slate-200 disabled:opacity-50"
                >
                  {loading ? (
                    <motion.div 
                      animate={{ rotate: 360 }} 
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      <Save className="w-4 h-4 mr-2" />
                      Broadcast Changes
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
