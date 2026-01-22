export interface Itinerary {
  id: string;
  destination: string;
  title: string;
  slug: string;
  duration: {
    nights: number;
    days: number;
  };
  price: number;
  image: string;
  description: string;
  highlights: string[];
  inclusions: string[];
  cities: string[];
  featured: boolean;
}

export const itineraries: Itinerary[] = [
  {
    id: 'japan-6n7d',
    destination: 'Japan',
    title: 'Tokyo, Hakone & Osaka Discovery',
    slug: 'japan-tokyo-hakone-osaka',
    duration: { nights: 6, days: 7 },
    price: 160000,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80',
    description: 'Experience the best of Japan from the bustling streets of Tokyo to the serene beauty of Hakone and the vibrant culture of Osaka.',
    highlights: [
      'Explore Tokyo\'s Shibuya & Shinjuku',
      'Day trip to Mount Fuji',
      'Traditional Ryokan experience',
      'Osaka Castle & food tour',
    ],
    inclusions: ['Flights', 'Hotels', 'JR Pass', 'Select meals', 'Tours'],
    cities: ['Tokyo', 'Hakone', 'Osaka'],
    featured: true,
  },
  {
    id: 'japan-8n9d',
    destination: 'Japan',
    title: 'Mount Fuji to Osaka Grand Journey',
    slug: 'japan-fuji-osaka-grand',
    duration: { nights: 8, days: 9 },
    price: 220000,
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80',
    description: 'An extended journey through Japan covering Tokyo, the iconic Mount Fuji, ancient Kyoto, and vibrant Osaka.',
    highlights: [
      'Climb Mount Fuji (seasonal)',
      'Kyoto temple hopping',
      'Bullet train experience',
      'Traditional tea ceremony',
    ],
    inclusions: ['Flights', 'Hotels', 'JR Pass', 'Daily breakfast', 'Private tours'],
    cities: ['Tokyo', 'Mount Fuji', 'Kyoto', 'Osaka'],
    featured: true,
  },
  {
    id: 'vietnam-10n11d',
    destination: 'Vietnam',
    title: 'Hanoi to Phu Quoc Complete',
    slug: 'vietnam-hanoi-phuquoc',
    duration: { nights: 10, days: 11 },
    price: 82000,
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80',
    description: 'Journey through Vietnam from the charming streets of Hanoi to the paradise beaches of Phu Quoc.',
    highlights: [
      'Ha Long Bay cruise',
      'Hoi An ancient town',
      'Cu Chi Tunnels tour',
      'Phu Quoc beach relaxation',
    ],
    inclusions: ['Flights', 'Hotels', 'Ha Long cruise', 'All transfers', 'Breakfast'],
    cities: ['Hanoi', 'Ha Long Bay', 'Hoi An', 'Ho Chi Minh', 'Phu Quoc'],
    featured: true,
  },
  {
    id: 'vietnam-8n9d',
    destination: 'Vietnam',
    title: 'Cities & Bay Explorer',
    slug: 'vietnam-cities-bay',
    duration: { nights: 8, days: 9 },
    price: 67500,
    image: 'https://images.unsplash.com/photo-1555921015-5532091f6026?w=800&q=80',
    description: 'Discover Vietnam\'s vibrant cities and the stunning Ha Long Bay in this compact yet comprehensive tour.',
    highlights: [
      'Hanoi street food tour',
      'Overnight Ha Long Bay cruise',
      'Hoi An lantern making',
      'Ho Chi Minh City tour',
    ],
    inclusions: ['Flights', 'Hotels', 'Bay cruise', 'Transfers', 'Select meals'],
    cities: ['Hanoi', 'Ha Long Bay', 'Hoi An', 'Ho Chi Minh City'],
    featured: false,
  },
  {
    id: 'south-africa-6n7d',
    destination: 'South Africa',
    title: 'Cape Town Self-Drive Adventure',
    slug: 'south-africa-cape-town-drive',
    duration: { nights: 6, days: 7 },
    price: 165000,
    image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80',
    description: 'Explore Cape Town and the stunning Garden Route at your own pace with this self-drive adventure.',
    highlights: [
      'Table Mountain cable car',
      'Cape Peninsula drive',
      'Wine tasting in Stellenbosch',
      'Garden Route scenic drive',
    ],
    inclusions: ['Flights', 'Car rental', 'Hotels', 'Breakfast', 'GPS & maps'],
    cities: ['Cape Town', 'Stellenbosch', 'Knysna'],
    featured: true,
  },
  {
    id: 'south-africa-12n13d',
    destination: 'South Africa',
    title: 'Cape Town & Kruger Safari',
    slug: 'south-africa-cape-kruger',
    duration: { nights: 12, days: 13 },
    price: 235000,
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80',
    description: 'The ultimate South Africa experience combining Cape Town\'s beauty with an unforgettable Kruger safari.',
    highlights: [
      'Big Five safari in Kruger',
      'Cape Town city tour',
      'Robben Island visit',
      'Panorama Route drive',
    ],
    inclusions: ['Flights', 'Lodges', 'Safari drives', 'All meals on safari', 'Park fees'],
    cities: ['Cape Town', 'Johannesburg', 'Kruger National Park'],
    featured: true,
  },
  {
    id: 'finland-7n8d',
    destination: 'Finland',
    title: 'Winter Wonderland Aurora',
    slug: 'finland-winter-aurora',
    duration: { nights: 7, days: 8 },
    price: 265000,
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80',
    description: 'Chase the Northern Lights, stay in glass igloos, and experience the magic of Finnish Lapland.',
    highlights: [
      'Glass igloo accommodation',
      'Northern Lights hunting',
      'Husky safari',
      'Santa Claus Village',
    ],
    inclusions: ['Flights', 'Unique stays', 'Winter activities', 'All meals', 'Thermal gear'],
    cities: ['Helsinki', 'Rovaniemi', 'Saariselkä'],
    featured: true,
  },
  {
    id: 'australia-6n7d',
    destination: 'Australia',
    title: 'Cities & Landscapes Discovery',
    slug: 'australia-cities-landscapes',
    duration: { nights: 6, days: 7 },
    price: 150000,
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&q=80',
    description: 'From Sydney\'s iconic harbor to Melbourne\'s laneways, discover Australia\'s diverse cities and landscapes.',
    highlights: [
      'Sydney Opera House tour',
      'Blue Mountains day trip',
      'Great Ocean Road drive',
      'Melbourne food & coffee scene',
    ],
    inclusions: ['Flights', 'Hotels', 'Transfers', 'Select tours', 'Breakfast'],
    cities: ['Sydney', 'Melbourne'],
    featured: true,
  },
  {
    id: 'swiss-austria-7n8d',
    destination: 'Switzerland',
    title: 'Swiss Alps to Vienna',
    slug: 'swiss-austria-alps-vienna',
    duration: { nights: 7, days: 8 },
    price: 280000,
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80',
    description: 'Experience the best of Central Europe from the Swiss Alps through Austria to imperial Vienna.',
    highlights: [
      'Jungfrau railway journey',
      'Lucerne lake cruise',
      'Salzburg Mozart tour',
      'Vienna palace visit',
    ],
    inclusions: ['Flights', 'Train passes', 'Hotels', 'Breakfast', 'City tours'],
    cities: ['Zurich', 'Lucerne', 'Interlaken', 'Salzburg', 'Vienna'],
    featured: false,
  },
];

export const featuredItineraries = itineraries.filter(i => i.featured);

export const getItinerariesByDestination = (destination: string): Itinerary[] => {
  return itineraries.filter(i => i.destination.toLowerCase() === destination.toLowerCase());
};

export const getItineraryBySlug = (slug: string): Itinerary | undefined => {
  return itineraries.find(i => i.slug === slug);
};
