'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Store, ShieldAlert, Sparkles, Zap, Ticket } from 'lucide-react';
import { useStacksWallet } from '@/lib/useStacksWallet';
import type { TicketListing } from '@/lib/types';
import { fetchEventFromChain } from '@/lib/stacks-api';

// Example Mock Data - In a real app we'd fetch from contract map `ticket-listings`
const MOCK_LISTINGS: TicketListing[] = [
  {
    ticketId: '42',
    price: 120, // STX
    seller: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
    eventTitle: 'Bitcoin Web3 Summit 2026',
    tier: 'vip'
  },
  {
    ticketId: '8',
    price: 45, // STX
    seller: 'ST2CY5V39NHDPWSXWH9Q8F1A8C8N8ED0XSF05Q3S9',
    eventTitle: 'Stacks Ecosystem Meetup',
    tier: 'general'
  }
];

export default function MarketplacePage() {
  const { isConnected, address } = useStacksWallet();
  const [listings, setListings] = useState<TicketListing[]>(MOCK_LISTINGS);
  const [loading, setLoading] = useState(false);

  // In a real implementation we would fetch all listings from the smart contract
  // using get-ticket-listing and iterating through a known set or indexer

  return (
    <main className="min-h-screen bg-slate-950 pt-24 pb-12 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none fixed">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-white flex items-center gap-3">
              <Store className="w-10 h-10 text-purple-500" />
              Secondary Marketplace
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl">
              Buy and sell peer-to-peer. Guaranteed authentic tickets on Stacks. Smart contracts handle the transfer and royalties automatically.
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/my-tickets">
              <Button variant="outline" className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10">
                List My Tickets
              </Button>
            </Link>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
          </div>
        ) : listings.length === 0 ? (
          <Card className="bg-slate-900/50 border-white/5 text-center py-20">
            <div className="flex flex-col items-center justify-center space-y-4">
              <Ticket className="w-16 h-16 text-slate-600" />
              <h3 className="text-xl font-medium text-white">No Tickets Listed</h3>
              <p className="text-slate-400">Be the first to list a ticket on the marketplace.</p>
            </div>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((listing) => (
              <Card key={listing.ticketId} className="shiny-card bg-slate-900/80 border-white/10 hover:border-purple-500/50 transition-all group overflow-hidden">
                <CardHeader className="pb-4 relative">
                  <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                    ID: #{listing.ticketId}
                  </div>
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        {listing.tier === 'vip' && <Sparkles className="w-4 h-4 text-yellow-500" />}
                        {listing.tier === 'backstage' && <Zap className="w-4 h-4 text-orange-500" />}
                        <span className="text-xs font-medium uppercase tracking-wider text-purple-400">
                          {listing.tier} Tier
                        </span>
                      </div>
                      <CardTitle className="text-xl text-white leading-tight">
                        {listing.eventTitle}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-4 rounded-xl bg-slate-950/50 border border-white/5 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Price</span>
                      <span className="font-bold text-white text-lg">{listing.price} STX</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Seller</span>
                      <span className="font-mono text-slate-300">
                        {listing.seller.slice(0, 6)}...{listing.seller.slice(-4)}
                      </span>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/20 group-hover:scale-[1.02] transition-transform"
                    disabled={!isConnected}
                    onClick={() => {
                        // In a real app, call buy-listed-ticket contract function
                        console.log('Buying ticket:', listing.ticketId);
                    }}
                  >
                    {!isConnected ? 'Connect Wallet to Buy' : 'Buy Ticket'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
