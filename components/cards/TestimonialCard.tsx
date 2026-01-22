'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Testimonial } from '@/lib/data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

export function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  const { name, location, rating, text, trip, date } = testimonial;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      {/* Quote Icon */}
      <div className="absolute -top-4 left-6 w-10 h-10 rounded-full bg-gold flex items-center justify-center">
        <Quote className="w-5 h-5 text-navy" />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4 pt-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              'w-5 h-5',
              i < rating ? 'text-gold fill-gold' : 'text-gray-300'
            )}
          />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-slate-dark leading-relaxed mb-6 text-base md:text-lg">
        &ldquo;{text}&rdquo;
      </p>

      {/* Author Info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
            <span className="text-navy font-semibold text-lg">
              {name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div>
            <p className="font-semibold text-charcoal">{name}</p>
            <p className="text-sm text-slate">{location}</p>
          </div>
        </div>

        {/* Trip & Date */}
        <div className="text-right">
          <p className="text-sm font-medium text-navy">{trip}</p>
          <p className="text-xs text-slate">{date}</p>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-gold-100/50 to-transparent rounded-br-2xl" />
    </motion.article>
  );
}
