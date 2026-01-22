export interface Testimonial {
  id: string;
  name: string;
  avatar?: string;
  location: string;
  rating: number;
  text: string;
  trip: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    location: 'Mumbai',
    rating: 5,
    text: 'Fly Goldfinch made our Japan trip absolutely magical! From the seamless bookings to the personalized itinerary, everything was perfect. The team\'s attention to detail and 24/7 support made us feel safe throughout our journey.',
    trip: 'Japan 8N/9D',
    date: 'December 2024',
  },
  {
    id: '2',
    name: 'Rahul & Anita Mehta',
    location: 'Delhi',
    rating: 5,
    text: 'Our honeymoon to Switzerland was a dream come true! The glass igloo experience and Northern Lights tour arranged by Fly Goldfinch exceeded all expectations. Highly recommend for luxury travel!',
    trip: 'Switzerland 7N/8D',
    date: 'November 2024',
  },
  {
    id: '3',
    name: 'Vikram Reddy',
    location: 'Hyderabad',
    rating: 5,
    text: 'The South Africa safari with Kruger was the adventure of a lifetime! Saw all the Big Five and the lodges were spectacular. Fly Goldfinch truly understands what premium travel means.',
    trip: 'South Africa 12N/13D',
    date: 'October 2024',
  },
  {
    id: '4',
    name: 'Sneha Patel',
    location: 'Bangalore',
    rating: 5,
    text: 'Vietnam was incredible! The team customized our itinerary perfectly, including a surprise anniversary dinner in Ha Long Bay. The local experiences they arranged were authentic and memorable.',
    trip: 'Vietnam 10N/11D',
    date: 'September 2024',
  },
  {
    id: '5',
    name: 'Arjun & Family',
    location: 'Chennai',
    rating: 5,
    text: 'Traveled with two kids to Australia and Fly Goldfinch handled everything flawlessly. Family-friendly activities, comfortable hotels, and flexible schedules. Will definitely book again!',
    trip: 'Australia 6N/7D',
    date: 'August 2024',
  },
  {
    id: '6',
    name: 'Meera Krishnan',
    location: 'Pune',
    rating: 5,
    text: 'The Finland Northern Lights experience was beyond words! Staying in a glass igloo and watching the aurora was surreal. Fly Goldfinch made this bucket-list trip unforgettable.',
    trip: 'Finland 7N/8D',
    date: 'January 2024',
  },
];

export const getTestimonialsByRating = (minRating: number): Testimonial[] => {
  return testimonials.filter(t => t.rating >= minRating);
};
