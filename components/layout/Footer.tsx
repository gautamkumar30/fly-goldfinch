'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Plane, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter,
  Linkedin,
  Youtube
} from 'lucide-react';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/destinations', label: 'Destinations' },
  { href: '/contact', label: 'Contact' },
];

const destinations = [
  { href: '/destinations#japan', label: 'Japan' },
  { href: '/destinations#switzerland', label: 'Switzerland' },
  { href: '/destinations#vietnam', label: 'Vietnam' },
  { href: '/destinations#south-africa', label: 'South Africa' },
  { href: '/destinations#australia', label: 'Australia' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none">
        <Plane size={300} className="rotate-12" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-coral flex items-center justify-center shadow-lg shadow-coral/20">
                <Plane className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-heading font-bold tracking-tight">
                Fly Goldfinch
              </span>
            </Link>
            <p className="text-slate-light leading-relaxed max-w-xs">
              Book your next trip in 3 easy steps with our premium travel services. 
              We craft unforgettable journeys across 5 continents.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ y: -5, color: '#FF7D6B' }}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 border border-white/10"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-8 text-white">
              <span className='text-white/80'>Company</span>
            </h4>
            <ul className="space-y-4">
              {['About', 'Careers', 'Mobile'].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-slate-light hover:text-coral transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-8 text-white">
              <span className='text-white/80'>Contact</span>
            </h4>
            <ul className="space-y-4">
              {['Help/FAQ', 'Press', 'Affilates'].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-slate-light hover:text-coral transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-8 text-white">
              <span className='text-white/80'>More</span>
            </h4>
            <ul className="space-y-4">
              {['Airlinefees', 'Airline', 'Low fare tips'].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-slate-light hover:text-coral transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-slate-light text-sm">
            All rights reserved@flygoldfinch.com
          </p>
          <div className="flex gap-8 text-sm text-slate-light">
            <Link href="#" className="hover:text-coral transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-coral transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
