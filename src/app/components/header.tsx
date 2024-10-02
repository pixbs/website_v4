import Link from 'next/link'

export default function Header() {
	return (
		<header className='h-tile flex-row justify-between px-tile'>
			<Link
				href='/'
				className='h-tile w-tile rounded-full bg-brand'
				aria-label='Return home'
			/>
			<button className='peer flex size-tile flex-col items-center justify-center gap-quarter rounded-full border border-backgroundSecondary bg-background'>
				<span className='sr-only'>Menu</span>
				<div className='gap-2' aria-label='Open menu'>
					<hr className='w-half peer-hover:w-quarter' />
					<hr className='w-half' />
					<hr className='w-quarter peer-hover:w-half' />
				</div>
			</button>
		</header>
	)
}
