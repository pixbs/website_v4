import Hero from 'sections/hero'

function Home() {
	const title = (
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
	)

	return (
		<Hero
			title={title}
			description='I specialize in creating user interfaces and experiences for web and mobile applications. I am passionate about creating beautiful and functional designs that are accessible to everyone.'
			buttonText="Let's talk"
		/>
	)
}

export default Home
