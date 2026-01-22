'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Clock, MapPin, Check, ArrowRight, Map as MapIcon } from 'lucide-react';
import { Itinerary } from '@/lib/data/itineraries';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { trackEvent } from '@/app/actions/analytics';

interface TripCardProps {
  itinerary: Itinerary;
  index?: number;
  variant?: 'default' | 'horizontal';
}
export function TripCard({ itinerary, index = 0, variant = 'default' }: TripCardProps) {
  const router = useRouter();
  const { title, destination, duration, price, image, highlights, cities, slug } = itinerary;

  const handleClick = async () => {
    const sessionId = localStorage.getItem('fly_goldfinch_session_id');
    if (sessionId) {
      await trackEvent({
        sessionId,
        eventType: 'itinerary_click',
        eventData: { title, slug },
        url: window.location.href,
      });
    }
    router.push(`/itineraries/${slug}`);
  };

  if (variant === 'horizontal') {
    return (
      <motion.article
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onClick={handleClick}
        className="group flex flex-col md:flex-row bg-white rounded-[24px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
      >
        {/* Image */}
        <div className="relative w-full md:w-80 aspect-16/10 md:aspect-auto overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 320px"
          />
          <div className="absolute inset-0 bg-linear-to-r from-transparent to-black/20" />
        </div>

        {/* Content */}
        <div className="flex-1 p-8">
          <div className="flex items-center gap-2 text-coral mb-3">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">{destination}</span>
          </div>
          <h3 className="text-2xl font-heading font-bold text-navy mb-4">
            {title}
          </h3>
          <div className="flex items-center gap-4 text-slate text-sm mb-6">
            <span className="flex items-center gap-2 px-3 py-1 bg-off-white rounded-full">
              <Clock className="w-4 h-4 text-navy" />
              {duration.nights}N/{duration.days}D
            </span>
          </div>
          <ul className="space-y-2 mb-8">
            {highlights.slice(0, 3).map((highlight, idx) => (
              <li key={idx} className="flex items-center gap-3 text-sm text-slate-dark">
                <div className="w-5 h-5 rounded-full bg-navy/5 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-navy" />
                </div>
                {highlight}
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between pt-6 border-t border-off-white">
            <div>
              <p className="text-xs text-slate uppercase tracking-wider mb-1">Starting from</p>
              <p className="text-2xl font-heading font-bold text-navy">
                {formatPrice(price)}
              </p>
            </div>
            <Button variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Explore
            </Button>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={handleClick}
      className="group bg-white rounded-[24px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Duration Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-navy text-xs font-bold shadow-sm">
          <Clock className="w-3.5 h-3.5" />
          {duration.nights}N/{duration.days}D
        </div>

        {/* Trending Badge */}
        <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-coral text-white text-xs font-bold shadow-sm">
          Trending
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 text-coral mb-3">
          <MapPin className="w-3.5 h-3.5" />
          <span className="text-xs font-bold uppercase tracking-widest">{destination}</span>
        </div>
        
        <h3 className="text-xl font-heading font-bold text-navy mb-4 line-clamp-1 group-hover:text-coral transition-colors">
          {title}
        </h3>

        <div className="flex items-center gap-2 text-slate text-sm mb-6 bg-off-white p-3 rounded-xl">
          <MapIcon className="w-4 h-4 text-navy shrink-0" />
          <span className="line-clamp-1 font-medium">{cities.join(' → ')}</span>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-off-white">
          <div>
            <p className="text-[10px] text-slate uppercase tracking-widest mb-1">From</p>
            <p className="text-xl font-heading font-bold text-navy">
              {formatPrice(price)}
            </p>
          </div>
          <motion.button
            whileHover={{ x: 5 }}
            className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center hover:bg-coral transition-colors shadow-lg shadow-navy/20"
          >
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}
