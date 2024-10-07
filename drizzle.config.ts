import { defineConfig } from "drizzle-kit";

//@ts-ignore
export default defineConfig({
    dialect: 'postgresql',
    schema: './src/lib/schema.ts',
    out: './drizzle',
    // This part needed only for local development
    dbCredentials: {
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD!,
        host: process.env.POSTGRES_HOST,
        port: 5432,
        database: process.env.POSTGRES_DATABASE,
        ssl: true
    }
})