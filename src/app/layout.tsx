import type { Metadata } from 'next'
import { Onest } from 'next/font/google'
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
				className={`${onest.className} bg-gray-600 antialiased`}
			>
				<main className='relative z-[1] min-h-screen'>
					{children}
				</main>
			</body>
		</html>
	)
}

export default RootLayout
