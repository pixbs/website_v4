import Behance from '@/icons/logo/behance.svg'
import GitHub from '@/icons/logo/github.svg'
import LinkedIn from '@/icons/logo/linkedin.svg'

interface SocialProps {
	className?: string
}

function Social({ className }: SocialProps) {
	const links = [
		{
			href: 'https://www.linkedin.com/in/pixbs/',
			label: 'LinkedIn',
			icon: LinkedIn,
		},
		{
			href: 'https://github.com/pixbs',
			label: 'GitHub',
			icon: GitHub,
		},
		{
			href: 'https://www.behance.net/pixbs',
			label: 'Behance',
			icon: Behance,
		},
	]
	return (
		<div className={`flex ${className}`}>
			{links.map(({ href, label, icon: Icon }, index) => (
				<a
					key={index}
					href={href}
					className='size-double md:size-tile relative border-gray-400 flex items-center justify-center rounded-full border before:absolute bg-gray-600 before:bg-gray-400 before:inset-2 before:rounded-full before:opacity-0 before:transition-opacity before:duration-200 before:ease-in-out hover:before:opacity-100 [&>*]:z-10'
					aria-label={label}
				>
					<Icon className='size-6' />
				</a>
			))}
		</div>
	)
}

export default Social
