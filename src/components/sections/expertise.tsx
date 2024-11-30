import ArrowTR from '@/icons/base/arrow-tr.svg'
import Link from 'next/link'
import Headline from '../elements/headline'

interface ExpertiseProps {
	title?: React.ReactNode
	description?: React.ReactNode
	children?: React.ReactNode
}

function Expertise({
	title = 'Expertise',
	description = 'My focus is on creating meaningful and delightful digital experiences.',
	children,
}: ExpertiseProps) {
	return (
		<section className='px-tile py-tile tile-stroke bg-background relative'>
			<Headline title={title} description={description} />
			<div className='flex-row flex-wrap'>{children}</div>
			<Link
				href={'/'}
				className='border-stroke h-tile gap-third flex shrink-0 flex-row items-center justify-center rounded-full border bg-background font-semibold uppercase w-full'
			>
				Show more services
				<ArrowTR className='size-third' />
			</Link>
			<hr className=' absolute -bottom-[1px] left-tile right-tile border-foreground' />
		</section>
	)
}
export default Expertise
