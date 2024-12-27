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
		index('name_idx').on(t.name),
		index('slug_idx').on(t.slug),
		index('tags_idx').on(t.tags),
		index('year_idx').on(t.year),
	],
)
