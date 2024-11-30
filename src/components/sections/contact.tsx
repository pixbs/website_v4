import ArrowD from '@/icons/base/arrow-d.svg'
import { tagsEnum } from '@/lib/drizzle'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import Headline from '../elements/headline'

interface ContactProps {
	title?: string
	description?: string
}

function Contact({
	title = "Let's collaborate",
	description = "Have a project in mind or just want to say hi? I'd love to hear from you.",
}: ContactProps) {
	return (
		<section
			id='contact'
			className='p-tile tile-stroke bg-background'
		>
			<Headline {...{ title, description }} />
			<form className='flex flex-col' action={formAction}>
				<div className='lg:flex-row gap-half lg:gap-tile pb-half lg:pb-0'>
					<div className='w-full lg:w-full'>
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
					<div className='w-sextuple shrink-0 flex-wrap'>
						<p className='h-half text-quarter leading-half'>
							Im interested in:
						</p>
						<div className='flex-row flex-wrap gap-2'>
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
				</div>
				<button
					type='submit'
					className='border-stroke h-tile gap-third flex shrink-0 flex-row items-center justify-center rounded-full border bg-background font-semibold uppercase w-full'
				>
					Send message
					<ArrowD className='size-third' />
				</button>
			</form>
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
				className='rounded-full border border-backgroundSecondary bg-background px-5 py-2 font-semibold uppercase transition-colors ease-in-out hover:border-foreground peer-checked:border-brand peer-checked:bg-brand peer-checked:text-background leading-half lg:leading-quarter'
			>
				{children}
			</label>
		</div>
	)
}

async function formAction(formData: FormData) {
	'use server'
	const headersList = await headers()
	console.log('formData: ', formData)
	console.log('ip: ', headersList.get('x-forwarded-for'))
	redirect('/success')
}

export default Contact
