interface HeadlineProps {
	title: React.ReactNode
	description?: React.ReactNode
}

function Headline({ title, description }: HeadlineProps) {
	return (
		<div className='mb-tile lg:flex-row justify-between lg:items-center min-h-tile gap-half'>
			<h2 className=''>{title}</h2>
			<p className='lg:w-sextuple'>{description}</p>
		</div>
	)
}

export default Headline
