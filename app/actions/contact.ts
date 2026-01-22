'use server';

import { db } from '@/lib/db';
import { contacts } from '@/lib/db/schema';

export async function submitContactForm(data: any) {
  try {
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
    return { success: true };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, error: 'Failed to submit form' };
  }
}
