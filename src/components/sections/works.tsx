import { db, work } from '@/lib/drizzle'
import Grid from 'elements/grid'
import Title from 'elements/title'
import WorkCard from 'elements/work-card'

async function WorksSection() {
	const works = await db.select().from(work)

	return (
		<section
			id='works'
			className='base-grid border-b border-gray-400'
		>
			<div className='col-start-2 col-end-4 lg:col-end-6 py-20'>
				<Title
					title='Recent work'
					description="Recent projects that I've been working on that include user-centricity, and lean approach"
				/>
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
