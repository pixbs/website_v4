import { PHProvider } from '@/lib/posthog'
import PostHogPageView from '@/lib/posthog-page-view'
import type { Metadata } from 'next'
import { Onest } from 'next/font/google'
import { Suspense } from 'react'
import './globals.css'

const onest = Onest({
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title:
		'Dimm Kyselov | UI/UX Designer & Software Engineer Site Portfolio',
	description:
		'Dimm Kyselov is a UI/UX Designer & Software Engineer based in Kyiv, Ukraine. He specializes in creating user interfaces and experiences for web and mobile applications.',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<PHProvider>
				<body className={`${onest.className} antialiased`}>
          <Suspense>
					  <PostHogPageView />
          </Suspense>
					<main>{children}</main>
				</body>
			</PHProvider>
		</html>
	)
}
