'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Clock, 
  MapPin, 
  Check, 
  ArrowLeft, 
  Calendar, 
  Users, 
  Map as MapIcon,
  ShieldCheck,
  Zap,
  Star
} from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { Button } from '@/components/ui/Button';
import { fetchItineraryBySlug } from '@/app/actions/itineraries';
import { type Itinerary } from '@/lib/data/itineraries';
import { formatPrice } from '@/lib/utils';

export default function ItineraryDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadItinerary() {
      try {
        const data = await fetchItineraryBySlug(slug);
        if (data) {
          setItinerary(data);
        }
      } catch (error) {
        console.error('Error fetching itinerary:', error);
      } finally {
        setLoading(false);
      }
    }
    loadItinerary();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-navy border-t-gold rounded-full animate-spin" />
      </div>
    );
  }

  if (!itinerary) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl font-heading font-bold text-navy mb-4">Itinerary Not Found</h1>
        <p className="text-slate mb-8">The itinerary you are looking for does not exist or has been moved.</p>
        <Link href="/">
          <Button variant="primary">Back to Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <ScrollProgress />
      <Header />

      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <Image
            src={itinerary.image}
            alt={itinerary.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
          
          <div className="container-custom relative h-full flex flex-col justify-end pb-12 md:pb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 text-white/80 hover:text-gold transition-colors mb-6 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Explore
              </Link>
              
              <div className="flex items-center gap-2 text-gold mb-4">
                <MapPin className="w-5 h-5" />
                <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em]">
                  {itinerary.destination}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 max-w-4xl">
                <span className="text-white">{itinerary.title}</span>
              </h1>
              
              <div className="flex flex-wrap gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gold" />
                  <span className="font-medium">{itinerary.duration.nights} Nights / {itinerary.duration.days} Days</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-gold fill-gold" />
                  <span className="font-medium">Premium Experience</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
              
              {/* Left Column - Details */}
              <div className="lg:col-span-2 space-y-12">
                
                {/* Overview */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy mb-6 flex items-center gap-3">
                    <Zap className="w-6 h-6 text-gold" />
                    Trip Overview
                  </h2>
                  <p className="text-slate text-lg leading-relaxed">
                    {itinerary.description}
                  </p>
                </div>

                {/* Cities Covered */}
                <div className="bg-off-white rounded-3xl p-8">
                  <h3 className="text-xl font-heading font-bold text-navy mb-6 flex items-center gap-3">
                    <MapIcon className="w-5 h-5 text-navy" />
                    Cities Covered
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {itinerary.cities.map((city, index) => (
                      <div key={index} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                        <span className="w-6 h-6 rounded-full bg-navy text-white text-xs flex items-center justify-center font-bold">
                          {index + 1}
                        </span>
                        <span className="font-medium text-slate-dark">{city}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy mb-8 flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-gold" />
                    Trip Highlights
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {itinerary.highlights.map((highlight, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex gap-4 p-4 rounded-2xl border border-gray-100 hover:border-gold/30 hover:bg-gold/5 transition-all group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-white transition-colors">
                          <Check className="w-5 h-5 text-gold group-hover:text-white" />
                        </div>
                        <span className="text-slate-dark font-medium leading-tight pt-2">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Inclusions */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy mb-8">What&apos;s Included</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {itinerary.inclusions.map((inclusion, index) => (
                      <div key={index} className="flex items-center gap-3 text-slate">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                        <span>{inclusion}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Booking Card */}
              <div className="lg:col-span-1">
                <div className="sticky top-32">
                  <div className="bg-white rounded-[32px] p-8 shadow-2xl border border-gray-100">
                    <div className="mb-8">
                      <p className="text-slate uppercase tracking-widest text-xs font-bold mb-2">Starting from</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-heading font-bold text-navy">{formatPrice(itinerary.price)}</span>
                        <span className="text-slate text-sm">/ person</span>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-3 p-4 rounded-2xl bg-off-white">
                        <Calendar className="w-5 h-5 text-navy" />
                        <div>
                          <p className="text-[10px] text-slate uppercase font-bold">Best Time to Visit</p>
                          <p className="text-sm font-bold text-navy">All Year Round</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-4 rounded-2xl bg-off-white">
                        <Users className="w-5 h-5 text-navy" />
                        <div>
                          <p className="text-[10px] text-slate uppercase font-bold">Group Size</p>
                          <p className="text-sm font-bold text-navy">Customized for you</p>
                        </div>
                      </div>
                    </div>

                    <Link href="/contact">
                      <Button variant="primary" size="lg" className="w-full rounded-2xl py-6 text-lg shadow-coral">
                        Inquire Now
                      </Button>
                    </Link>
                    
                    <p className="text-center text-xs text-slate mt-6">
                      * Prices are subject to availability and seasonal changes.
                    </p>
                  </div>

                  {/* Trust Badges */}
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="text-center p-4">
                      <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center mx-auto mb-2 text-navy">
                        <ShieldCheck size={20} />
                      </div>
                      <p className="text-[10px] font-bold uppercase text-slate">Secure Booking</p>
                    </div>
                    <div className="text-center p-4">
                      <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center mx-auto mb-2 text-navy">
                        <Star size={20} />
                      </div>
                      <p className="text-[10px] font-bold uppercase text-slate">Expert Guide</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
