import StaggeredText from '@/components/animated/text'
import ServiceCard from 'elements/services-card'
import Contact from 'sections/contact'
import Expertise from 'sections/expertise'
import Hero from 'sections/hero'

function Home() {
	return (
		<>
			<Hero
				title={
					<>
						<StaggeredText>Hey, I’m Dimm! a</StaggeredText>
						<StaggeredText
							className='text-foreground/50'
							delay={0.25}
						>
							Product Designer
						</StaggeredText>
						<StaggeredText delay={0.5}>based in</StaggeredText>
						<StaggeredText
							className='text-foreground/50'
							delay={0.8}
						>
							Berlin, Germany.
						</StaggeredText>
					</>
				}
			/>
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
			<Contact />
		</>
	)
}

export default Home
