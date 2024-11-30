import Image from 'next/image'
import Link from 'next/link'

function Header() {
	const links = [
		{ href: '/', label: 'About' },
		{ href: '/', label: 'Work' },
		{ href: '/', label: 'Services' },
	]
	return (
		<header className='h-tile px-tile fixed left-0 right-0 flex-row items-center justify-between z-20'>
			<Link href='/'>
				<Image
					src='/logo.svg'
					alt='Dimm Kyselov Logotype'
					className='size-tile bg-brand md:size-half rounded-full'
					width={80}
					height={80}
				/>
			</Link>
			<div className='h-half w-quad border-stroke absolute left-1/2 hidden -translate-x-1/2 flex-row rounded-full border bg-background p-1 lg:flex'>
				{links.map(({ href, label }, index) => (
					<Link
						key={index}
						href={href}
						className='hover:bg-stroke flex size-full items-center justify-center rounded-full font-semibold uppercase text-base'
					>
						{label}
					</Link>
				))}
			</div>
			<button className='size-tile border-stroke md:size-half flex items-center justify-center rounded-full border bg-background'>
				<div className='size-1/3 items-end justify-between'>
					<hr className='w-full border-t-foreground' />
					<hr className='w-full border-t-foreground' />
					<hr className='w-1/2 border-t-foreground' />
				</div>
			</button>
		</header>
	)
}

export default Header
