import { db, work } from '@/lib/schema'
import Image from 'next/image'
import { Suspense } from 'react'

export default async function Works() {
	const works = await db.select().from(work)

	return (
		<section>
			<div className='cont-p gap-tile py-tile lg:flex-row'>
				<div className='top-double h-double shrink-0 lg:sticky lg:w-quint'>
					<h2>Recent work</h2>
					<p>
						Recent projects that i worked on focused on human
						centricity and lean methodology
					</p>
				</div>
				<Suspense>
					<div className='w-full gap-tile'>
						{works.map((work) => (
							<WorkCard key={work.id} {...work} />
						))}
					</div>
				</Suspense>
			</div>
		</section>
	)
}

function WorkCard(props: typeof work.$inferSelect) {
	const { image, imageAlt, title, tags, description } = props
	return (
		<div className='card'>
			<Image
				className='h-quad w-full lg:h-quint'
				src={image}
				alt={imageAlt}
				width={400}
				height={300}
			/>
			<div className='h-quad gap-3.5 border-b border-l border-backgroundSecondary bg-background px-quarter py-half'>
				<h3>{title}</h3>
				<div className='flex-row flex-wrap gap-2'>
					{tags?.map((tag) => (
						<span
							key={tag}
							className='rounded-full border border-backgroundSecondary bg-background px-4 py-2'
						>
							{tag}
						</span>
					))}
				</div>
				<p>{description}</p>
			</div>
		</div>
	)
}
