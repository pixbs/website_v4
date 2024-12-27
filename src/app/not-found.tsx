import StaggeredText from '@/components/animated/text'
import Tiles from 'elements/tiles'
import Link from 'next/link'

function NotFound() {
	return (
		<section>
			<div className='z-10 relative'>
				<h1>
					<StaggeredText>
						404 - Page not found
					</StaggeredText>
				</h1>
				<Link href='/'> 
					<button>Go back</button>
				</Link>
			</div>
			<Tiles />
		</section>
	)
}

export default NotFound
