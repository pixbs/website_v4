import { db, work } from '@/lib/drizzle'
import Grid from 'elements/grid'
import WorkCard from 'elements/work-card'
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

export default WorksSection
