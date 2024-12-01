import StaggeredText from '../animated/text'

interface HeadlineProps {
	title: string
	description?: string
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
			<h2 className=''>
				<StaggeredText>{title}</StaggeredText>
			</h2>
			<p className='lg:w-sextuple h-oneAndHalf lg:h-auto'>
				<StaggeredText duration={0.5}>
					{description}
				</StaggeredText>
			</p>
		</div>
	)
}

export default Headline
