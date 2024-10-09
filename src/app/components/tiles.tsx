'use client'

import { useEffect, useState } from 'react'

export default function Tiles() {
	const [tileAmount, setTileAmount] = useState(0)

	const calculateTileAmount = () => {
		const el = document.querySelector('.tile-grid')

		if (!el) return

		const tileSize =
			(window.innerWidth / 100) *
			parseFloat(
				getComputedStyle(
					document.documentElement,
				).getPropertyValue('--tile-size'),
			)
		setTileAmount(
			Math.floor(
				(el.clientWidth * el.clientHeight) /
					(tileSize * tileSize),
			),
		)
	}

	useEffect(() => {
		const el = document.querySelector('.tile-grid')
		if (!el) return

		calculateTileAmount()
		window.addEventListener('resize', calculateTileAmount)
		return () => {
			window.removeEventListener('resize', calculateTileAmount)
		}
	}, [])

	return (
		<div className='tile-grid absolute inset-0 -z-10 flex-wrap'>
			{Array.from({ length: tileAmount }).map((_, index) => (
				<Tile key={index} />
			))}
		</div>
	)
}

const Tile = () => {
	return (
		<div className={`relative size-tile bg-brand`}>
			<div className='absolute inset-0 rounded-lg border-r border-t border-backgroundSecondary bg-background' />
		</div>
	)
}
