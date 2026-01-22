'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check,
  ChevronDown,
  Star,
  Users,
  Calendar,
  Wallet,
  MessageSquare,
  Loader2
} from 'lucide-react';

// Components
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { Button } from '@/components/ui/Button';
import { TripCard } from '@/components/cards/TripCard';

// Data
import { featuredDestinations, destinations } from '@/lib/data/destinations';
import { featuredItineraries } from '@/lib/data/itineraries';
import { cn } from '@/lib/utils';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  adults: string;
  children: string;
  destination: string;
  travelDate: string;
  budget: string;
  message: string;
}

const faqs = [
  {
    question: 'How do I book a trip with Fly Goldfinch?',
    answer: 'Simply fill out our contact form or give us a call. Our travel specialists will understand your requirements and create a customized itinerary just for you.',
  },
  {
    question: 'Can you customize the itineraries?',
    answer: 'Absolutely! All our itineraries are fully customizable. We work closely with you to understand your preferences, pace, and interests to create your perfect trip.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept bank transfers, credit/debit cards, and UPI payments. A 30% deposit is required to confirm your booking, with the balance due 30 days before departure.',
  },
  {
    question: 'Is travel insurance included?',
    answer: 'Travel insurance is not included in our packages but we highly recommend it. We can help you arrange comprehensive travel insurance as an add-on.',
  },
  {
    question: 'What if I need to cancel or modify my trip?',
    answer: 'We understand plans can change. Our cancellation policy varies by destination and hotel policies. Contact us for specific terms for your booking.',
  },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('Form submitted:', data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

  return (
    <>
      <ScrollProgress />
      <Header />

      <main>
        {/* ===== HERO SECTION ===== */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-secondary to-navy z-0" />
          
          {/* Decorative Elements */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-20 left-10 w-20 h-20 rounded-full bg-gold/10"
          />
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-coral/10"
          />
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-gold/5"
          />

          {/* Content */}
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              {/* Breadcrumb */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center gap-2 text-white/60 text-sm mb-6"
              >
                <Link href="/" className="hover:text-gold transition-colors">Home</Link>
                <span>/</span>
                <span className="text-gold">Contact</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-white mb-6">
                Let's Plan Your <span className="text-gradient-gold">Dream Journey</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80">
                Tell us about your travel dreams and our specialists will craft the perfect itinerary for you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ===== CONTACT FORM & INFO ===== */}
        <section className="section-padding bg-off-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg p-6 md:p-10"
                >
                  <h2 className="text-2xl md:text-3xl font-heading font-semibold text-charcoal mb-2">
                    Get a Free Quote
                  </h2>
                  <p className="text-slate mb-8">
                    Fill in your details and we'll get back to you within 24 hours.
                  </p>

                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-16"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', delay: 0.2 }}
                          className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6"
                        >
                          <Check className="w-10 h-10 text-green-600" />
                        </motion.div>
                        <h3 className="text-2xl font-heading font-semibold text-charcoal mb-3">
                          Thank You!
                        </h3>
                        <p className="text-slate mb-6">
                          Your inquiry has been received. Our travel specialist will contact you within 24 hours.
                        </p>
                        <Button onClick={() => setIsSubmitted(false)} variant="outline">
                          Submit Another Inquiry
                        </Button>
                      </motion.div>
                    ) : (
                      <motion.form
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-6"
                      >
                        {/* Name Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-charcoal mb-2">
                              First Name *
                            </label>
                            <input
                              type="text"
                              {...register('firstName', { required: 'First name is required' })}
                              className={cn(
                                'w-full px-4 py-3 rounded-lg border transition-colors outline-none',
                                errors.firstName
                                  ? 'border-red-500 focus:border-red-500'
                                  : 'border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20'
                              )}
                              placeholder="John"
                            />
                            {errors.firstName && (
                              <p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>
                            )}
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-charcoal mb-2">
                              Last Name *
                            </label>
                            <input
                              type="text"
                              {...register('lastName', { required: 'Last name is required' })}
                              className={cn(
                                'w-full px-4 py-3 rounded-lg border transition-colors outline-none',
                                errors.lastName
                                  ? 'border-red-500 focus:border-red-500'
                                  : 'border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20'
                              )}
                              placeholder="Doe"
                            />
                            {errors.lastName && (
                              <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>
                            )}
                          </div>
                        </div>

                        {/* Contact Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-charcoal mb-2">
                              Email *
                            </label>
                            <input
                              type="email"
                              {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                  message: 'Invalid email address',
                                },
                              })}
                              className={cn(
                                'w-full px-4 py-3 rounded-lg border transition-colors outline-none',
                                errors.email
                                  ? 'border-red-500 focus:border-red-500'
                                  : 'border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20'
                              )}
                              placeholder="john@example.com"
                            />
                            {errors.email && (
                              <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                            )}
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-charcoal mb-2">
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              {...register('phone', {
                                required: 'Phone number is required',
                                pattern: {
                                  value: /^[0-9]{10}$/,
                                  message: 'Enter a valid 10-digit phone number',
                                },
                              })}
                              className={cn(
                                'w-full px-4 py-3 rounded-lg border transition-colors outline-none',
                                errors.phone
                                  ? 'border-red-500 focus:border-red-500'
                                  : 'border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20'
                              )}
                              placeholder="9876543210"
                            />
                            {errors.phone && (
                              <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                            )}
                          </div>
                        </div>

                        {/* Travel Details Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-charcoal mb-2">
                              <Users className="w-4 h-4 inline mr-1" />
                              Adults
                            </label>
                            <select
                              {...register('adults')}
                              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-colors bg-white"
                            >
                              {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map((num) => (
                                <option key={num} value={num}>{num}</option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-charcoal mb-2">
                              <Users className="w-4 h-4 inline mr-1" />
                              Children
                            </label>
                            <select
                              {...register('children')}
                              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-colors bg-white"
                            >
                              {[0, 1, 2, 3, 4, 5, 6, '7+'].map((num) => (
                                <option key={num} value={num}>{num}</option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-charcoal mb-2">
                              <Calendar className="w-4 h-4 inline mr-1" />
                              Travel Date
                            </label>
                            <input
                              type="date"
                              {...register('travelDate')}
                              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-colors"
                            />
                          </div>
                        </div>

                        {/* Destination & Budget Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-charcoal mb-2">
                              <MapPin className="w-4 h-4 inline mr-1" />
                              Preferred Destination
                            </label>
                            <select
                              {...register('destination')}
                              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-colors bg-white"
                            >
                              <option value="">Select a destination</option>
                              {destinations.map((dest) => (
                                <option key={dest.id} value={dest.name}>{dest.name}</option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-charcoal mb-2">
                              <Wallet className="w-4 h-4 inline mr-1" />
                              Budget Range (per person)
                            </label>
                            <select
                              {...register('budget')}
                              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-colors bg-white"
                            >
                              <option value="">Select budget range</option>
                              <option value="50000-100000">₹50,000 - ₹1,00,000</option>
                              <option value="100000-150000">₹1,00,000 - ₹1,50,000</option>
                              <option value="150000-200000">₹1,50,000 - ₹2,00,000</option>
                              <option value="200000-300000">₹2,00,000 - ₹3,00,000</option>
                              <option value="300000+">₹3,00,000+</option>
                            </select>
                          </div>
                        </div>

                        {/* Message */}
                        <div>
                          <label className="block text-sm font-medium text-charcoal mb-2">
                            <MessageSquare className="w-4 h-4 inline mr-1" />
                            Message / Special Requests
                          </label>
                          <textarea
                            {...register('message')}
                            rows={4}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-colors resize-none"
                            placeholder="Tell us about your travel preferences, special occasions, dietary requirements, etc."
                          />
                        </div>

                        {/* Submit Button */}
                        <Button
                          type="submit"
                          variant="primary"
                          size="lg"
                          fullWidth
                          isLoading={isSubmitting}
                          rightIcon={!isSubmitting && <Send className="w-5 h-5" />}
                        >
                          {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                        </Button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>

              {/* Contact Info Sidebar */}
              <div className="space-y-6">
                {/* Contact Card */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg p-6"
                >
                  <h3 className="text-xl font-heading font-semibold text-charcoal mb-6">
                    Contact Information
                  </h3>
                  <ul className="space-y-5">
                    <li>
                      <a
                        href="mailto:info@flygoldfinch.com"
                        className="flex items-start gap-4 group"
                      >
                        <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors">
                          <Mail className="w-5 h-5 text-gold group-hover:text-navy transition-colors" />
                        </div>
                        <div>
                          <p className="text-sm text-slate mb-1">Email Us</p>
                          <p className="font-medium text-charcoal group-hover:text-gold transition-colors">
                            info@flygoldfinch.com
                          </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel:+918178638182"
                        className="flex items-start gap-4 group"
                      >
                        <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors">
                          <Phone className="w-5 h-5 text-gold group-hover:text-navy transition-colors" />
                        </div>
                        <div>
                          <p className="text-sm text-slate mb-1">Call Us</p>
                          <p className="font-medium text-charcoal group-hover:text-gold transition-colors">
                            +91 8178638182
                          </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-gold" />
                        </div>
                        <div>
                          <p className="text-sm text-slate mb-1">Visit Us</p>
                          <p className="font-medium text-charcoal">
                            Shamshabad, Telangana, India
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </motion.div>

                {/* Social Proof */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-gradient-to-br from-navy to-navy-secondary rounded-2xl shadow-lg p-6 text-white"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                      ))}
                    </div>
                    <span className="font-semibold">5.0</span>
                  </div>
                  <p className="text-2xl font-heading font-bold mb-1">376</p>
                  <p className="text-white/70 text-sm mb-4">Google Reviews</p>
                  
                  <div className="border-t border-white/20 pt-4">
                    <p className="text-white/70 text-sm mb-1">Join our community of</p>
                    <p className="text-xl font-heading font-bold text-gold">1000+ Happy Travelers</p>
                  </div>
                </motion.div>

                {/* Quick Links */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-2xl shadow-lg p-6"
                >
                  <h3 className="text-lg font-heading font-semibold text-charcoal mb-4">
                    Popular Destinations
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {featuredDestinations.slice(0, 4).map((dest) => (
                      <Link
                        key={dest.id}
                        href={`/destinations#${dest.slug}`}
                        className="relative rounded-lg overflow-hidden aspect-square group"
                      >
                        <Image
                          src={dest.image}
                          alt={dest.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                          sizes="100px"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                        <span className="absolute bottom-2 left-2 text-white text-sm font-medium">
                          {dest.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== TRENDING PACKAGES ===== */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-charcoal mb-4">
                Trending <span className="text-gradient-gold">Packages</span>
              </h2>
              <p className="text-slate">
                Need inspiration? Check out our most popular trips.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredItineraries.slice(0, 3).map((itinerary, index) => (
                <TripCard key={itinerary.id} itinerary={itinerary} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* ===== FAQ SECTION ===== */}
        <section className="section-padding bg-off-white">
          <div className="container-custom max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-charcoal mb-4">
                Frequently Asked <span className="text-gradient-gold">Questions</span>
              </h2>
              <p className="text-slate">
                Everything you need to know about booking with us.
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-medium text-charcoal pr-4">{faq.question}</span>
                    <motion.span
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-gold" />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-slate">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
