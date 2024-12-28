import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const tileGridPlugin = plugin(({ matchUtilities, theme }) => {
	matchUtilities(
		{
			tile: (value) => ({
				'background-image': `linear-gradient(${value} 1px, transparent 1px), linear-gradient(90deg, ${value} 1px, transparent 1px)`,
				'background-size': 'var(--tile-size) var(--tile-size)',
			}),
		},
		{
			values: theme('colors'),
		},
	)
})

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			gray: {
				'000': 'white',
				200: '#959595',
				400: '#2D2D2D',
				600: '#161616',
				800: '#111',
			},
			brand: '#F22F57',
		},
		fontSize: {
			big: '4rem',
			medium: '3.2rem',
			small: '2rem',
			caption: '0.7',
			sm: '14px',
			md: '16px',
			lg: '18px',
			xl: '20px',
			'2xl': '24px',
		},
		extend: {
			gridTemplateColumns: {
				sm: '1fr repeat(2, 4fr) 1fr',
				md: '1fr repeat(2, 3fr) 1fr',
				lg: '1fr repeat(4, 3fr) 1fr',
				xl: '1fr repeat(4, 3fr) 1fr',
			},
			// Spacing that replicates one row of the grid
			spacing: {
				tile: 'var(--tile-size)',
				double: 'calc(var(--tile-size) * 2)',
			},
			lineHeight: {
				tile: 'var(--tile-size)',
				'one-half': 'calc(var(--tile-size) * 1.5)',
			},
		},
	},
	plugins: [tileGridPlugin],
} satisfies Config
