import StaggeredText from '@/components/animated/text'
import Tiles from 'elements/tiles'
import Link from 'next/link'

function NotFound() {
	return (
		<section className='h-screen'>
			<div className='z-10 relative p-tile'>
				<h1 className='text-huge'>
					<StaggeredText>404</StaggeredText>
				</h1>
				<p>
					<StaggeredText delay={0.1}>
						Looks like you&apos;re lost
					</StaggeredText>
				</p>
				<Link href='/'>
					<button>Go back</button>
				</Link>
			</div>
			<Tiles />
		</section>
	)
}

export default NotFound
