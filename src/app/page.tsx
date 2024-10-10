import { Metadata } from 'next'
import Hero from './components/hero'
import Stats from './components/stats'
import Loading from './loading'

export const metadata: Metadata = {
	title: "Welcome to Dimm's website!",
	description:
		"Dimm's portfolio website showcasing his works and skills",
}

export default function Home() {
	return (
		<>
			<Loading />
			<main>
				<Hero />
				<Stats />
				{/* <Works /> */}
			</main>
		</>
	)
}
