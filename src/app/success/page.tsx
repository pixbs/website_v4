import StaggeredText from '@/components/animated/text'
import Social from 'elements/social'
import Tiles from 'elements/tiles'

function Success() {
	return (
		<section>
			<div className='flex flex-col px-tile py-double lg:py-tile z-10 relative gap-tile'>
				<h1 className='leading-tile sm:leading-tile'>
					<StaggeredText>Success!</StaggeredText>
					<br />
					<StaggeredText className='text-gray-200' delay={0.1}>
						Message recieved.
					</StaggeredText>
				</h1>
				<div className='grid md:grid-cols-2 items-center min-h-tile'>
					<div className='h-double md:h-tile flex items-center'>
						<p className='max-w-sm'>
							<StaggeredText duration={0.5} delay={0.5}>
								Thank you for reaching out. I will get back to
								you as soon as possible.
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

export default Success
