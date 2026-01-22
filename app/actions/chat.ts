'use server';

import { GoogleGenerativeAI } from '@google/generative-ai';
import { itineraries } from '@/lib/data/itineraries';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function chatWithGemini(message: string, history: { role: 'user' | 'model'; parts: { text: string }[] }[]) {
  if (!process.env.GEMINI_API_KEY) {
    return { error: 'Gemini API key is not configured' };
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const context = `
      You are a helpful travel assistant for Fly Goldfinch, a premium travel agency.
      Your goal is to recommend itineraries based on user preferences.
      Here are the available itineraries:
      ${JSON.stringify(itineraries.map(i => ({
        title: i.title,
        destination: i.destination,
        duration: `${i.duration.days} days, ${i.duration.nights} nights`,
        price: `₹${i.price}`,
        highlights: i.highlights.join(', '),
        description: i.description
      })), null, 2)}

      Instructions:
      1. Be polite and professional.
      2. Recommend specific itineraries from the list above.
      3. If no itinerary matches perfectly, suggest the closest one.
      4. Keep responses concise but informative.
      5. Use markdown for better formatting.
    `;

    const chat = model.startChat({
      history: [
        {
          role: 'user',
          parts: [{ text: context }],
        },
        {
          role: 'model',
          parts: [{ text: 'Understood. I am ready to assist as the Fly Goldfinch travel assistant.' }],
        },
        ...history,
      ],
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    return { text: response.text() };
  } catch (error) {
    console.error('Error in Gemini chat:', error);
    return { error: 'Failed to get response from AI' };
  }
}
