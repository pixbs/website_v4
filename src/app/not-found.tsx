import Tiles from 'elements/tiles'
import Hero from 'sections/hero'

function NotFound() {
	return (
		<>
			<Hero
				title='404 - Page Not Found'
				description='Sorry, that seems that this page isn’t ready yet, or doesn’t exist. Please come back later if you’re sure that this url is correct.'
				buttonText='Go back home'
				buttonLink='/'
			/>
			<Tiles />
		</>
	)
}

export default NotFound
