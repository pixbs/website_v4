import ServiceCard from 'elements/services-card'
import Expertise from 'sections/expertise'
import Hero from 'sections/hero'

function Home() {
	return (
		<>
			<Hero
				title={
					<>
						Hey, I&apos;m Dimm!{' '}
						<span className='text-foreground-sec'>
							Software Engineer
						</span>{' '}
						and{' '}
						<span className='text-foreground-sec'>
							UI/UX designer
						</span>
					</>
				}
				description='I specialize in creating user interfaces and experiences for web and mobile applications. based on human-centric and lean principles.'
			/>
			<Expertise
				title='Expertise'
				description='My focus is on creating meaningful and delightful digital experiences. I have a passion for design systems, user interfaces, and user experience design.'
			>
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
