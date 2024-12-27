import { defineConfig } from 'drizzle-kit'

export default defineConfig({
	dialect: 'postgresql',
	schema: './src/lib/drizzle.ts',
	out: './drizzle',
	// This part needed only for local development
	dbCredentials: {
		url: process.env.POSTGRES_URL!,
	},
})
