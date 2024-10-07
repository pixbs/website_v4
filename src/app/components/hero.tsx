export default function Hero() {
	return (
		<section>
			<div className='mx-tile gap-half border-b border-foreground py-tile lg:mx-double'>
				<h1>
					Hey, Im Dimm!
					<span className='opacity-60'>
						{' '}
						Software Engineer{' '}
					</span>
					and
					<span className='opacity-60'> Product Designer</span>
				</h1>
				<p className='min-h-tile'>
					I focus on future-oriented methodologies such as
					human-centricity, and lean development.
				</p>
				<button className='h-tile w-full rounded-full bg-foreground uppercase text-background'>
					<span>Let&apos;s talk</span>
				</button>
			</div>
		</section>
	)
}
