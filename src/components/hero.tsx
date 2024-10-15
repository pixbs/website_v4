import ArrowTR from '@/icons/arrow-tr.svg'
import Tiles from './tiles'

export default function Hero() {
	return (
		<section>
			<div className='hero cont-m justify-between gap-half border-b border-foreground pb-tile pt-double lg:gap-tile'>
				<div className='round-h flex-shrink-0'>
					<h1
						className='animate-fade-in opacity-0'
						style={{
							animationDelay: '1s',
						}}
					>
						Hey, Im Dimm!
						<span className='opacity-60'>
							{' '}
							Software Engineer{' '}
						</span>
						<br />
						and
						<span className='opacity-60'>
							{' '}
							Product Designer
						</span>
					</h1>
				</div>
				<div className='justify-between gap-half lg:flex-row lg:items-center'>
					<p
						className='animate-fade-in opacity-0 lg:h-auto lg:w-sextuple'
						style={{
							animationDelay: '1.5s',
						}}
					>
						I focus on future-oriented methodologies such as
						human-centricity, and lean development.
					</p>
					<button
						className='flex h-tile w-full animate-fade-in flex-row items-center justify-center gap-half rounded-full bg-foreground uppercase text-background opacity-0 lg:w-quad'
						style={{
							animationDelay: '2s',
						}}
					>
						<span>Let&apos;s talk</span>
						<ArrowTR className='size-quarter text-background' />
					</button>
				</div>
			</div>
			<Tiles />
		</section>
	)
}
