import { Metadata } from 'next'
import { Contact } from './components/contact'
import Hero from './components/hero'
import Stats from './components/stats'
import Works from './components/works'

export const metadata: Metadata = {
	title: "Welcome to Dimm's website!",
	description:
		"Dimm's portfolio website showcasing his works and skills",
}

export default function Home() {
	return (
			<main>
				<Hero />
				<Stats />
				<Works />
				<Contact />
			</main>
	)
}
