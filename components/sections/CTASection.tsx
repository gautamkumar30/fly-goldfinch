'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Plane } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
}

export function CTASection({
  title = "Ready to Start Your Journey?",
  subtitle = "Let us craft your perfect adventure. From dreaming to doing, we're with you every step of the way.",
  buttonText = "Plan Your Trip",
  buttonLink = "/contact",
}: CTASectionProps) {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-hero-cream rounded-[40px] md:rounded-[60px] p-8 md:p-20 overflow-hidden text-center"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="80" stroke="#1a365d" strokeWidth="2" strokeDasharray="10 10" />
              <path d="M40 100H160M100 40V160" stroke="#1a365d" strokeWidth="2" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 p-12 opacity-10 pointer-events-none">
            <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
              <rect x="20" y="20" width="110" height="110" rx="20" stroke="#1a365d" strokeWidth="2" strokeDasharray="5 5" />
              <circle cx="75" cy="75" r="30" fill="#1a365d" />
            </svg>
          </div>

          {/* Floating Plane Decoration */}
          <motion.div
            animate={{ 
              x: [0, 20, 0],
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-12 left-12 hidden lg:block text-coral opacity-20"
          >
            <Plane size={60} />
          </motion.div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-coral font-bold text-sm uppercase tracking-[0.3em] mb-6"
            >
              Get Started
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-navy mb-8 leading-tight"
            >
              {title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate mb-12 leading-relaxed"
            >
              {subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link href={buttonLink}>
                <Button
                  variant="primary"
                  size="xl"
                  className="bg-navy hover:bg-coral text-white px-10 py-5 rounded-full text-lg font-bold shadow-2xl shadow-navy/20 transition-all duration-300"
                >
                  {buttonText}
                </Button>
              </Link>
              <Link href="/destinations" className="text-navy font-bold hover:text-coral transition-colors flex items-center gap-2 group">
                Explore Destinations
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
