import { sql as vercelSQL } from '@vercel/postgres'
import {
	index,
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
	'app',
	'design',
	'research',
	'development',
	'other',
])

export const work = pgTable(
	'work',
	{
		id: serial('id').primaryKey(),
		image: text('image').notNull(),
		imageAlt: text('imageAlt').notNull(),
		backgroundImage: text('background_image'),
		color: text('color'),
		name: text('title').notNull(),
		slug: text('slug').notNull(),
		link: text('link'),
		tags: tagsEnum('tags').array().notNull(),
		year: text('year').notNull(),
		description: text('description'),
		createdAt: timestamp('created_at').defaultNow(),
	},
	(t) => [
		index('work_name_idx').on(t.name),
		index('work_slug_idx').on(t.slug),
		index('work_tags_idx').on(t.tags),
		index('work_year_idx').on(t.year),
	],
)

export const message = pgTable(
	'message',
	{
		id: serial('id').primaryKey(),
		ip: text('ip').notNull(),
		name: text('name').notNull(),
		email: text('email').notNull(),
		subject: text('subject'),
		tags: tagsEnum('tags').array().notNull(),
		createdAt: timestamp('created_at').defaultNow(),
	},
	(t) => [
		index('message_ip_idx').on(t.ip),
		index('message_name_idx').on(t.name),
		index('message_email_idx').on(t.email),
		index('message_tags_idx').on(t.tags),
	],
)
