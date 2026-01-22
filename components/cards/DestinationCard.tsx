'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Destination } from '@/lib/data/destinations';
import { formatPrice } from '@/lib/utils';

interface DestinationCardProps {
  destination: Destination;
  index?: number;
  onClick?: () => void;
  variant?: 'default' | 'featured' | 'compact';
}

export function DestinationCard({ 
  destination, 
  index = 0, 
  onClick,
  variant = 'default' 
}: DestinationCardProps) {
  const { name, shortDescription, image, tripCount, priceRange } = destination;

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onClick={onClick}
      className={cn(
        'group relative rounded-2xl overflow-hidden cursor-pointer',
        'bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300',
        variant === 'featured' && 'md:col-span-2 md:row-span-2',
        variant === 'compact' && 'aspect-[4/3]'
      )}
    >
      {/* Image Container */}
      <div className={cn(
        'relative overflow-hidden',
        variant === 'default' && 'aspect-[4/5]',
        variant === 'featured' && 'aspect-[16/10] md:aspect-[16/9]',
        variant === 'compact' && 'aspect-[4/3]'
      )}>
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Trip Count Badge */}
        <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-gold text-navy text-sm font-semibold">
          {tripCount} {tripCount === 1 ? 'Trip' : 'Trips'}
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="flex items-center gap-2 text-gold-light mb-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">
              {destination.region.replace('-', ' ')}
            </span>
          </div>
          
          <h3 className={cn(
            'font-heading font-semibold text-white mb-2',
            variant === 'featured' ? 'text-3xl md:text-4xl' : 'text-2xl'
          )}>
            {name}
          </h3>

          {/* Description - shows on hover */}
          <motion.p 
            initial={{ opacity: 0, height: 0 }}
            whileHover={{ opacity: 1, height: 'auto' }}
            className="text-white/80 text-sm mb-3 line-clamp-2 overflow-hidden"
          >
            {shortDescription}
          </motion.p>

          {/* Price Range */}
          <div className="flex items-center justify-between">
            <p className="text-white/90 text-sm">
              From{' '}
              <span className="text-gold font-semibold">
                {formatPrice(priceRange.min)}
              </span>
            </p>

            {/* Explore indicator */}
            <motion.div
              className="flex items-center gap-1 text-gold text-sm font-medium"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
            >
              Explore
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
