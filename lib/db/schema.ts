import { pgTable, serial, text, varchar, timestamp, jsonb, integer, boolean } from 'drizzle-orm/pg-core';

export const contacts = pgTable('contacts', {
  id: serial('id').primaryKey(),
  firstName: varchar('first_name', { length: 255 }).notNull(),
  lastName: varchar('last_name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 20 }).notNull(),
  adults: varchar('adults', { length: 10 }),
  children: varchar('children', { length: 10 }),
  destination: varchar('destination', { length: 255 }),
  travelDate: varchar('travel_date', { length: 50 }),
  budget: varchar('budget', { length: 50 }),
  message: text('message'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const analyticsEvents = pgTable('analytics_events', {
  id: serial('id').primaryKey(),
  sessionId: varchar('session_id', { length: 255 }).notNull(),
  eventType: varchar('event_type', { length: 50 }).notNull(), // scroll, click, time_spent
  eventData: jsonb('event_data').notNull(),
  url: text('url').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const partialFormData = pgTable('partial_form_data', {
  id: serial('id').primaryKey(),
  sessionId: varchar('session_id', { length: 255 }).notNull(),
  formId: varchar('form_id', { length: 50 }).notNull(),
  data: jsonb('data').notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const itineraries = pgTable('itineraries', {
  id: serial('id').primaryKey(),
  externalId: varchar('external_id', { length: 255 }).notNull(),
  destination: varchar('destination', { length: 255 }).notNull(),
  title: varchar('title', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  nights: integer('nights').notNull(),
  days: integer('days').notNull(),
  price: integer('price').notNull(),
  image: text('image').notNull(),
  description: text('description').notNull(),
  highlights: jsonb('highlights').notNull(), // Array of strings
  inclusions: jsonb('inclusions').notNull(), // Array of strings
  cities: jsonb('cities').notNull(), // Array of strings
  featured: boolean('featured').default(false).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
