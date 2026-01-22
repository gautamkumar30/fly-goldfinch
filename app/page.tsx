'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { 
  ArrowRight, 
  ChevronDown, 
  Headphones, 
  Award, 
  Sparkles, 
  Crown,
  MapPin
} from 'lucide-react';

// Components
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { Button } from '@/components/ui/Button';
import { TripCard } from '@/components/cards/TripCard';
import { TestimonialCard } from '@/components/cards/TestimonialCard';
import { FeatureCard } from '@/components/cards/FeatureCard';
import { CertificationMarquee } from '@/components/sections/CertificationMarquee';
import { CTASection } from '@/components/sections/CTASection';

// Data
import { featuredDestinations } from '@/lib/data/destinations';
import { featuredItineraries } from '@/lib/data/itineraries';
import { testimonials } from '@/lib/data/testimonials';
import { formatPrice } from '@/lib/utils';

// Feature data
const features = [
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock assistance throughout your journey. We\'re just a call away, wherever you are in the world.',
  },
  {
    icon: Award,
    title: 'Certified Specialists',
    description: 'Expertise in Australia, New Zealand, South Africa, Switzerland, and more. Official certifications that guarantee quality.',
  },
  {
    icon: Sparkles,
    title: 'Customized Itineraries',
    description: 'No cookie-cutter trips here. Every journey is tailored to your preferences, pace, and travel style.',
  },
  {
    icon: Crown,
    title: 'Premium Experiences',
    description: 'From luxury stays to exclusive tours, we curate experiences that transform travel into lasting memories.',
  },
];

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      <ScrollProgress />
      <Header />

      <main>
        {/* ===== HERO SECTION ===== */}
        <section
          ref={heroRef}
          className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
        >
          {/* Parallax Background */}
          <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
            <Image
              src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1920&q=80"
              alt="Mount Fuji, Japan - Travel Destination"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-hero" />
          </motion.div>

          {/* Hero Content */}
          <motion.div
            style={{ opacity: heroOpacity }}
            className="relative z-10 container-custom text-center"
          >
            {/* Logo Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="mb-8"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-gold-light text-sm font-medium">
                ✈️ Your Gateway to Global Adventures
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-semibold text-white mb-6 max-w-5xl mx-auto leading-tight"
            >
              Explore the World with{' '}
              <span className="text-gradient-gold">Fly Goldfinch</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto"
            >
              Premium travel experiences across 25+ destinations. 
              Custom itineraries crafted by certified specialists.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <Button
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                  className="animate-pulse-glow"
                >
                  Start Your Journey
                </Button>
              </Link>
              <Link href="/destinations">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-navy"
                >
                  Explore Destinations
                </Button>
              </Link>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-8 md:gap-16 mt-16"
            >
              {[
                { value: '25+', label: 'Destinations' },
                { value: '1000+', label: 'Happy Travelers' },
                { value: '5.0★', label: 'Google Rating' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-2xl md:text-3xl font-heading font-bold text-gold mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-white/70">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-white/60"
            >
              <span className="text-xs uppercase tracking-wider">Scroll</span>
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </section>

        {/* ===== FEATURED DESTINATIONS CAROUSEL ===== */}
        <section className="py-16 md:py-24 bg-off-white overflow-hidden">
          <div className="container-custom mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-gold-100 text-gold-600 text-sm font-medium mb-4">
                Featured Destinations
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-charcoal mb-4">
                Discover <span className="text-gold">Breathtaking</span> Places
              </h2>
              <p className="text-slate max-w-2xl mx-auto">
                From the temples of Japan to the safaris of South Africa, 
                explore our handpicked destinations.
              </p>
            </motion.div>
          </div>

          {/* Horizontal Scroll Cards */}
          <div className="relative">
            <div className="flex gap-6 px-4 md:px-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
              {featuredDestinations.map((destination, index) => (
                <motion.div
                  key={destination.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: index * 0.1 }}
                  className="flex-shrink-0 w-[340px] md:w-[400px] snap-center"
                >
                  <Link href={`/destinations#${destination.slug}`}>
                    <article className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer">
                      <Image
                        src={destination.image}
                        alt={destination.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="400px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      
                      {/* Badge */}
                      <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-gold text-navy text-sm font-semibold">
                        {destination.tripCount} Trips
                      </div>

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-center gap-2 text-gold-light mb-2">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm font-medium uppercase tracking-wider">
                            {destination.region.replace('-', ' ')}
                          </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-heading font-semibold text-white mb-2">
                          {destination.name}
                        </h3>
                        <p className="text-white/70 text-sm mb-3 line-clamp-2">
                          {destination.shortDescription}
                        </p>
                        <div className="flex items-center justify-between">
                          <p className="text-white">
                            From <span className="text-gold font-semibold">{formatPrice(destination.priceRange.min)}</span>
                          </p>
                          <motion.span
                            className="text-gold text-sm font-medium flex items-center gap-1"
                            whileHover={{ x: 5 }}
                          >
                            Explore <ArrowRight className="w-4 h-4" />
                          </motion.span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* View All Link */}
          <div className="container-custom mt-8 text-center">
            <Link href="/destinations">
              <Button variant="outline" rightIcon={<ArrowRight className="w-4 h-4" />}>
                View All Destinations
              </Button>
            </Link>
          </div>
        </section>

        {/* ===== TRENDING ITINERARIES ===== */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-gold-100 text-gold-600 text-sm font-medium mb-4">
                Trending Trips
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-charcoal mb-4">
                Popular <span className="text-gradient-gold">Itineraries</span>
              </h2>
              <p className="text-slate max-w-2xl mx-auto">
                Our most loved travel packages, carefully crafted for unforgettable experiences.
              </p>
            </motion.div>

            {/* Trip Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredItineraries.map((itinerary, index) => (
                <TripCard key={itinerary.id} itinerary={itinerary} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* ===== WHY CHOOSE US ===== */}
        <section className="section-padding bg-off-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-gold-100 text-gold-600 text-sm font-medium mb-4">
                Why Fly Goldfinch
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-charcoal mb-4">
                Travel with <span className="text-gradient-gold">Confidence</span>
              </h2>
              <p className="text-slate max-w-2xl mx-auto">
                What sets us apart in crafting your perfect journey.
              </p>
            </motion.div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ===== CERTIFICATIONS MARQUEE ===== */}
        <CertificationMarquee />

        {/* ===== TESTIMONIALS ===== */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-gold-100 text-gold-600 text-sm font-medium mb-4">
                Testimonials
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-charcoal mb-4">
                What Our <span className="text-gradient-gold">Travelers</span> Say
              </h2>
              <p className="text-slate max-w-2xl mx-auto">
                Real stories from our happy adventurers around the world.
              </p>
            </motion.div>

            {/* Testimonial Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  index={index}
                />
              ))}
            </div>

            {/* Google Reviews Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <div className="inline-flex items-center gap-4 px-6 py-4 rounded-full bg-off-white">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-gold fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="font-heading text-xl font-semibold text-charcoal">
                  5.0
                </span>
                <span className="text-slate">
                  Based on 376 Google Reviews
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
