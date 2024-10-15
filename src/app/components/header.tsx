import ArrowR from '@/icons/arrow-r.svg'
import Letter from '@/icons/letter.svg'
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
			<div className='absolute left-1/2 right-1/2 hidden h-half w-quad -translate-x-1/2 flex-row rounded-full border border-backgroundSecondary bg-background p-1 *:w-full *:rounded-full lg:flex'>
				<Link
					href='/about'
					className='flex items-center justify-center transition duration-300 ease-out hover:bg-backgroundSecondary'
				>
					About
				</Link>
				<Link
					href='/work'
					className='flex items-center justify-center transition duration-300 ease-out hover:bg-backgroundSecondary'
				>
					Work
				</Link>
				<Link
					href='/services'
					className='flex items-center justify-center transition duration-300 ease-out hover:bg-backgroundSecondary'
				>
					Services
				</Link>
			</div>
			<Link
				href='/contact'
				className='hidden shrink-0 flex-row items-center justify-center gap-3 rounded-full border border-backgroundSecondary bg-background px-7 transition duration-300 ease-out hover:border-foreground md:flex md:w-quad lg:w-auto lg:min-w-double'
			>
				<Letter className='size-3.5' />
				Let&apos;s talk
			</Link>
			<Navbar />
		</header>
	)
}

function Navbar() {
	return (
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
			<hr className='w-6 bg-foreground transition-all delay-100 ease-out group-hover:w-3 group-hover:translate-x-1.5 peer-checked:w-6 peer-checked:translate-x-0 peer-checked:translate-y-[0.550rem] peer-checked:rotate-45' />
			<hr className='gr w-6 bg-foreground transition-all ease-out peer-checked:w-0' />
			<hr className='w-3 translate-x-1.5 bg-foreground transition-all delay-100 ease-out group-hover:w-6 group-hover:translate-x-0 peer-checked:w-6 peer-checked:-translate-y-[0.550rem] peer-checked:translate-x-0 peer-checked:-rotate-45' />
			<nav className='absolute -right-[200vw] top-0 h-screen w-screen pt-tile transition-all duration-700 ease-out peer-checked:-right-tile'>
				<Link href='/about' className='menu-item'>
					About
					<ArrowR className='mr-third size-third' />
				</Link>
				<Link href='/work' className='menu-item'>
					Work
					<ArrowR className='mr-third size-third' />
				</Link>
				<Link href='/services' className='menu-item'>
					Services
					<ArrowR className='mr-third size-third' />
				</Link>
				<div className='h-full bg-background' />
				<div className='border-b-8 border-backgroundSecondary bg-background px-tile pb-tile'>
					<Link
						href='/contact'
						className='flex h-tile items-center justify-center gap-4 rounded-full border border-backgroundSecondary text-third font-semibold transition duration-300 ease-out hover:border-foreground'
					>
						Let&apos;s talk
						<Letter className='size-third' />
					</Link>
				</div>
			</nav>
		</label>
	)
}
