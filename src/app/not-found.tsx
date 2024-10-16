import ArrowR from '@/icons/arrow-r.svg'
import Link from 'next/link'
import Tiles from '../components/tiles'

export default function NotFound() {
	return (
		<main>
			<section>
				<div className='cont-m py-double'>
					<h1 className='animate-fade-in text-double opacity-0'>
						404
					</h1>
					<div className='w-full justify-between gap-half lg:flex-row lg:items-center'>
						<p
							className='animate-fade-in opacity-0 lg:h-auto lg:w-sextuple'
							style={{
								animationDelay: '0.5s',
							}}
						>
							Sorry page you looking for is not found.
						</p>
						<Link
							href='/'
							className='flex h-tile w-full animate-fade-in flex-row items-center justify-center gap-half rounded-full bg-foreground text-quarter uppercase text-background opacity-0 lg:w-quad'
							style={{
								animationDelay: '1s',
							}}
						>
							<span>Back to home</span>
							<ArrowR className='size-third text-background' />
						</Link>
					</div>
				</div>
				<Tiles />
			</section>
		</main>
	)
}
