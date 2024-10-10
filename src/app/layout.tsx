import type { Metadata } from 'next'
import { Onest } from 'next/font/google'
import Header from './components/header'
import './globals.css'

const onest = Onest({
	subsets: ['latin'],
})

const title = "Welcome to Dimm's website!"
const description =
	"Dimm's portfolio website showcasing his works and skills"

export const metadata: Metadata = {
	title: title,
	description: description,
	openGraph: {
		title: title,
		description: description,
	},
	twitter: {
		title: title,
		description: description,
	},
	creator: 'Dimm',
	publisher: 'Dimm',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${onest.className} antialiased`}>
				<Header />
				{children}
			</body>
		</html>
	)
}
