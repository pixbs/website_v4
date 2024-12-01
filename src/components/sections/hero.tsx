import ArrowTR from '@/icons/base/arrow-tr.svg'
import Social from 'elements/social'
import Tiles from 'elements/tiles'
import Link from 'next/link'
import { UrlObject } from 'url'
import StaggeredText from '../animated/text'

interface HeroProps {
	title?: React.ReactNode
	description?: string
	buttonText?: React.ReactNode
	buttonLink?: string | UrlObject
}

function Hero({
	title = 'Hey, I’m Dimm! a Product Designer based in Berlin, Germany.',
	description = 'I specialize in creating user interfaces and experiences for web and mobile applications. based on human-centric and lean principles.',
	buttonText,
	buttonLink,
}: HeroProps) {
	return (
		<section className='px-tile pt-double pb-tile relative gap-tile tile-stroke bg-background'>
			<Tiles />
			<div className='gap-tile z-10'>
				<h1 className='text-balance'>
					{typeof title === 'string' ? (
						<StaggeredText>{title}</StaggeredText>
					) : (
						title
					)}
				</h1>
				<div className='min-h-tile gap-tile items-center justify-between md:flex-row'>
					<p className='max-w-sextuple min-h-tile flex items-center h-quad lg:h-auto '>
						<StaggeredText duration={0.5} delay={0.5}>
							{description}
						</StaggeredText>
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
			</div>
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
