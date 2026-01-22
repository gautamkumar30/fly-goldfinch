import { db } from '@/lib/db';
import { itineraries as itinerariesTable } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

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

export async function getItineraries(): Promise<Itinerary[]> {
  const data = await db.query.itineraries.findMany();
  return data.map(i => ({
    id: i.externalId,
    destination: i.destination,
    title: i.title,
    slug: i.slug,
    duration: {
      nights: i.nights,
      days: i.days,
    },
    price: i.price,
    image: i.image,
    description: i.description,
    highlights: i.highlights as string[],
    inclusions: i.inclusions as string[],
    cities: i.cities as string[],
    featured: i.featured,
  }));
}

export async function getFeaturedItineraries(): Promise<Itinerary[]> {
  const itineraries = await getItineraries();
  return itineraries.filter(i => i.featured);
}

export async function getItinerariesByDestination(destination: string): Promise<Itinerary[]> {
  const itineraries = await getItineraries();
  return itineraries.filter(i => i.destination.toLowerCase() === destination.toLowerCase());
}

export async function getItineraryBySlug(slug: string): Promise<Itinerary | undefined> {
  const item = await db.query.itineraries.findFirst({
    where: eq(itinerariesTable.slug, slug)
  });

  if (!item) return undefined;

  return {
    id: item.externalId,
    destination: item.destination,
    title: item.title,
    slug: item.slug,
    duration: {
      nights: item.nights,
      days: item.days,
    },
    price: item.price,
    image: item.image,
    description: item.description,
    highlights: item.highlights as string[],
    inclusions: item.inclusions as string[],
    cities: item.cities as string[],
    featured: item.featured,
  };
}
