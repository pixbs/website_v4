import { db, work } from '@/lib/drizzle'
import Grid from 'elements/grid'
import Image from 'next/image'
import StaggeredText from '../animated/text'

async function WorksSection() {
	const works = await db.select().from(work)

	return (
		<section id='works' className='base-grid'>
			<div className='col-start-2 col-end-4 lg:col-end-6 py-20'>
				<div className='grid md:grid-cols-2 items-center border-b border-gray-400 pb-10'>
					<h1>
						<StaggeredText>Recent work</StaggeredText>
					</h1>
					<p className='max-w-sm md:justify-self-end'>
						<StaggeredText duration={0.5} delay={0.5}>
							Recent projects that I&apos;ve been working on
							that include user-centricity, and lean approach
						</StaggeredText>
					</p>
				</div>
				<div className='grid md:grid-cols-2'>
					{works.map((work) => (
						<WorkCard key={work.id} {...work} />
					))}
				</div>
			</div>
			<Grid />
		</section>
	)
}

function WorkCard({
	name,
	image,
	imageAlt,
	color,
	backgroundImage,
	tags,
	link,
}: typeof work.$inferSelect) {
	return (
		<a
			href={link ?? undefined}
			className='flex flex-col p-8 bg-gray-600 border-gray-400 border border-r-0 gap-10'
		>
			<div
				className='flex relative bg-gray-400 aspect-square items-center justify-center'
				style={{
					backgroundColor: color ?? undefined,
				}}
			>
				<Image
					src={image}
					alt={imageAlt}
					width={1440}
					height={900}
					className='p-4 z-10 relative'
				/>
				{backgroundImage && (
					<Image src={backgroundImage} alt={imageAlt} fill />
				)}
			</div>
			<div className='flex flex-col gap-6'>
				<h3>
					<StaggeredText>{name}</StaggeredText>
				</h3>
				<hr className=' border-gray-400 border' />
				<div className='flex gap-2 flex-wrap'>
					{tags.map((tag) => (
						<span key={tag}>{tag}</span>
					))}
				</div>
			</div>
		</a>
	)
}

export default WorksSection
