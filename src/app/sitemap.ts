import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	const baseURL = process.env.BASE_URL

	return [
		{
			url: `${baseURL}`,
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 1,
		},
		{
			url: `${baseURL}/contact`,
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 0.8,
		},
		{
			url: `${baseURL}/services`,
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 0.8,
		},
		{
			url: `${baseURL}/work`,
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 0.8,
		},
	]
}
