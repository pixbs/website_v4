export default function Stats() {
	return (
		<section>
			<div className='cont-p gap-tile py-tile lg:flex-row'>
				<StatsCard
					number='90+'
					description='Successful products created by me'
				/>
				<StatsCard
					number='8'
					description='Years of commercial experience '
				/>
				<StatsCard
					number='99%'
					description='Client satisfaction on final work by me'
				/>
			</div>
		</section>
	)
}

interface StatsCardProps {
	number: string
	description: string
}

function StatsCard(props: StatsCardProps) {
	const { number, description } = props
	return (
		<div className='h-quad w-full border-b border-l border-backgroundSecondary bg-background px-half'>
			<div className='h-double justify-center'>
				<h2 className='text-tile'>{number}</h2>
			</div>
			<hr className='border-backgroundSecondary' />
			<p className='pt-half'>{description}</p>
		</div>
	)
}
