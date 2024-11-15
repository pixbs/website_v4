import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
	const baseURL =
		process.env.VERCEL_PROJECT_PRODUCTION_URL ||
		process.env.VERCEL_URL ||
		'localhost:3000'

	return {
		rules: {
			userAgent: '*',
			allow: ['/'],
		},
		sitemap: `https://${baseURL}/sitemap.xml`,
	}
}
