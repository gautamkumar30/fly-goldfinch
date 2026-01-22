'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  X, 
  MapPin, 
  ChevronDown 
} from 'lucide-react';

// Components
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { Button } from '@/components/ui/Button';
import { DestinationCard } from '@/components/cards/DestinationCard';
import { CTASection } from '@/components/sections/CTASection';

// Data
import { destinations, Destination } from '@/lib/data/destinations';
import { cn } from '@/lib/utils';

const regions = [
  { value: 'all', label: 'All Regions' },
  { value: 'asia', label: 'Asia' },
  { value: 'europe', label: 'Europe' },
  { value: 'africa', label: 'Africa' },
  { value: 'oceania', label: 'Oceania' },
  { value: 'middle-east', label: 'Middle East' },
];

const types = [
  { value: 'all', label: 'All Types' },
  { value: 'adventure', label: 'Adventure' },
  { value: 'beach', label: 'Beach' },
  { value: 'mountain', label: 'Mountain' },
  { value: 'romantic', label: 'Romantic' },
  { value: 'self-drive', label: 'Self-Drive' },
  { value: 'shopping', label: 'Shopping' },
  { value: 'cultural', label: 'Cultural' },
  { value: 'wildlife', label: 'Wildlife' },
];

export default function DestinationsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  // Filter destinations
  const filteredDestinations = useMemo(() => {
    return destinations.filter((dest) => {
      const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           dest.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRegion = selectedRegion === 'all' || dest.region === selectedRegion;
      const matchesType = selectedType === 'all' || dest.types.includes(selectedType as Destination['types'][number]);
      
      return matchesSearch && matchesRegion && matchesType;
    });
  }, [searchQuery, selectedRegion, selectedType]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedRegion('all');
    setSelectedType('all');
  };

  const hasActiveFilters = searchQuery || selectedRegion !== 'all' || selectedType !== 'all';

  return (
    <>
      <ScrollProgress />
      <Header />

      <main>
        {/* ===== HERO SECTION ===== */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&q=80"
              alt="World destinations collage"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-navy/70" />
          </div>

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
                <span className="text-gold">Destinations</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-white mb-6">
                Breathtaking <span className="text-gradient-gold">Destinations</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8">
                Discover 25+ countries across 5 continents. Your next adventure awaits.
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                {[
                  { value: '25+', label: 'Countries' },
                  { value: '5', label: 'Continents' },
                  { value: '60+', label: 'Packages' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <p className="text-2xl md:text-3xl font-heading font-bold text-gold">
                      {stat.value}
                    </p>
                    <p className="text-sm text-white/70">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== FILTER BAR ===== */}
        <section className="sticky top-[72px] z-40 bg-white shadow-md py-4">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative w-full lg:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate" />
                <input
                  type="text"
                  placeholder="Search destinations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full"
                  >
                    <X className="w-4 h-4 text-slate" />
                  </button>
                )}
              </div>

              {/* Desktop Filters */}
              <div className="hidden lg:flex items-center gap-4">
                {/* Region Filter */}
                <div className="relative">
                  <select
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    className="appearance-none px-4 py-3 pr-10 rounded-full border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all bg-white cursor-pointer"
                  >
                    {regions.map((region) => (
                      <option key={region.value} value={region.value}>
                        {region.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate pointer-events-none" />
                </div>

                {/* Type Filter */}
                <div className="relative">
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="appearance-none px-4 py-3 pr-10 rounded-full border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all bg-white cursor-pointer"
                  >
                    {types.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate pointer-events-none" />
                </div>

                {/* Clear Filters */}
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="flex items-center gap-2 px-4 py-3 text-coral hover:bg-coral/10 rounded-full transition-colors"
                  >
                    <X className="w-4 h-4" />
                    Clear
                  </button>
                )}
              </div>

              {/* Mobile Filter Button */}
              <button
                onClick={() => setIsFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200"
              >
                <Filter className="w-5 h-5" />
                Filters
                {hasActiveFilters && (
                  <span className="w-5 h-5 rounded-full bg-gold text-navy text-xs flex items-center justify-center">
                    {(selectedRegion !== 'all' ? 1 : 0) + (selectedType !== 'all' ? 1 : 0)}
                  </span>
                )}
              </button>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-sm text-slate">
              Showing {filteredDestinations.length} of {destinations.length} destinations
            </div>
          </div>
        </section>

        {/* ===== DESTINATIONS GRID ===== */}
        <section className="section-padding bg-off-white">
          <div className="container-custom">
            {filteredDestinations.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10 text-slate" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-charcoal mb-2">
                  No destinations found
                </h3>
                <p className="text-slate mb-6">
                  Try adjusting your search or filters to find what you&apos;re looking for.
                </p>
                <Button onClick={clearFilters} variant="outline">
                  Clear Filters
                </Button>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredDestinations.map((destination, index) => (
                  <DestinationCard
                    key={destination.id}
                    destination={destination}
                    index={index}
                    onClick={() => setSelectedDestination(destination)}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <CTASection
          title="Can't Find What You're Looking For?"
          subtitle="Contact us and we'll craft a custom itinerary just for you."
          buttonText="Get Custom Quote"
        />
      </main>

      {/* ===== MOBILE FILTER MODAL ===== */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 lg:hidden"
              onClick={() => setIsFilterOpen(false)}
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-50 lg:hidden max-h-[80vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-heading font-semibold">Filters</h3>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Region */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-charcoal mb-3">
                    Region
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {regions.map((region) => (
                      <button
                        key={region.value}
                        onClick={() => setSelectedRegion(region.value)}
                        className={cn(
                          'px-4 py-2 rounded-full text-sm transition-colors',
                          selectedRegion === region.value
                            ? 'bg-gold text-navy font-medium'
                            : 'bg-gray-100 text-slate hover:bg-gray-200'
                        )}
                      >
                        {region.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Type */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-charcoal mb-3">
                    Trip Type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {types.map((type) => (
                      <button
                        key={type.value}
                        onClick={() => setSelectedType(type.value)}
                        className={cn(
                          'px-4 py-2 rounded-full text-sm transition-colors',
                          selectedType === type.value
                            ? 'bg-gold text-navy font-medium'
                            : 'bg-gray-100 text-slate hover:bg-gray-200'
                        )}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <Button
                    variant="ghost"
                    onClick={clearFilters}
                    className="flex-1"
                  >
                    Clear All
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => setIsFilterOpen(false)}
                    className="flex-1"
                  >
                    Show {filteredDestinations.length} Results
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ===== DESTINATION MODAL ===== */}
      <AnimatePresence>
        {selectedDestination && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-50"
              onClick={() => setSelectedDestination(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-4 md:inset-10 lg:inset-20 bg-white rounded-2xl z-50 overflow-hidden flex flex-col md:flex-row"
            >
              {/* Image Gallery */}
              <div className="relative w-full md:w-1/2 h-64 md:h-auto">
                <Image
                  src={selectedDestination.gallery[0] || selectedDestination.image}
                  alt={selectedDestination.name}
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-gradient-to-r" />
                <button
                  onClick={() => setSelectedDestination(null)}
                  className="absolute top-4 right-4 md:hidden p-2 bg-white/90 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 md:p-10 overflow-y-auto">
                <button
                  onClick={() => setSelectedDestination(null)}
                  className="hidden md:block absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="flex items-center gap-2 text-gold mb-3">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium uppercase tracking-wider">
                    {selectedDestination.region.replace('-', ' ')}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-heading font-semibold text-charcoal mb-4">
                  {selectedDestination.name}
                </h2>

                <p className="text-slate-dark leading-relaxed mb-6">
                  {selectedDestination.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="font-semibold text-charcoal mb-3">Highlights</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedDestination.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-gold-100 text-gold-600 rounded-full text-sm"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Trip Info */}
                <div className="bg-off-white rounded-xl p-6 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-slate">Available Trips</span>
                    <span className="font-semibold text-navy">{selectedDestination.tripCount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate">Starting From</span>
                    <span className="text-2xl font-heading font-semibold text-gold">
                      ₹{selectedDestination.priceRange.min.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex gap-4">
                  <Button variant="primary" className="flex-1">
                    View All Trips
                  </Button>
                  <Button variant="outline">
                    Get Quote
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
