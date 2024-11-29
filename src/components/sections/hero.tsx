import ArrowTR from '@/icons/base/arrow-tr.svg'
import Social from 'elements/social'
import Link from 'next/link'
import { UrlObject } from 'url'

interface HeroProps {
	title?: React.ReactNode
	description?: React.ReactNode
	buttonText?: React.ReactNode
	buttonLink?: string | UrlObject
}

function Hero({
	title = (
		<>
			Hey, I&apos;m Dimm!{' '}
			<span className='text-foreground-sec'>
				Software Engineer
			</span>{' '}
			and{' '}
			<span className='text-foreground-sec'>
				UI/UX designer
			</span>
		</>
	),
	description = 'I specialize in creating user interfaces and experiences for web and mobile applications. based on human-centric and lean principles.',
	buttonText,
	buttonLink,
}: HeroProps) {
	return (
		<section className='px-tile pt-double pb-tile tile-stroke bg-background relative gap-tile'>
			<h1 className='text-balance'>{title}</h1>
			<div className='min-h-tile gap-tile items-center justify-between md:flex-row'>
				<p className='max-w-sextuple min-h-tile flex items-center h-quad lg:h-auto '>
					{description}
				</p>
				{buttonText ? (
					<CTA
						buttonText={buttonText}
						buttonLink={buttonLink}
					/>
				) : (
					<Social />
				)}
			</div>
			<hr className=' absolute -bottom-[1px] left-tile right-tile border-foreground z-[2]' />
		</section>
	)
}

function CTA({
	buttonLink,
	buttonText,
}: Pick<HeroProps, 'buttonLink' | 'buttonText'>) {
	return (
		<Link
			href={buttonLink || '/'}
			className='w-quad border-stroke h-tile gap-third flex shrink-0 flex-row items-center justify-center rounded-full border bg-background font-semibold uppercase'
		>
			{buttonText}
			<ArrowTR className='size-third' />
		</Link>
	)
}

export default Hero
