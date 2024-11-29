import ServiceCard from 'elements/services-card'
import Expertise from 'sections/expertise'
import Hero from 'sections/hero'

function Home() {
	return (
		<>
			<Hero />
			<Expertise>
				<ServiceCard
					title='UI/UX Design'
					description='I create user interfaces that are intuitive, accessible, and delightful.'
				/>
				<ServiceCard
					title='Design Systems'
					description='I design and build design systems that scale with your product.'
				/>
				<ServiceCard
					title='Web Development'
					description='I specialize in building fast, responsive, and accessible websites.'
				/>
				<ServiceCard
					title='Mobile Development'
					description='I create mobile applications that are easy to use and visually appealing.'
				/>
			</Expertise>
		</>
	)
}

export default Home
