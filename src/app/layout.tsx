import type { Metadata } from 'next'
import { Onest } from 'next/font/google'
import Footer from 'sections/footer'
import Header from 'sections/header'
import './globals.css'

const onest = Onest({
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title:
		'Dimm Kyselov | UI/UX Designer & Software Engineer Site Portfolio',
	description:
		'Dimm Kyselov is a UI/UX Designer & Software Engineer based in Berlin, Germany. He specializes in creating user interfaces and experiences for web and mobile applications.',
}

function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body
				className={`${onest.className} bg-background-sec antialiased`}
			>
				<Header />
				<main className='relative z-[1] tile-stroke bg-background min-h-screen'>
					{children}
				</main>
				<Footer />
			</body>
		</html>
	)
}

export default RootLayout
