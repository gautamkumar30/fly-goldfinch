'use server';

import { db } from '@/lib/db';
import { contacts } from '@/lib/db/schema';
import { Resend } from 'resend';
import { ContactEmail } from '@/components/emails/ContactEmail';
import { getItinerariesByDestination, getFeaturedItineraries, type Itinerary } from '@/lib/data/itineraries';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(data: any) {
  try {
    // 1. Save to database
    await db.insert(contacts).values({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      adults: data.adults,
      children: data.children,
      destination: data.destination,
      travelDate: data.travelDate,
      budget: data.budget,
      message: data.message,
    });

    // 2. Fetch relevant itineraries
    let relevantItineraries: Itinerary[] = [];
    if (data.destination) {
      relevantItineraries = await getItinerariesByDestination(data.destination);
    }
    
    // If no destination specific itineraries, get featured ones
    if (relevantItineraries.length === 0) {
      relevantItineraries = await getFeaturedItineraries();
    }

    // Limit to 3 itineraries
    relevantItineraries = relevantItineraries.slice(0, 3);

    // 3. Send email via Resend
    if (process.env.RESEND_API_KEY) {
      console.log('Sending email to:', data.email);
      try {
        const test = await resend.emails.send({
          from: 'Fly Goldfinch <onboarding@resend.dev>',
          to: data.email,
          subject: `Your Dream Trip to ${data.destination || 'your favorite destination'}`,
          react: React.createElement(ContactEmail, { 
            firstName: data.firstName, 
            destination: data.destination || 'your destination',
            itineraries: relevantItineraries 
          }),
        });

        console.log(test);

        console.log('Email sent successfully');
      } catch (emailError) {
        console.error('Error sending email:', emailError);
        // We don't fail the whole request if email fails
      }
    }

    return { success: true };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, error: 'Failed to submit form' };
  }
}
