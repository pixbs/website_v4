import Link from 'next/link'
import Social from '../elements/social'

function Footer() {
	return (
		<footer className='relative p-tile h-quad'>
			<div className='fixed h-double bottom-tile left-tile right-tile'>
				<div className='flex-row min-h-tile items-center justify-between flex-wrap'>
					<p className=' uppercase text-foreground-sec'>
						Dimm Kyselov © {new Date().getFullYear()}, All
						human rights reserved.
					</p>
					<Link href='/' className='uppercase'>
						Privacy Policy
					</Link>
				</div>
				<Social />
			</div>
		</footer>
	)
}

export default Footer
