import { Metadata } from 'next'
import { Contact } from './components/contact'
import Hero from './components/hero'
import Stats from './components/stats'
import Loading from './loading'
import Works from './components/works'

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
				<Works />
				<Contact />
			</main>
		</>
	)
}
