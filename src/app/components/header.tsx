import Logo from '@/icons/logo.svg'
import Link from 'next/link'

export default function Header() {
	return (
		<header className='cont-m absolute left-0 right-0 flex-row justify-between lg:py-quarter'>
			<Link
				href='/'
				className='aspect-square size-tile rounded-full bg-brand lg:size-half'
				aria-label='Return home'
			>
				<Logo />
			</Link>
			<button className='peer flex size-tile rounded-full border border-backgroundSecondary bg-background lg:size-half'>
				<span className='sr-only'>Menu</span>
				<div
					className='m-auto w-1/3 items-end gap-2 peer-hover:bg-red-50 peer-focus:gap-0'
					aria-label='Open menu'
				>
					<hr className='w-full' />
					<hr className='w-full' />
					<hr className='w-1/2' />
				</div>
			</button>
		</header>
	)
}
