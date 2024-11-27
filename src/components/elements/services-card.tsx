import { services } from '@/lib/drizzle'
import Link from 'next/link'

type services = typeof services.$inferSelect

function ServiceCard({
	title,
	description,
	slug,
}: Partial<services>) {
	return (
		<Link
			href={`/services/${slug}`}
			className='flex flex-col bg-background border border-stroke w-full md:w-1/2 h-triple p-half justify-center gap-quarter'
		>
			<h3>{title}</h3>
			<p>{description}</p>
		</Link>
	)
}

export default ServiceCard
