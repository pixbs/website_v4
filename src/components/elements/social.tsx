import Behance from '@/icons/logo/behance.svg'
import GitHub from '@/icons/logo/github.svg'
import LinkedIn from '@/icons/logo/linkedin.svg'
import Telegram from '@/icons/logo/telegram.svg'

function Social() {
	const links = [
		{
			href: 'https://linkedin.com/',
			label: 'LinkedIn',
			icon: LinkedIn,
		},
		{
			href: '/',
			label: 'GitHub',
			icon: GitHub,
		},
		{
			href: '/',
			label: 'Behance',
			icon: Behance,
		},
		{
			href: '/',
			label: 'Telegram',
			icon: Telegram,
		},
	]
	return (
		<div className='flex-row'>
			{links.map(({ href, label, icon: Icon }, index) => (
				<a
					key={index}
					href={href}
					className='size-tile relative border-stroke flex items-center justify-center rounded-full border before:absolute bg-background before:bg-stroke before:inset-1 before:rounded-full before:opacity-0 before:transition-opacity before:duration-200 before:ease-in-out hover:before:opacity-100 [&>*]:z-10'
					aria-label={label}
				>
					<Icon className='size-third' />
				</a>
			))}
		</div>
	)
}

export default Social
