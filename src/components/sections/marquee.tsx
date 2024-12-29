import Grid from 'elements/grid'
import Marquee from '../animated/marquee'

interface MarqueeSectionProps {
	text?: string
	baseVelocity?: number
}

function MarqueeSection({
	text = 'Dimm • ',
	baseVelocity,
}: MarqueeSectionProps) {
	return (
		<section>
			<div className='overflow-hidden relative flex items-center'>
				<Marquee text={text} baseVelocity={baseVelocity} />
			</div>
			<Grid />
		</section>
	)
}

export default MarqueeSection
