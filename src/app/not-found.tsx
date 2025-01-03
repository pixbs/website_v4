import StaggeredText from '@/components/animated/text'
import Button from 'elements/button'
import Tiles from 'elements/tiles'
import Link from 'next/link'

function NotFound() {
	return (
		<section>
			<div className='flex flex-col px-tile py-double lg:py-tile z-10 relative gap-tile'>
				<h1 className='text-huge font-extrabold'>
					<StaggeredText>404</StaggeredText>
				</h1>
				<div className='grid md:grid-cols-2 items-center min-h-tile'>
					<div className='h-double md:h-tile flex items-center'>
						<p className='max-w-sm'>
							<StaggeredText duration={0.5} delay={0.5}>
								Ops, it seems like you are lost. The page you
								are looking for does not exist.
							</StaggeredText>
						</p>
					</div>
					<Link href='/' className='md:justify-self-end'>
						<Button>Go back to home</Button>
					</Link>
				</div>
			</div>
			<Tiles />
		</section>
	)
}

export default NotFound
