import Logo from '@/icons/logo.svg'
import Link from 'next/link'

export default function Header() {
	return (
		<header className='cont-m fixed left-0 right-0 z-50 flex-row justify-between lg:py-quarter'>
			<Link
				href='/'
				className='z-10 aspect-square size-tile rounded-full bg-brand lg:size-half'
				aria-label='Return home'
			>
				<Logo />
			</Link>
			<label
				htmlFor='menu-toggle'
				className='group relative z-10 flex size-tile flex-col items-center justify-center gap-2 rounded-full border border-backgroundSecondary bg-background peer-checked:bg-red-500 lg:hidden lg:size-half'
			>
				<input
					type='checkbox'
					id='menu-toggle'
					className='peer sr-only'
				/>
				<span className='sr-only'>Open menu</span>
				<hr className='w-6 bg-foreground transition-all ease-out group-hover:w-3 group-hover:translate-x-1.5 peer-checked:w-6 peer-checked:translate-x-0 peer-checked:translate-y-[0.550rem] peer-checked:rotate-45' />
				<hr className='gr w-6 bg-foreground transition-all ease-out peer-checked:w-0' />
				<hr className='w-3 translate-x-1.5 bg-foreground transition-all ease-out group-hover:w-6 group-hover:translate-x-0 peer-checked:w-6 peer-checked:-translate-y-[0.550rem] peer-checked:translate-x-0 peer-checked:-rotate-45' />
				<nav className='absolute -right-[200vw] top-0 h-screen w-screen pt-tile transition-all duration-700 ease-out peer-checked:-right-tile'>
					<Link href='/about' className='menu-item'>
						About
					</Link>
					<Link href='/work' className='menu-item'>
						Work
					</Link>
					<Link href='/services' className='menu-item'>
						Services
					</Link>
					<div className='h-full bg-background' />
					<div className='border-b-8 border-backgroundSecondary bg-background px-tile pb-tile'>
						<Link
							href='/contact'
							className='flex h-tile items-center justify-center rounded-full border border-backgroundSecondary text-quarter'
						>
							Let&apos;s talk
						</Link>
					</div>
				</nav>
			</label>
		</header>
	)
}
