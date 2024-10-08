import ArrowTR from '@/icons/arrow-tr.svg'

export default function Hero() {
	return (
		<section>
			<div className='hero cont-m hero justify-between gap-half border-b border-foreground py-tile lg:gap-tile'>
				<div className='round-h flex-shrink-0'>
					<h1>
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
					<p className='lg:h-auto lg:w-sextuple'>
						I focus on future-oriented methodologies such as
						human-centricity, and lean development.
					</p>
					<button className='flex h-tile w-full flex-row items-center justify-center gap-half rounded-full bg-foreground uppercase text-background lg:w-quad'>
						<span>Let&apos;s talk</span>
						<ArrowTR className='size-quarter text-background' />
					</button>
				</div>
			</div>
		</section>
	)
}
