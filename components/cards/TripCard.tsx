'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, MapPin, Check, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Itinerary } from '@/lib/data/itineraries';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

interface TripCardProps {
  itinerary: Itinerary;
  index?: number;
  variant?: 'default' | 'horizontal';
}

export function TripCard({ itinerary, index = 0, variant = 'default' }: TripCardProps) {
  const { title, destination, duration, price, image, highlights, cities } = itinerary;

  if (variant === 'horizontal') {
    return (
      <motion.article
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
      >
        {/* Image */}
        <div className="relative w-full md:w-80 aspect-[16/10] md:aspect-auto overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 320px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
        </div>

        {/* Content */}
        <div className="flex-1 p-6">
          <div className="flex items-center gap-2 text-gold mb-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">{destination}</span>
          </div>
          <h3 className="text-xl font-heading font-semibold text-charcoal mb-3">
            {title}
          </h3>
          <div className="flex items-center gap-4 text-slate text-sm mb-4">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {duration.nights}N/{duration.days}D
            </span>
            <span>{cities.slice(0, 3).join(' • ')}</span>
          </div>
          <ul className="space-y-1 mb-4">
            {highlights.slice(0, 3).map((highlight, idx) => (
              <li key={idx} className="flex items-center gap-2 text-sm text-slate-dark">
                <Check className="w-4 h-4 text-gold flex-shrink-0" />
                {highlight}
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate">Starting from</p>
              <p className="text-2xl font-heading font-semibold text-gold">
                {formatPrice(price)}
              </p>
            </div>
            <Button variant="primary" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Explore
            </Button>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-card" />

        {/* Duration Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-navy text-sm font-semibold">
          <Clock className="w-4 h-4" />
          {duration.nights}N/{duration.days}D
        </div>

        {/* Destination Badge */}
        <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-gold text-navy text-sm font-semibold">
          {destination}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-heading font-semibold text-charcoal mb-2 line-clamp-2">
          {title}
        </h3>

        {/* Cities */}
        <div className="flex items-center gap-2 text-slate text-sm mb-4">
          <MapPin className="w-4 h-4 text-gold" />
          <span className="line-clamp-1">{cities.join(' → ')}</span>
        </div>

        {/* Highlights */}
        <ul className="space-y-1.5 mb-4">
          {highlights.slice(0, 3).map((highlight, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-slate-dark">
              <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
              <span className="line-clamp-1">{highlight}</span>
            </li>
          ))}
        </ul>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <p className="text-xs text-slate uppercase tracking-wider">Starting from</p>
            <p className="text-xl font-heading font-semibold text-gold">
              {formatPrice(price)}
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05, x: 3 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-1 text-navy font-medium hover:text-gold transition-colors"
          >
            Explore
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}
