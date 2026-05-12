'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Plus, BarChart3, Users, DollarSign, Ticket, Activity } from 'lucide-react';
import { useWalletStore } from '@/lib/store';
import type { Event, EventAnalytics } from '@/lib/types';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts';
import { StatsCard } from '@/components/StatsCard';
import { AnimatedNumber } from '@/components/AnimatedNumber';
import { openContractCall } from '@stacks/connect';
import { uintCV, stringAsciiCV, boolCV, AnchorMode, PostConditionMode } from '@stacks/transactions';
import { UpdateMetadataModal } from '@/components/UpdateMetadataModal';

const CONTRACT_ADDRESS = 'SP1B27X06M4SF2TE46G3VBA7KSR4KBMJCTHM6BES4';
const CONTRACT_NAME = 'partystacker-v2';

const mockChartData = [
  { name: 'Mon', sales: 4, revenue: 200 },
  { name: 'Tue', sales: 7, revenue: 350 },
  { name: 'Wed', sales: 5, revenue: 250 },
  { name: 'Thu', sales: 12, revenue: 600 },
  { name: 'Fri', sales: 25, revenue: 1250 },
  { name: 'Sat', sales: 45, revenue: 2250 },
  { name: 'Sun', sales: 60, revenue: 3000 },
];


export default function DashboardPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [analytics, setAnalytics] = useState<Map<string, EventAnalytics>>(
    new Map()
  );
  const [loading, setLoading] = useState(true);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);

  const { address } = useWalletStore();

  const handleUpdateMetadata = async (id: string, title: string, description: string) => {
    await openContractCall({
      contractAddress: CONTRACT_ADDRESS,
      contractName: CONTRACT_NAME,
      functionName: 'update-event-metadata',
      functionArgs: [
        uintCV(id),
        stringAsciiCV(title),
        stringAsciiCV(description.slice(0, 256)), // URI field used for desc in this demo
      ],
      anchorMode: AnchorMode.Any,
      postConditionMode: PostConditionMode.Allow,
      onFinish: (data) => {
        console.log('TX Sent:', data.txId);
        alert(`Transaction Sent! ID: ${data.txId}`);
      },
    });
  };

  const handleToggleStatus = async (event: Event) => {
    const newStatus = event.status !== 'active';
    await openContractCall({
      contractAddress: CONTRACT_ADDRESS,
      contractName: CONTRACT_NAME,
      functionName: 'toggle-event-active',
      functionArgs: [
        uintCV(event.id),
        boolCV(newStatus),
      ],
      anchorMode: AnchorMode.Any,
      postConditionMode: PostConditionMode.Allow,
      onFinish: (data) => {
        console.log('TX Sent:', data.txId);
        alert(`Status Update Sent! ID: ${data.txId}`);
      },
    });
  };

  useEffect(() => {
    const fetchEvents = async () => {
      if (!address) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`/api/events?organizer=${address}`);
        const data = await response.json();
        setEvents(data);

        // Fetch analytics for each event
        const analyticsMap = new Map<string, EventAnalytics>();
        for (const event of data) {
          try {
            const analyticsResponse = await fetch(
              `/api/analytics/${event.id}`
            );
            const analyticsData = await analyticsResponse.json();
            analyticsMap.set(event.id, analyticsData);
          } catch (error) {
            console.error('[v0] Failed to fetch analytics:', error);
          }
        }
        setAnalytics(analyticsMap);
      } catch (error) {
        console.error('[v0] Failed to fetch events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [address]);

  if (!address) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p>Please connect your wallet to view your dashboard.</p>
        <Link href="/create">
          <Button>Set Up Wallet</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Navbar */}
      <nav className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
          <Link href="/create">
            <Button size="sm" className="bg-gradient-to-r from-amber-400 to-pink-500 text-slate-900 font-bold">
              <Plus className="w-4 h-4 mr-2" />
              New Event
            </Button>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-white flex items-center gap-3">
              <BarChart3 className="w-10 h-10 text-primary" />
              Event Dashboard
            </h1>
            <p className="text-slate-300 mt-2">
              Manage your events and view analytics
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-slate-400">Loading your events...</p>
            </div>
          ) : events.length === 0 ? (
            <Card className="p-12 text-center space-y-4">
              <BarChart3 className="w-16 h-16 mx-auto text-muted-foreground opacity-50" />
              <p className="text-slate-400 text-lg">No events yet</p>
              <p className="text-slate-500">
                Create your first event to get started.
              </p>
              <Link href="/create">
                <Button className="mt-4">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Event
                </Button>
              </Link>
            </Card>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {events.map((event) => {
                const eventAnalytics = analytics.get(event.id);

                return (
                  <Card
                    key={event.id}
                    className="p-6 space-y-4 hover:shadow-lg transition-shadow"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Event Info */}
                      <div>
                        <h3 className="text-2xl font-bold">{event.title}</h3>
                        <p className="text-muted-foreground mt-1">
                          {event.description}
                        </p>
                        <div className="mt-4 space-y-2">
                          <p className="text-sm">
                            <span className="font-semibold">Date:</span>{' '}
                            {new Date(event.date).toLocaleDateString()}
                          </p>
                          <p className="text-sm">
                            <span className="font-semibold">Location:</span>{' '}
                            {event.location}
                          </p>
                          <p className="text-sm capitalize">
                            <span className="font-semibold">Status:</span>{' '}
                            {event.status}
                          </p>
                        </div>
                      </div>

                      {/* Analytics */}
                      {eventAnalytics && (
                        <div className="grid grid-cols-2 gap-4">
                          <StatsCard
                            title="Tickets Sold"
                            value={eventAnalytics.totalTicketsSold}
                            icon={Ticket}
                            trend={{ value: 12, isUp: true }}
                            description="Total primary sales"
                          />
                          <StatsCard
                            title="Checked In"
                            value={eventAnalytics.checkedInCount}
                            icon={Users}
                            description="Real-time attendance"
                          />
                          <StatsCard
                            title="Total Revenue"
                            value={`$${eventAnalytics.totalRevenue.toFixed(0)}`}
                            icon={DollarSign}
                            trend={{ value: 8, isUp: true }}
                            description="Gross STX sales"
                          />
                          <StatsCard
                            title="NFTs Minted"
                            value={eventAnalytics.nftsMinted}
                            icon={Activity}
                            description="On-chain assets"
                          />
                        </div>
                      )}
                    </div>

                    {/* Tier Breakdown */}
                    {eventAnalytics && (
                      <div className="border-t border-border pt-4">
                        <h4 className="font-semibold mb-3">Tier Breakdown</h4>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="text-center p-2 bg-slate-700/30 rounded">
                            <p className="text-xs text-muted-foreground">
                              General
                            </p>
                            <p className="font-bold">
                              {eventAnalytics.tierBreakdown.general}
                            </p>
                          </div>
                          <div className="text-center p-2 bg-slate-700/30 rounded">
                            <p className="text-xs text-muted-foreground">VIP</p>
                            <p className="font-bold">
                              {eventAnalytics.tierBreakdown.vip}
                            </p>
                          </div>
                          <div className="text-center p-2 bg-slate-700/30 rounded">
                            <p className="text-xs text-muted-foreground">
                              Backstage
                            </p>
                            <p className="font-bold">
                              {eventAnalytics.tierBreakdown.backstage}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Recharts Analytics Chart */}
                    <div className="border-t border-white/10 pt-6 mt-6">
                      <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                        <Activity className="w-5 h-5 text-orange-500" />
                        Sales Activity (7 Days)
                      </h4>
                      <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart
                            data={mockChartData}
                            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                          >
                            <defs>
                              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#f97316" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                            <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" tick={{fill: 'rgba(255,255,255,0.5)', fontSize: 12}} tickLine={false} axisLine={false} />
                            <YAxis stroke="rgba(255,255,255,0.5)" tick={{fill: 'rgba(255,255,255,0.5)', fontSize: 12}} tickLine={false} axisLine={false} />
                            <RechartsTooltip 
                              contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }}
                              itemStyle={{ color: '#f97316' }}
                            />
                            <Area type="monotone" dataKey="revenue" stroke="#f97316" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3 pt-6 border-t border-white/5">
                      <Link href={`/event/${event.id}`} className="flex-1 min-w-[140px]">
                        <Button variant="outline" className="w-full bg-white/5 border-white/10 hover:bg-white/10 text-white">
                          View Public Page
                        </Button>
                      </Link>
                      
                      <div className="flex-1 min-w-[140px]">
                        <Button 
                          variant="secondary" 
                          className="w-full bg-orange-500/10 border border-orange-500/20 hover:bg-orange-500/20 text-orange-500 font-bold"
                          onClick={() => setEditingEvent(event)}
                        >
                          Update Metadata
                        </Button>
                      </div>

                      <div className="flex-1 min-w-[140px]">
                        <Button 
                          variant="destructive" 
                          className="w-full bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 text-red-500 font-bold"
                          onClick={() => handleToggleStatus(event)}
                        >
                          {event.status === 'active' ? 'End Sales' : 'Resume Sales'}
                        </Button>
                      </div>

                      <div className="flex-1 min-w-[140px]">
                        <Button 
                          className="w-full bg-white text-slate-900 font-black hover:bg-slate-200"
                          onClick={() => alert('V2 Feature: Opening Bulk Airdrop Tool...')}
                        >
                          Bulk Airdrop
                        </Button>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </div>
      {/* Modals */}
      {editingEvent && (
        <UpdateMetadataModal 
          isOpen={!!editingEvent}
          onClose={() => setEditingEvent(null)}
          event={editingEvent}
          onUpdate={(title, desc) => handleUpdateMetadata(editingEvent.id, title, desc)}
        />
      )}
    </div>
  );
}
