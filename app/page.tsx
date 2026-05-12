'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  ArrowRight, Zap, Shield, Ticket, Users, BarChart3, 
  QrCode, Wallet, Calendar, MapPin, Activity, CheckCircle,
  Twitter, MessageSquare, Share2
} from 'lucide-react';
import { HeroSlider } from '@/components/HeroSlider';
import { PlatformStats } from '@/components/PlatformStats';
import { motion } from 'framer-motion';
import { Magnetic } from '@/components/Magnetic';
import type { Event } from '@/lib/types';


export default function Home() {
  const [events, setEvents] = useState<Event[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/events');
        const data = await response.json();
        setEvents(data || []);
      } catch (error) {
        console.error('[PartyStacker] Failed to fetch events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">



      {/* Hero Section */}
      <HeroSlider />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">
        <PlatformStats />
      </div>

      {/* Features Section */}
      <section id="features-section" className="relative py-24 px-4 sm:px-6 lg:px-8 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Why <span className="text-orange-500">PartyStacker</span>?
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Built on Bitcoin's secure layer. Powered by Stacks smart contracts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shiny-card p-6 border-transparent">
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 border border-orange-500/20">
                <Zap className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">x402 Protocol</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                HTTP 402 Payment Required standard. Direct peer-to-peer STX payments.
              </p>
            </Card>

            <Card className="shiny-card p-6 border-transparent">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 border border-blue-500/20">
                <Shield className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Verified Tickets</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Cryptographic QR codes. No forgery or unauthorized resales possible.
              </p>
            </Card>

            <Card className="shiny-card p-6 border-transparent">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4 border border-purple-500/20">
                <Ticket className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">NFT Rewards</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Auto-mint NFTs for all attendees as proof of attendance.
              </p>
            </Card>

            <Card className="shiny-card p-6 border-transparent">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-4 border border-green-500/20">
                <Users className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Flexible Tiers</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Multiple ticket types — General, VIP, Backstage — with easy upgrades.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section (Timeline) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50 border-b border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">How It Works</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Your journey from crypto wallet to event floor in 4 simple steps.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500/0 via-orange-500/50 to-orange-500/0" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {[
                { icon: Wallet, title: "Connect Wallet", desc: "Link your Leather wallet to get started instantly." },
                { icon: Calendar, title: "Choose Event", desc: "Browse exclusive events or create your own." },
                { icon: Zap, title: "Pay with STX", desc: "Seamless crypto payments via x402 protocol." },
                { icon: QrCode, title: "Get NFT Ticket", desc: "Receive a unique NFT ticket & QR code." }
              ].map((step, i) => (
                <div key={i} className="relative flex flex-col items-center text-center group">
                  <div className="w-24 h-24 bg-slate-950 rounded-full border-4 border-slate-900 group-hover:border-orange-500/50 transition-colors flex items-center justify-center mb-6 relative z-10 shadow-xl">
                    <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center group-hover:bg-orange-500/10 transition-colors">
                      <step.icon className="w-8 h-8 text-slate-400 group-hover:text-orange-500 transition-colors" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events-section" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">Upcoming Events</h2>
            <p className="text-slate-600 dark:text-slate-400">Verified blockchain events powered by x402-stacks</p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="w-8 h-8 border-2 border-slate-300 dark:border-slate-700 border-t-orange-500 dark:border-t-orange-400 rounded-full animate-spin mx-auto mb-4" />
              <p className="text-slate-600 dark:text-slate-400">Loading events...</p>
            </div>
          ) : events.length === 0 ? (
            <Card className="p-12 text-center bg-slate-50 dark:bg-slate-900/30 border-slate-200 dark:border-slate-700">
              <Ticket className="w-12 h-12 text-slate-400 dark:text-slate-600 mx-auto mb-4" />
              <p className="text-slate-600 dark:text-slate-400 mb-2">No events yet. Be the first to create one!</p>
              <p className="text-sm text-slate-500 dark:text-slate-500 mb-6">
                Create an event and start selling tickets with zero fees via x402-stacks.
              </p>
              <Link href="/create">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white font-medium">
                  Create First Event
                </Button>
              </Link>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.slice(0, 3).map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <Link href={`/event/${event.id}`}>
                    <Card className="shiny-card group overflow-hidden h-full border border-white/5 hover:border-orange-500/30 transition-colors">
                      <div className="relative h-56 bg-slate-950 overflow-hidden">
                        {event.imageUrl ? (
                          <Image
                            src={event.imageUrl}
                            alt={event.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-slate-900">
                            <Ticket className="w-12 h-12 text-slate-700" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90" />
                        <div className="absolute top-4 right-4 flex flex-col gap-2">
                          {index === 0 && (
                            <span className="px-2 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-tighter italic rounded-md flex items-center gap-1">
                              <Activity className="w-3 h-3 text-orange-500" />
                              Trending Now
                            </span>
                          )}
                          {event.organizerName === 'Queenode' && (
                            <span className="px-2 py-1 bg-blue-500/20 backdrop-blur-md border border-blue-500/30 text-blue-400 text-[10px] font-black uppercase tracking-tighter rounded-md flex items-center gap-1">
                              <CheckCircle className="w-3 h-3" />
                              Verified
                            </span>
                          )}
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <span className="inline-block px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full mb-2 shadow-lg shadow-orange-500/20">
                            {event.tiers?.general?.price ?? '?'} STX
                          </span>
                          <h3 className="text-xl font-bold text-white leading-tight mt-1 line-clamp-1 group-hover:text-orange-400 transition-colors">
                            {event.title}
                          </h3>
                        </div>
                      </div>

                      <div className="p-6 space-y-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-1">Organizer</p>
                            <p className="text-sm text-slate-300 font-medium line-clamp-1">{event.organizerName || 'Anonymous'}</p>
                          </div>
                          {event.tiers?.general && (
                              <div className="text-right">
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Available</p>
                                {event.tiers.general.sold >= event.tiers.general.available ? (
                                  <span className="text-xs font-black text-red-500 uppercase tracking-tighter italic">Sold Out</span>
                                ) : (
                                  <p className="text-sm font-bold text-white">
                                    {event.tiers.general.available - event.tiers.general.sold} <span className="text-slate-500">/</span> {event.tiers.general.available}
                                  </p>
                                )}
                              </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}

          {events.length > 3 && (
            <div className="mt-12 text-center">
              <Link href="/events">
                <Button variant="outline" size="lg" className="border-white/10 hover:bg-white/5 text-white">
                  View All Events
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-orange-950/20" />
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Ready to launch your event?
            </h2>
            <p className="text-xl text-slate-400">
              Create a blockchain-powered event in minutes with x402-stacks. No technical knowledge required.
            </p>
          </div>
          <Magnetic>
            <Link href="/create">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold h-14 px-8 rounded-full shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:shadow-[0_0_50px_rgba(249,115,22,0.6)] transition-all">
                Get Started Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </Magnetic>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="border-t border-white/5 py-24 px-4 sm:px-6 lg:px-8 bg-slate-950/50 backdrop-blur-3xl relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand & Newsletter */}
          <div className="md:col-span-6 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-pink-600 rounded-xl flex items-center justify-center font-black text-white text-lg shadow-[0_0_20px_rgba(249,115,22,0.4)] italic">
                P
              </div>
              <span className="font-black text-2xl text-white italic uppercase tracking-tighter">PartyStacker</span>
            </div>
            
            <div className="space-y-4 max-w-md">
              <h4 className="text-sm font-black text-white uppercase tracking-widest italic">Join the guestlist</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Stay updated with the hottest events and platform upgrades. No spam, just pure alpha.
              </p>
              <div className="flex gap-2 p-1 bg-white/5 rounded-xl border border-white/10 focus-within:border-orange-500/50 transition-all">
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="bg-transparent border-none text-white text-sm px-3 flex-1 outline-none"
                />
                <Button className="bg-white text-slate-950 font-black uppercase text-[10px] tracking-widest px-6 rounded-lg hover:bg-slate-200">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-sm font-black text-white uppercase tracking-widest italic">Navigation</h4>
            <ul className="space-y-3">
              {['Explore', 'Create', 'Verify', 'Dashboard'].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase()}`} className="text-slate-500 hover:text-orange-500 transition-colors text-sm font-bold">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-sm font-black text-white uppercase tracking-widest italic">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-white/5 rounded-xl border border-white/10 text-slate-400 hover:text-white hover:border-orange-500/50 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-xl border border-white/10 text-slate-400 hover:text-white hover:border-orange-500/50 transition-all">
                <MessageSquare className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-xl border border-white/10 text-slate-400 hover:text-white hover:border-orange-500/50 transition-all">
                <Share2 className="w-5 h-5" />
              </a>
            </div>
            <p className="text-[10px] text-slate-600 font-bold uppercase tracking-[0.2em]">
              Built with <span className="text-orange-500/50">Stacks V2.1</span>
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-24 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 mt-12">
          <p className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">
            © 2026 PartyStacker Protocol. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-bold text-slate-700 uppercase tracking-widest">
            <a href="#" className="hover:text-slate-400">Terms</a>
            <a href="#" className="hover:text-slate-400">Privacy</a>
            <a href="#" className="hover:text-slate-400">Manifesto</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
