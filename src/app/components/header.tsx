import Link from 'next/link'

export default function Header() {
	return (
		<header className='cont-p h-tile flex-row justify-between'>
			<Link
				href='/'
				className='h-tile w-tile rounded-full bg-brand'
				aria-label='Return home'
			/>
			<button className='peer flex size-tile flex-col items-center justify-center gap-quarter rounded-full border border-backgroundSecondary bg-background'>
				<span className='sr-only'>Menu</span>
				<div
					className='items-end gap-2 peer-hover:bg-red-50 peer-focus:gap-0'
					aria-label='Open menu'
				>
					<hr className='w-half peer-hover:w-quarter' />
					<hr className='w-half' />
					<hr className='w-quarter peer-hover:w-half' />
				</div>
			</button>
		</header>
	)
}
