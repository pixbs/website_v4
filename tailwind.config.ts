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
			transparent: 'transparent',
			foreground: 'white',
			'foreground-sec': '#959595',
			stroke: '#2D2D2D',
			background: '#161616',
			'background-sec': '#111111',
			brand: '#F22F57',
		},
		fontSize: {
			tile: 'var(--tile-size)',
			oneAndHalf: 'calc(var(--tile-size) / 1.5)',
			half: 'calc(var(--tile-size) / 2)',
			third: 'calc(var(--tile-size) / 3)',
			quarter: 'calc(var(--tile-size) / 4)',
			double: 'calc(var(--tile-size) * 2)',
		},
		extend: {
			spacing: {
				tile: 'var(--tile-size)',
				half: 'calc(var(--tile-size) / 2)',
				third: 'calc(var(--tile-size) / 3)',
				quarter: 'calc(var(--tile-size) / 4)',
				double: 'calc(var(--tile-size) * 2)',
				triple: 'calc(var(--tile-size) * 3)',
				quad: 'calc(var(--tile-size) * 4)',
				quint: 'calc(var(--tile-size) * 5)',
				sextuple: 'calc(var(--tile-size) * 6)',
			},
		},
	},
	plugins: [tileGridPlugin],
} satisfies Config
