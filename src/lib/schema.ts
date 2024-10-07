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
	'backend',
	'frontend',
	'fullstack',
	'devops',
	'qa',
	'pm',
	'ux',
	'ui',
	'other',
])

export const work = pgTable('work', {
	id: serial('id'),
	image: text('image').notNull(),
	imageAlt: text('imageAlt').notNull(),
	title: text('title').notNull(),
	tags: tagsEnum('tags').array().notNull(),
	description: text('description'),
	createdAt: timestamp('created_at').defaultNow(),
})
