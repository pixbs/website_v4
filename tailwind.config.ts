import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			spacing: {
				tile: 'var(--tile-size)',
				half: 'calc(var(--tile-size) / 2)',
				quarter: 'calc(var(--tile-size) / 4)',
				double: 'calc(var(--tile-size) * 2)',
				triple: 'calc(var(--tile-size) * 3)',
				quad: 'calc(var(--tile-size) * 4)',
				quint: 'calc(var(--tile-size) * 5)',
				sextuple: 'calc(var(--tile-size) * 6)',
			},
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				backgroundSecondary: 'var(--background-secondary)',
				brand: 'var(--brand)',
			},
			fontSize: {
				tile: 'var(--tile-size)',
				oneAndHalf: 'calc(var(--tile-size) / 1.5)',
				half: 'calc(var(--tile-size) / 2)',
				third: 'calc(var(--tile-size) / 3)',
				quarter: 'calc(var(--tile-size) / 4)',
			},
			keyframes: {
				'fade-out': {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' },
				},
				'move-out': {
					'from': { transform: 'translateY(0%)' },
					'to': { transform: 'translateY(-100%)' },
				}
			},
			animation: {
				'fade-out': 'fade-out 1s ease-in-out',
				'move-out': 'move-out 1s ease-in-out forwards',
			},
		},
	},
	plugins: [],
}
export default config
