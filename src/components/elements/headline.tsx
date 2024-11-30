interface HeadlineProps {
	title: React.ReactNode
	description?: React.ReactNode
	className?: string
}

function Headline({
	title,
	description,
	className,
}: HeadlineProps) {
	return (
		<div
			className={`mb-half lg:mb-tile lg:flex-row justify-between lg:items-center min-h-tile gap-half ${className}`}
		>
			<h2 className=''>{title}</h2>
			<p className='lg:w-sextuple h-oneAndHalf lg:h-auto'>
				{description}
			</p>
		</div>
	)
}

export default Headline
