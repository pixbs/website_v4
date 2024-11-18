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
	const description =
		'I specialize in creating user interfaces and experiences for web and mobile applications. based on human-centric and lean principles.'

	return <Hero title={title} description={description} />
}

export default Home
