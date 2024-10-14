import { sql as vercelSQL } from '@vercel/postgres'
import {
	pgEnum,
	pgTable,
	serial,
	text,
	timestamp,
} from 'drizzle-orm/pg-core'
import { drizzle } from 'drizzle-orm/vercel-postgres'

export const db = drizzle(vercelSQL)

export const tagsEnum = pgEnum('tags', [
	'web',
	'mobile',
	'design',
	'research',
	'backend',
	'frontend',
	'ux',
	'ui',
	'other',
])

export const work = pgTable('work', {
	id: serial('id').primaryKey(),
	image: text('image').notNull(),
	imageAlt: text('imageAlt').notNull(),
	title: text('title').notNull(),
	slug: text('slug'),
	tags: tagsEnum('tags').array().notNull(),
	description: text('description'),
	createdAt: timestamp('created_at').defaultNow(),
})

export const services = pgTable('services', {
	id: serial('id').primaryKey(),
	title: text('title').notNull(),
	slug: text('slug'),
	description: text('description').notNull(),
	createdAt: timestamp('created_at').defaultNow(),
})

export const contact = pgTable('contact', {
	id: serial('id').primaryKey(),
	userIp: text('ip'),
	name: text('name').notNull(),
	email: text('email').notNull(),
	subject: text('subject'),
	tags: tagsEnum('tags').array(),
	createdAt: timestamp('created_at').defaultNow(),
})
