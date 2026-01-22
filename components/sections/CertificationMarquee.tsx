'use client';

import { motion } from 'framer-motion';
import { certifications } from '@/lib/data/certifications';

export function CertificationMarquee() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block text-slate font-medium text-sm uppercase tracking-wider mb-4">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy">
            Certified Travel Specialists
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col items-center group"
            >
              <div className="relative w-20 h-20 mb-4">
                <div className="absolute inset-0 bg-hero-cream rounded-full scale-0 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-white rounded-full border border-off-white shadow-sm flex items-center justify-center group-hover:border-coral transition-colors duration-300 overflow-hidden">
                  <span className="text-3xl">
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
              </div>
              <p className="text-xs font-bold text-navy text-center uppercase tracking-widest group-hover:text-coral transition-colors">
                {cert.country}
              </p>
              <p className="text-[10px] text-slate text-center mt-1">
                Certified Expert
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
