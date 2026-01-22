'use server';

import { getItineraries, getFeaturedItineraries, getItinerariesByDestination, getItineraryBySlug } from '@/lib/data/itineraries';

export async function fetchItineraries() {
  return await getItineraries();
}

export async function fetchFeaturedItineraries() {
  return await getFeaturedItineraries();
}

export async function fetchItinerariesByDestination(destination: string) {
  return await getItinerariesByDestination(destination);
}

export async function fetchItineraryBySlug(slug: string) {
  return await getItineraryBySlug(slug);
}
