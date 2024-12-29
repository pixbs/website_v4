import ArrowD from '@/icons/base/arrow-d.svg'
import { db, message, tagsEnum } from '@/lib/drizzle'
import Button from 'elements/button'
import Grid from 'elements/grid'
import Title from 'elements/title'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

function ContactSection() {
	return (
		<section id='contact' className='base-grid'>
			<div className='col-start-2 col-end-4 lg:col-end-6 py-20'>
				<Title
					title="Let's collaborate"
					description="Have a project in mind or just want to say hi? I'd love to hear from you."
				/>
				<form
					className='grid gap-y-6 gap-x-20 md:grid-cols-2'
					action={formAction}
				>
					<div className='flex flex-col gap-5'>
						<Input type='text' required max='16' id='name'>
							Your name*
						</Input>
						<Input type='email' required id='email'>
							Your email*
						</Input>
						<Input type='text' id='subject'>
							A sentence what is it about
						</Input>
					</div>
					<div className='flex flex-col gap-5'>
						<p className='py-6'>Select topics:</p>
						<div className='flex flex-row flex-wrap gap-x-2 gap-y-6 max-w-sm'>
							{tagsEnum.enumValues.map((tag) => (
								<Chip
									key={tag}
									name='tags'
									id={tag}
									value={tag}
								>
									{tag}
								</Chip>
							))}
						</div>
					</div>
					<Button type='submit'>
						<span>Send message</span>
						<ArrowD className='size-6' />
					</Button>
				</form>
			</div>
			<Grid />
		</section>
	)
}

function Input(
	props: React.InputHTMLAttributes<HTMLInputElement>,
) {
	const { children, ...rest } = props
	return (
		<>
			<label htmlFor={rest.name} className='sr-only'>
				{children}
			</label>
			<input
				className='bg-gray-600 appearance-none border-t-gray-400 border-t border-b-2 border-b-gray-000 mb-2 py-6 placeholder:text-gray-200'
				placeholder={
					typeof children === 'string' ? children : ''
				}
				name={props.id || props.name}
				{...rest}
			/>
		</>
	)
}

function Chip(
	props: React.InputHTMLAttributes<HTMLInputElement>,
) {
	const { children, ...inputProps } = props
	return (
		<div>
			<input
				type='checkbox'
				className='peer sr-only'
				{...inputProps}
			/>
			<label
				htmlFor={props.id}
				className='rounded-full border border-gray-200 bg-gray-600 px-5 py-2 transition-colors ease-in-out hover:border-gray-000 peer-checked:border-brand peer-checked:bg-brand peer-checked:text-background cursor-pointer'
			>
				{children}
			</label>
		</div>
	)
}

async function formAction(formData: FormData) {
	'use server'
	const headersList = await headers()
	const ip = headersList.get('x-forwarded-for')

	try {
		await db.insert(message).values({
			ip: ip as string,
			name: formData.get('name') as string,
			email: formData.get('email') as string,
			subject: formData.get('subject') as string,
			tags: formData.getAll(
				'tags',
			) as typeof tagsEnum.enumValues,
		})
	} catch (error) {
		console.error('Error inserting message:', error)
		throw error
	} finally {
		redirect('/success')
	}
}

export default ContactSection
