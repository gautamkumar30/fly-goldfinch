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
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Plane className="w-8 h-8 text-gold" />
              <span className="text-2xl font-heading font-semibold">
                Fly <span className="text-gold">Goldfinch</span>
              </span>
            </Link>
            <p className="text-slate-light mb-6 leading-relaxed">
              Your gateway to exclusive global adventures. We craft unforgettable 
              journeys to 25+ destinations across 5 continents.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6 text-gold">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-light hover:text-gold transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6 text-gold">
              Popular Destinations
            </h4>
            <ul className="space-y-3">
              {destinations.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-light hover:text-gold transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6 text-gold">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:info@flygoldfinch.com" 
                  className="flex items-start gap-3 text-slate-light hover:text-gold transition-colors"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>info@flygoldfinch.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+918178638182" 
                  className="flex items-start gap-3 text-slate-light hover:text-gold transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>+91 8178638182</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-slate-light">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Shamshabad, Telangana, India</span>
                </div>
              </li>
            </ul>

            {/* Google Reviews Badge */}
            <div className="mt-6 p-4 bg-white/5 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-gold fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gold font-medium">5.0</span>
              </div>
              <p className="text-sm text-slate-light">
                376 Google Reviews
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Banner */}
      <div className="border-t border-white/10 py-6">
        <div className="container-custom">
          <p className="text-center text-slate-light text-sm mb-4">
            Certified Specialists in
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-light">
            <span>🇦🇺 Australia</span>
            <span>🇳🇿 New Zealand</span>
            <span>🇿🇦 South Africa</span>
            <span>🇨🇭 Switzerland</span>
            <span>🇭🇰 Hong Kong</span>
            <span>🇫🇯 Fiji</span>
            <span>🇲🇾 Malaysia</span>
            <span>🇸🇬 Singapore</span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-light">
            <p>
              © {new Date().getFullYear()} Fly Goldfinch. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-gold transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
