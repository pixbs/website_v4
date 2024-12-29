import { work } from '@/lib/drizzle'
import ParallaxImage from '../animated/parallax-image'
import StaggeredText from '../animated/text'

function WorkCard({
	name,
	image,
	imageAlt,
	color,
	backgroundImage,
	tags,
	link,
	year,
}: typeof work.$inferSelect) {
	return (
		<a
			href={link ?? undefined}
			className='flex flex-col p-8 bg-gray-600 border-gray-400 border border-r-0 border-t-0 gap-10 group'
		>
			<ParallaxImage
				image={image}
				imageAlt={imageAlt}
				color={color ?? undefined}
				backgroundImage={backgroundImage ?? undefined}
			/>
			<div className='flex flex-col gap-6'>
				<h2 className='text-small'>
					<StaggeredText>{name}</StaggeredText>
				</h2>
				<hr className=' border-gray-400 border' />
				<div className='flex gap-4 justify-between items-center flex-wrap'>
					<div className='flex gap-2 flex-wrap'>
						{tags.map((tag) => (
							<div
								key={tag}
								className='bg-gray-600 border border-gray-400 py-2 px-5 rounded-full'
							>
								<span>{tag}</span>
							</div>
						))}
					</div>
					<span className='font-bold'>{year}</span>
				</div>
			</div>
		</a>
	)
}

export default WorkCard
