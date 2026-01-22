'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

export function FeatureCard({ icon: Icon, title, description, index = 0 }: FeatureCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -5 }}
      className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-gold-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="relative w-16 h-16 rounded-xl bg-linear-to-br from-gold to-gold-dark flex items-center justify-center mb-5 shadow-gold"
      >
        <Icon className="w-8 h-8 text-navy" />
      </motion.div>

      {/* Content */}
      <div className="relative">
        <h3 className="text-xl font-heading font-semibold text-charcoal mb-3">
          {title}
        </h3>
        <p className="text-slate-dark leading-relaxed">
          {description}
        </p>
      </div>

      {/* Decorative Corner */}
      <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gold/10 rounded-full transform translate-x-1/2 translate-y-1/2" />
    </motion.article>
  );
}
