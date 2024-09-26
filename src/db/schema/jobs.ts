// db/schema/jobs.ts
import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

export const jobs = pgTable('jobs', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  description: text('description'),
  company: varchar('company', { length: 255 }).notNull(),
  location: varchar('location', { length: 255 }),
});
