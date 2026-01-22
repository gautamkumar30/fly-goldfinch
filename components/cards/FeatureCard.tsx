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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative bg-white rounded-[32px] p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Icon Container */}
      <div className="relative w-20 h-20 mb-8">
        <div className="absolute inset-0 bg-hero-cream rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300" />
        <div className="absolute inset-0 bg-white rounded-2xl shadow-sm flex items-center justify-center group-hover:shadow-md transition-all duration-300">
          <Icon className="w-10 h-10 text-navy group-hover:text-coral transition-colors duration-300" />
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        <h3 className="text-xl font-heading font-bold text-navy mb-4">
          {title}
        </h3>
        <p className="text-slate text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Decorative Element */}
      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-8 h-8 rounded-full bg-coral/10 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-coral" />
        </div>
      </div>
    </motion.article>
  );
}
