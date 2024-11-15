import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	const baseURL =
		process.env.VERCEL_PROJECT_PRODUCTION_URL ||
		process.env.VERCEL_URL ||
		'localhost:3000'

	return [
		{
			url: `https://${baseURL}`,
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 1,
		},
	]
}
