import Grid from 'elements/grid'
import type { Metadata } from 'next'
import { Onest } from 'next/font/google'
import Loader from 'sections/loader'
import MarqueeSection from 'sections/marquee'
import './globals.css'

const onest = Onest({
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title:
		'Dimm Kyselov | Product Designer & Software Engineer Site Portfolio',
	description:
		'Dimm Kyselov is a Product Designer & Software Engineer based in Berlin, Germany. He specializes in creating user interfaces and experiences for web and mobile applications.',
}

function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body
				className={`${onest.className} bg-gray-800 antialiased`}
			>
				<Loader />
				<main className='relative z-[1] min-h-screen overflow-x-hidden before:absolute before:inset-0 before:z-10 before:border-8 before:border-gray-400 before:pointer-events-none animate-move-in'>
					{children}
					<MarqueeSection />
					<Grid />
				</main>
			</body>
		</html>
	)
}

export default RootLayout
