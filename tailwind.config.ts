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
				sextuple: 'calc(var(--tile-size) * 6)',
			},
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				backgroundSecondary: 'var(--background-secondary)',
				brand: 'var(--brand)',
			},
		},
	},
	plugins: [],
}
export default config
