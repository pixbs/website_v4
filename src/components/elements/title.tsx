import StaggeredText from '../animated/text'

interface TitleProps {
	title: string
	description: string
}
function Title({ title, description }: TitleProps) {
	return (
		<div className='grid md:grid-cols-2 items-center border-b border-gray-400 pb-10'>
			<h1>
				<StaggeredText>{title}</StaggeredText>
			</h1>
			<p className='max-w-sm md:justify-self-end'>
				<StaggeredText duration={0.5} delay={0.5}>
					{description}
				</StaggeredText>
			</p>
		</div>
	)
}

export default Title
