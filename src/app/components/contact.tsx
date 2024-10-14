import ArrowD from '@/icons/arrow-d.svg'
import { contact, db, tagsEnum } from '@/lib/schema'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'

export function Contact() {
	const headersList = headers()
	return (
		<section>
			<div className='cont-p gap-tile py-tile'>
				<div className='flex min-h-double lg:min-h-tile lg:flex-row lg:justify-between'>
					<h2>Let&apos;s collaborate</h2>
					<p className='min-w-sextuple'>
						Have a project in mind or just want to say hi?{' '}
						<br /> I&apos;d love to hear from you.
					</p>
				</div>
				<form
					className='flex flex-col gap-tile'
					action={formAction}
				>
					<div className='gap-tile lg:flex-row'>
						<input
							name='ip'
							className='hidden'
							value={headersList.get('x-forwarded-for') ?? ''}
						/>
						<div className='w-full'>
							<label htmlFor='name' className='sr-only'>
								Name
							</label>
							<input
								type='text'
								placeholder='Your name*'
								id='name'
								name='name'
								required
							/>
							<label htmlFor='email' className='sr-only'>
								Email
							</label>
							<input
								type='email'
								placeholder='Your email*'
								id='email'
								name='email'
								required
							/>
							<label htmlFor='subject' className='sr-only'>
								Subject
							</label>
							<input
								type='text'
								placeholder='A sentence what it is about'
								id='subject'
								name='subject'
							/>
						</div>
						<div className='w-sextuple shrink-0 gap-3'>
							<span className='h-half text-quarter'>
								Im interested in:
							</span>
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
					<button className='flex h-tile flex-row items-center justify-center gap-7 rounded-full border border-foreground bg-background'>
						Send
						<ArrowD className='size-6 stroke-2' />
					</button>
				</form>
			</div>
		</section>
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
				className='rounded-full border border-backgroundSecondary bg-background px-5 py-2 font-semibold uppercase transition-colors ease-in-out hover:border-foreground peer-checked:border-brand peer-checked:bg-brand peer-checked:text-background'
			>
				{children}
			</label>
		</div>
	)
}

async function formAction(formData: FormData) {
	'use server'
	const newContact: typeof contact.$inferInsert = {
		userIp:
			(formData.get('ip') as string) ?? redirect('?error=ip'),
		name:
			(formData.get('name') as string) ??
			redirect('?error=name'),
		email:
			(formData.get('email') as string) ??
			redirect('?error=email'),
		subject: (formData.get('subject') as string) ?? '',
	}
	try {
		await db.insert(contact).values(newContact)
	} catch (error) {
		redirect(`?error=${error}`)
	} finally {
		redirect('?success=true')
	}
}
