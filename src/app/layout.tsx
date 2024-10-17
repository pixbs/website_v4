import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { Onest } from 'next/font/google'
import { Suspense } from 'react'
import Header from '../components/header'
import './globals.css'
import Loader from './loader'

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
		images: [
			{
				url: `/api/og?title=${title}`,
				width: 1200,
				height: 630,
				alt: title,
				type: 'image/png',
			},
		],
		title: title,
		description: description,
	},
	twitter: {
		title: title,
		description: description,
		images: [
			{
				url: `/api/og?title=${title}`,
				width: 1200,
				height: 630,
				alt: title,
				type: 'image/png',
			},
		],
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
			<body
				className={`${onest.className} w-screen overflow-x-hidden antialiased`}
			>
				<Loader />
				<Header />
				{children}
				<Suspense>
					<SpeedInsights />
					<Analytics />
				</Suspense>
			</body>
		</html>
	)
}
