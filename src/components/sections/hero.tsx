import Social from 'elements/social'
import Tiles from 'elements/tiles'
import StaggeredText from '../animated/text'

function HeroSection() {
	return (
		<section id='hero'>
			<div className='flex flex-col p-tile z-10 relative gap-tile'>
				<h1 className='leading-tile sm:leading-tile'>
					<StaggeredText>Hey I&apos;m Dimm</StaggeredText>
					<br />
					<StaggeredText className='text-gray-200' delay={0.1}>
						Product Designer
					</StaggeredText>
					<br />
					<StaggeredText delay={0.2}>&</StaggeredText>
					<StaggeredText className='text-gray-200' delay={0.2}>
						Software Engineer
					</StaggeredText>
				</h1>
				<div className='grid md:grid-cols-2 items-center min-h-tile'>
					<div className='h-double md:h-tile flex items-center'>
						<p className='max-w-sm'>
							<StaggeredText duration={0.5} delay={0.5}>
								My focus is data-driven approach, that
								prioritizes human-centricity, and lean
								methodologies
							</StaggeredText>
						</p>
					</div>
					<Social className='md:justify-self-end' />
				</div>
			</div>
			<Tiles />
		</section>
	)
}

export default HeroSection
