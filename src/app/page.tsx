import ContactSection from 'sections/contact'
import HeroSection from 'sections/hero'
import MarqueeSection from 'sections/marquee'
import WorksSection from 'sections/works'

function Home() {
	return (
		<>
			<HeroSection />
			<MarqueeSection />
			<WorksSection />
			<ContactSection />
		</>
	)
}

export default Home
