'use client';

import { motion } from 'framer-motion';
import { certifications } from '@/lib/data/certifications';

export function CertificationMarquee() {
  // Double the items for seamless loop
  const items = [...certifications, ...certifications];

  return (
    <section className="py-12 md:py-16 bg-off-white overflow-hidden">
      <div className="container-custom mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-heading font-semibold text-center text-charcoal"
        >
          Certified Travel <span className="text-gradient-gold">Specialists</span>
        </motion.h2>
      </div>

      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-off-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-off-white to-transparent z-10" />

        {/* Marquee Track */}
        <motion.div
          className="flex gap-12 py-4"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear',
            },
          }}
        >
          {items.map((cert, index) => (
            <div
              key={`${cert.id}-${index}`}
              className="flex-shrink-0 flex items-center gap-4 px-6 py-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Certification Icon/Badge */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold-100 to-gold-200 flex items-center justify-center">
                <span className="text-2xl">
                  {cert.country === 'Australia' && '🇦🇺'}
                  {cert.country === 'New Zealand' && '🇳🇿'}
                  {cert.country === 'South Africa' && '🇿🇦'}
                  {cert.country === 'Switzerland' && '🇨🇭'}
                  {cert.country === 'Hong Kong' && '🇭🇰'}
                  {cert.country === 'Fiji' && '🇫🇯'}
                  {cert.country === 'Malaysia' && '🇲🇾'}
                  {cert.country === 'Singapore' && '🇸🇬'}
                </span>
              </div>
              <div>
                <p className="font-semibold text-charcoal whitespace-nowrap">{cert.name}</p>
                <p className="text-sm text-slate whitespace-nowrap">{cert.country}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
