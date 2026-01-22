'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Menu, X, Plane, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/destinations', label: 'Destinations' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled 
            ? 'py-3 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]' 
            : 'py-6 bg-transparent'
        )}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br from-gold to-gold-dark shadow-lg shadow-gold/20"
              >
                <Plane className="w-6 h-6 text-white" />
              </motion.div>
              <div className="flex flex-col -space-y-1">
                <span className={cn(
                  "text-xl font-heading font-bold tracking-tight transition-colors duration-300",
                  isScrolled ? "text-navy" : "text-navy"
                )}>
                  Fly <span className="text-gold-dark">Goldfinch</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-slate font-semibold">Premium Travel</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              <div className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <NavLink key={link.href} href={link.href} label={link.label} isScrolled={isScrolled} />
                ))}
              </div>
              
              <div className="h-6 w-px bg-slate/20 mx-2" />
              
              <Button
                variant={isScrolled ? 'primary' : 'outline'}
                size="sm"
                className={cn(
                  "rounded-full px-6 font-semibold transition-all duration-300",
                  !isScrolled && "border-navy text-navy hover:bg-navy hover:text-white"
                )}
              >
                Plan Your Trip
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={cn(
                'md:hidden p-2.5 rounded-xl transition-all duration-300',
                isScrolled ? 'bg-navy/5 text-navy' : 'bg-navy/5 text-navy'
              )}
            >
              <Menu className="w-6 h-6" />
            </button>
          </nav>
        </div>

        {/* Scroll Progress Bar */}
        {/* <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold origin-left"
          style={{ scaleX }}
        /> */}
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-60 md:hidden"
          >
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-navy/95 backdrop-blur-md"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl flex flex-col"
            >
              <div className="p-6 flex items-center justify-between border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gold flex items-center justify-center">
                    <Plane className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-heading font-bold text-navy">Fly Goldfinch</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-xl bg-gray-100 text-navy hover:bg-gray-200 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-10 px-8">
                <nav className="space-y-8">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="group flex items-center justify-between text-3xl font-heading font-bold text-navy hover:text-gold transition-colors"
                      >
                        {link.label}
                        <motion.span 
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          className="w-2 h-2 rounded-full bg-gold"
                        />
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="mt-16 pt-10 border-t border-gray-100">
                  <p className="text-xs uppercase tracking-widest text-slate font-bold mb-6">Get in touch</p>
                  <div className="space-y-4">
                    <a href="tel:+918178638182" className="flex items-center gap-4 text-navy font-medium hover:text-gold transition-colors">
                      <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center">
                        <Phone className="w-5 h-5" />
                      </div>
                      +91 8178638182
                    </a>
                    <a href="mailto:info@flygoldfinch.com" className="flex items-center gap-4 text-navy font-medium hover:text-gold transition-colors">
                      <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center">
                        <Mail className="w-5 h-5" />
                      </div>
                      info@flygoldfinch.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gray-50 flex items-center justify-between">
                <div className="flex gap-4">
                  {[Instagram, Facebook, Twitter].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-navy hover:text-gold hover:shadow-md transition-all">
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
                <Button size="sm" className="rounded-full px-6">Book Now</Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ href, label, isScrolled }: { href: string; label: string; isScrolled: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'relative text-sm font-bold tracking-wide transition-colors duration-300 uppercase',
        isScrolled ? 'text-navy/80 hover:text-navy' : 'text-navy/80 hover:text-navy'
      )}
    >
      {label}
      <motion.span
        initial={false}
        animate={{ 
          width: isHovered ? '100%' : '0%',
          left: isHovered ? '0%' : '50%'
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="absolute -bottom-1 h-0.5 bg-gold rounded-full"
      />
    </Link>
  );
}
