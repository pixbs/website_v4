export default function Hero() {
	return (
		<section>
			<div className='hero cont-m py-tile hero gap-half lg:gap-tile justify-between border-b border-foreground'>
				<div className="round-h flex-shrink-0">
					<h1>
						Hey, Im Dimm!
						<span className='opacity-60'>
							{' '}
							Software Engineer{' '}
						</span>
						<br/>and
						<span className='opacity-60'> Product Designer</span>
					</h1>
				</div>
				<div className="lg:flex-row lg:items-center gap-half justify-between">
					<p className='lg:w-sextuple lg:h-auto'>
						I focus on future-oriented methodologies such as
						human-centricity, and lean development.
					</p>
					<button className='h-tile w-full rounded-full bg-foreground uppercase text-background lg:w-quad'>
						<span>Let&apos;s talk</span>
					</button>
				</div>
			</div>
		</section>
	)
}
