export default function Stats() {
	return (
		<section>
			<div className="px-tile gap-tile py-tile">
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
		<div className="bg-background h-quad px-half w-full border-b border-l border-backgroundSecondary">
            <div className="md:h-double justify-center">
			    <h2 className='headline'>{number}</h2>
            </div>
            <hr className="border-backgroundSecondary"/>
			<p className="pt-half">{description}</p>
		</div>
	)
}
