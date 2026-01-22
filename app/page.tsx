'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { 
  ArrowRight, 
  ChevronDown,
  ChevronUp,
  Headphones, 
  Award, 
  Sparkles, 
  Crown,
  MapPin,
  Map,
  CreditCard,
  Plane,
  Leaf,
  Send,
  Heart,
  Car
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
          className="relative min-h-screen flex items-center overflow-hidden bg-white"
        >
          {/* Cream Background Accent - Right Side */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-hero-cream hidden lg:block" />
          
          {/* Floating Airplane Decorations */}
          <motion.div 
            className="absolute top-32 right-[35%] z-20 hidden lg:block"
            animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-sky-400">
              <path d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2C10.67 2 10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z" fill="currentColor"/>
            </svg>
          </motion.div>
          
          <motion.div 
            className="absolute top-48 right-[15%] z-20 hidden lg:block"
            animate={{ y: [0, 8, 0], rotate: [0, -3, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-sky-400">
              <path d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2C10.67 2 10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z" fill="currentColor"/>
            </svg>
          </motion.div>

          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen py-24 lg:py-0">
              
              {/* Left Content */}
              <motion.div
                style={{ opacity: heroOpacity }}
                className="max-w-xl"
              >
                {/* Tagline */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="inline-block text-coral font-semibold text-sm tracking-[0.2em] uppercase mb-6">
                    Best Destinations Around The World
                  </span>
                </motion.div>

                {/* Headline with Decorative Underline */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-navy leading-[1.15] mb-6"
                >
                  Travel,{' '}
                  <span className="relative inline-block">
                    enjoy
                    {/* Hand-drawn underline effect */}
                    <svg 
                      className="absolute -bottom-2 left-0 w-full" 
                      viewBox="0 0 120 12" 
                      fill="none" 
                      preserveAspectRatio="none"
                    >
                      <path 
                        d="M2 8C20 4 40 6 60 5C80 4 100 6 118 3" 
                        stroke="#FF6B6B" 
                        strokeWidth="3" 
                        strokeLinecap="round"
                        className="animate-draw-line"
                      />
                      <path 
                        d="M5 10C25 7 45 9 65 8C85 7 105 9 115 6" 
                        stroke="#FF6B6B" 
                        strokeWidth="2" 
                        strokeLinecap="round"
                        strokeOpacity="0.6"
                        className="animate-draw-line delay-200"
                      />
                    </svg>
                  </span>
                  {' '}and live a new and full life
                </motion.h1>

                {/* Body Text */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-slate text-lg leading-relaxed mb-10 max-w-md"
                >
                  Built Wicket longer admire do barton vanity itself do in it. 
                  Preferred to sportsmen it engrossed listening. Park gate 
                  sell they west hard for the.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.45 }}
                  className="flex flex-wrap items-center gap-6"
                >
                  <Link href="/contact">
                    <Button
                      variant="primary"
                      size="lg"
                      className="bg-coral hover:bg-coral-dark text-white px-8 py-4 rounded-xl shadow-coral"
                    >
                      Find out more
                    </Button>
                  </Link>
                  
                  <button className="group flex items-center gap-3 text-charcoal hover:text-coral transition-colors">
                    <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-coral shadow-coral group-hover:scale-110 transition-transform">
                      <svg width="16" height="18" viewBox="0 0 16 18" fill="none" className="ml-1">
                        <path d="M15 7.268a2 2 0 010 3.464L3 17.856A2 2 0 010 16.124V1.876A2 2 0 013 .144L15 7.268z" fill="white"/>
                      </svg>
                    </span>
                    <span className="font-medium">Play Demo</span>
                  </button>
                </motion.div>
              </motion.div>

              {/* Right Side - Hero Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative flex items-center justify-center lg:justify-end"
              >
                <div className="relative">
                  {/* Main Hero Image - Placeholder */}
                  <div className="relative w-[300px] h-[400px] sm:w-[400px] sm:h-[520px] lg:w-[480px] lg:h-[600px]">
                    <Image
                      src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=800&q=80"
                      alt="Happy traveler with backpack"
                      fill
                      className="object-cover object-center"
                      priority
                      sizes="(max-width: 768px) 300px, (max-width: 1024px) 400px, 480px"
                      style={{ 
                        objectPosition: 'center top',
                        borderRadius: '0',
                        background: 'transparent'
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

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
              className="flex flex-col items-center gap-2 text-slate"
            >
              <span className="text-xs uppercase tracking-wider">Scroll</span>
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </section>

        {/* ===== SERVICES/CATEGORY SECTION ===== */}
        <section className="section-padding bg-off-white relative overflow-hidden">
          {/* Decorative Plus Pattern */}
          <div className="absolute right-8 top-12 hidden lg:block">
            <div className="grid grid-cols-6 gap-3">
              {[...Array(24)].map((_, i) => (
                <span 
                  key={i} 
                  className={`text-lg ${i === 5 ? 'text-coral' : 'text-slate-light/40'}`}
                >
                  +
                </span>
              ))}
            </div>
          </div>

          <div className="container-custom">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block text-coral font-semibold text-sm tracking-[0.2em] uppercase mb-4">
                Category
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy">
                We Offer Best Services
              </h2>
            </motion.div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {/* Calculated Weather */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-hero-cream mb-6 group-hover:scale-110 transition-transform">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-coral">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-lg font-heading font-semibold text-navy mb-3">
                  Calculated Weather
                </h3>
                <p className="text-slate text-sm leading-relaxed max-w-[200px] mx-auto">
                  Built Wicket longer admire do barton vanity itself do in it.
                </p>
              </motion.div>

              {/* Best Flights - Highlighted */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center group relative"
              >
                {/* Highlight Card Background */}
                <div className="absolute inset-0 -inset-x-4 -inset-y-6 bg-white rounded-2xl shadow-xl -z-10" />
                {/* Decorative Coral Shape */}
                <div className="absolute -bottom-6 left-0 w-16 h-16 bg-coral rounded-tr-3xl -z-10" />
                
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-hero-cream mb-6 group-hover:scale-110 transition-transform">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-sky-500">
                    <path d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2C10.67 2 10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="text-lg font-heading font-semibold text-navy mb-3">
                  Best Flights
                </h3>
                <p className="text-slate text-sm leading-relaxed max-w-[200px] mx-auto">
                  Engrossed listening. Park gate sell they west hard for the.
                </p>
              </motion.div>

              {/* Local Events */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-hero-cream mb-6 group-hover:scale-110 transition-transform">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-slate-dark">
                    <path d="M12 1C11.4696 1 10.9609 1.21071 10.5858 1.58579C10.2107 1.96086 10 2.46957 10 3V11.5L4 15V17L10 14.5V19L8 20V21.5L12 20L16 21.5V20L14 19V14.5L20 17V15L14 11.5V3C14 2.46957 13.7893 1.96086 13.4142 1.58579C13.0391 1.21071 12.5304 1 12 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="7" r="3" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M12 10V14" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <h3 className="text-lg font-heading font-semibold text-navy mb-3">
                  Local Events
                </h3>
                <p className="text-slate text-sm leading-relaxed max-w-[200px] mx-auto">
                  Barton vanity itself do in it. Preferd to men it engrossed listening.
                </p>
              </motion.div>

              {/* Customization */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-hero-cream mb-6 group-hover:scale-110 transition-transform">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-slate-dark">
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                    <path d="M19.4 15C19.7 14.4 19.9 13.7 20 13H22V11H20C19.9 10.3 19.7 9.6 19.4 9L21 7.6L19.6 6.2L18.2 7.8C17.6 7.4 16.9 7.1 16.2 7V5H13.8V7C13.1 7.1 12.4 7.4 11.8 7.8L10.4 6.2L9 7.6L10.6 9C10.3 9.6 10.1 10.3 10 11H8V13H10C10.1 13.7 10.3 14.4 10.6 15L9 16.4L10.4 17.8L11.8 16.2C12.4 16.6 13.1 16.9 13.8 17V19H16.2V17C16.9 16.9 17.6 16.6 18.2 16.2L19.6 17.8L21 16.4L19.4 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-lg font-heading font-semibold text-navy mb-3">
                  Customization
                </h3>
                <p className="text-slate text-sm leading-relaxed max-w-[200px] mx-auto">
                  We deliver outsourced aviation services for military customers
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== TOP DESTINATIONS SECTION ===== */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          {/* Decorative Squiggly Lines */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block opacity-20">
            <svg width="100" height="200" viewBox="0 0 100 200" fill="none">
              <path d="M10 20C30 40 10 60 30 80C50 100 30 120 50 140C70 160 50 180 70 200" stroke="#1a365d" strokeWidth="2" strokeLinecap="round"/>
              <path d="M30 20C50 40 30 60 50 80C70 100 50 120 70 140C90 160 70 180 90 200" stroke="#1a365d" strokeWidth="2" strokeLinecap="round"/>
              <path d="M50 20C70 40 50 60 70 80C90 100 70 120 90 140C110 160 90 180 110 200" stroke="#1a365d" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>

          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block text-slate font-medium text-sm uppercase tracking-wider mb-4">
                Top Selling
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy">
                Top Destinations
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {[
                {
                  name: 'Rome, Italy',
                  price: '$5,42k',
                  duration: '10 Days Trip',
                  image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80'
                },
                {
                  name: 'London, UK',
                  price: '$4.2k',
                  duration: '12 Days Trip',
                  image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80'
                },
                {
                  name: 'Full Europe',
                  price: '$15k',
                  duration: '28 Days Trip',
                  image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80'
                }
              ].map((dest, index) => (
                <motion.div
                  key={dest.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-[24px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="relative aspect-4/5">
                      <Image
                        src={dest.image}
                        alt={dest.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-medium text-slate-dark">{dest.name}</h3>
                        <span className="text-lg font-medium text-slate-dark">{dest.price}</span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-dark">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="transform rotate-45">
                          <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" fill="currentColor"/>
                        </svg>
                        <span className="text-sm font-medium">{dest.duration}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== BOOKING STEPS SECTION ===== */}
        <section className="section-padding bg-white overflow-hidden">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Content - Steps */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block text-slate font-medium text-sm uppercase tracking-wider mb-4">
                  Easy and Fast
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy mb-12 max-w-md">
                  Book Your Next Trip In 3 Easy Steps
                </h2>

                <div className="space-y-8">
                  {[
                    {
                      title: 'Choose Destination',
                      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
                      icon: Map,
                      color: 'bg-yellow-400'
                    },
                    {
                      title: 'Make Payment',
                      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
                      icon: CreditCard,
                      color: 'bg-coral'
                    },
                    {
                      title: 'Reach Airport on Selected Date',
                      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
                      icon: Car,
                      color: 'bg-teal-600'
                    }
                  ].map((step, index) => (
                    <div key={index} className="flex gap-6">
                      <div className={`shrink-0 w-12 h-12 rounded-xl ${step.color} flex items-center justify-center text-white shadow-lg`}>
                        <step.icon size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-dark mb-1">{step.title}</h3>
                        <p className="text-slate text-sm max-w-xs">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right Content - Visual Cards */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-sky-400/10 blur-[100px] rounded-full -z-10" />

                {/* Main Card */}
                <div className="bg-white rounded-[24px] p-6 shadow-2xl max-w-[370px] mx-auto lg:ml-auto relative">
                  <div className="relative aspect-[1.5/1] rounded-[20px] overflow-hidden mb-6">
                    <Image
                      src="https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80"
                      alt="Trip to Greece"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-charcoal mb-2">Trip To Greece</h3>
                  <p className="text-slate text-sm mb-4">14-29 June | by Robbin joseph</p>
                  
                  <div className="flex gap-4 mb-6">
                    {[Leaf, Map, Send].map((Icon, i) => (
                      <div key={i} className="w-9 h-9 rounded-full bg-off-white flex items-center justify-center text-slate hover:bg-sky-100 hover:text-sky-600 transition-colors cursor-pointer">
                        <Icon size={18} />
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate">
                      <MapPin size={18} />
                      <span className="text-sm">24 people going</span>
                    </div>
                    <button className="text-slate hover:text-coral transition-colors">
                      <Heart size={20} />
                    </button>
                  </div>

                  {/* Overlapping Ongoing Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: 50 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="absolute -right-4 lg:-right-12 bottom-12 bg-white rounded-2xl p-4 shadow-xl flex gap-4 min-w-[250px]"
                  >
                    <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                      <Image
                        src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=100&q=80"
                        alt="Rome"
                        width={48}
                        height={48}
                        className="object-cover h-full"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] text-slate uppercase tracking-wider mb-1">Ongoing</p>
                      <h4 className="text-sm font-bold text-charcoal mb-2">Trip to rome</h4>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium text-navy">40%</span>
                        <span className="text-[10px] text-slate">completed</span>
                      </div>
                      <div className="w-full h-1.5 bg-off-white rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '40%' }}
                          viewport={{ once: true }}
                          transition={{ delay: 1, duration: 1 }}
                          className="h-full bg-navy rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

            </div>
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

        {/* ===== TESTIMONIALS SECTION ===== */}
        <section className="section-padding bg-white overflow-hidden">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block text-slate font-medium text-sm uppercase tracking-wider mb-4">
                  Testimonials
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy mb-12 max-w-md">
                  What People Say About Us.
                </h2>

                {/* Pagination Dots */}
                <div className="flex gap-4">
                  <div className="w-3 h-3 rounded-full bg-navy" />
                  <div className="w-3 h-3 rounded-full bg-off-white border border-slate-light" />
                  <div className="w-3 h-3 rounded-full bg-off-white border border-slate-light" />
                </div>
              </motion.div>

              {/* Right Content - Stacked Cards */}
              <div className="relative flex items-center gap-8">
                <div className="relative flex-1">
                  {/* Top Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-[24px] p-8 shadow-2xl relative z-20 max-w-[500px]"
                  >
                    {/* Avatar */}
                    <div className="absolute -top-8 -left-8 w-16 h-16 rounded-full border-4 border-white shadow-lg overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
                        alt="Mike Taylor"
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    
                    <p className="text-slate text-sm leading-relaxed mb-8">
                      "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."
                    </p>
                    
                    <div>
                      <h4 className="text-lg font-bold text-charcoal">Mike taylor</h4>
                      <p className="text-xs text-slate">Lahore, Pakistan</p>
                    </div>
                  </motion.div>

                  {/* Bottom Card (Visual Only) */}
                  <div className="absolute top-12 left-12 right-[-48px] bottom-[-48px] bg-white rounded-[24px] p-8 border border-off-white shadow-sm -z-10 flex flex-col justify-end opacity-40">
                    <div>
                      <h4 className="text-lg font-bold text-charcoal">Chris Thomas</h4>
                      <p className="text-xs text-slate">CEO of Red Button</p>
                    </div>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex flex-col gap-8">
                  <button className="text-slate hover:text-navy transition-colors">
                    <ChevronUp size={24} />
                  </button>
                  <button className="text-slate hover:text-navy transition-colors">
                    <ChevronDown size={24} />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===== PARTNER LOGOS SECTION ===== */}
        <section className="py-12 bg-white">
          <div className="container-custom">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 lg:gap-24">
              {[
                { name: 'Axon Airlines', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Axon_Airlines_logo.svg/2560px-Axon_Airlines_logo.svg.png' },
                { name: 'Jetstar', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Jetstar_logo.svg/2560px-Jetstar_logo.svg.png' },
                { name: 'Expedia', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Expedia_Logo_2023.svg/2560px-Expedia_Logo_2023.svg.png', active: true },
                { name: 'Qantas', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Qantas_logo_2016.svg/2560px-Qantas_logo_2016.svg.png' },
                { name: 'Alitalia', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Alitalia_logo.svg/2560px-Alitalia_logo.svg.png' }
              ].map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center justify-center ${partner.active ? 'bg-white p-6 rounded-2xl shadow-xl' : 'grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300'}`}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-8 md:h-10 w-auto object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
