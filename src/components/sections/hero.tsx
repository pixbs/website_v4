import ArrowTR from '@/icons/arrow-tr.svg'
import Link from 'next/link'
import { UrlObject } from 'url'

interface HeroProps {
	title: React.ReactNode
	description?: React.ReactNode
	buttonText?: React.ReactNode
	buttonLink?: string | UrlObject
}

function Hero({
	title,
	description,
	buttonText,
	buttonLink,
}: HeroProps) {
	return (
		<section className='px-tile py-double tile-stroke bg-background'>
			<div className='gap-tile'>
				<h1 className='text-balance'>{title}</h1>
				<div className='min-h-tile gap-tile items-center justify-between md:flex-row'>
					<p className='max-w-sextuple'>{description}</p>
					<Link
						href={buttonLink || '/'}
						className='w-quad border-stroke h-tile gap-third flex shrink-0 flex-row items-center justify-center rounded-full border bg-background font-semibold uppercase'
					>
						{buttonText}
						<ArrowTR className='size-third' />
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Hero
