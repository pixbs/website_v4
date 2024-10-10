'use client'

import { useEffect, useRef, useState } from 'react'

export default function Tiles() {
	const [tileAmount, setTileAmount] = useState(0)
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (!ref.current) return
		let tileSize = 0
		let x = 0
		let y = 0
		const isMobile = navigator.maxTouchPoints > 0

		function updateProximity(x: number, y: number) {
			if (!ref.current) return
			const tiles = ref.current.querySelectorAll(
				'.tile',
			) as NodeListOf<HTMLElement>

			tiles.forEach((tile) => {
				if (ref.current === null) return
				const rect = tile.getBoundingClientRect()
				const distance = Math.sqrt(
					Math.pow(x - rect.x - rect.width / 2, 2) +
						Math.pow(y - rect.y - rect.height / 2, 2),
				)
				const radious =
					ref.current.clientWidth > 1000
						? ref.current.clientWidth / 7
						: ref.current.clientWidth / 3
				tile.style.borderRadius = `${Math.max(
					tileSize * (1 - distance / radious),
					0,
				)}%`
			})
		}

		const calculateTileAmount = () => {
			if (!ref.current) return
			tileSize =
				(window.innerWidth / 100) *
				parseFloat(
					getComputedStyle(
						document.documentElement,
					).getPropertyValue('--tile-size'),
				)
			setTileAmount(
				Math.floor(
					(ref.current.clientWidth * ref.current.clientHeight) /
						(tileSize * tileSize),
				),
			)
		}

		const resetProximity = () => {
			if (!ref.current) return
			const tiles = ref.current.querySelectorAll(
				'.tile',
			) as NodeListOf<HTMLElement>
			tiles.forEach((tile) => {
				const ttile = tile as HTMLElement
				ttile.style.borderRadius = '0%'
			})
		}

		let mouseIn = false
		function autoPlay() {
			if (!ref.current || mouseIn) return
			const screenWidth = ref.current.clientWidth
			const screenHeight = ref.current.clientHeight
			const offset = 100
			const speed = screenWidth / 500
			updateProximity(x, y)
			x += speed
			y =
				(Math.sin(x / (screenWidth / 5)) * screenHeight) / 3 +
				screenHeight / 2
			if (x > screenWidth + offset) x = -offset
			if (y > screenHeight + offset) y = -offset

			requestAnimationFrame(autoPlay)
		}
		autoPlay()
		calculateTileAmount()
		window.addEventListener('resize', calculateTileAmount)
		if (!isMobile) {
			window.addEventListener('mousemove', (event) => {
				mouseIn = true
				updateProximity(event.clientX, event.clientY)
			})
		}
		window.addEventListener('mouseout', () => {
			mouseIn = false
			autoPlay()
		})
		return () => {
			window.removeEventListener('resize', calculateTileAmount)
			window.removeEventListener('mousemove', resetProximity)
			window.removeEventListener('mouseout', resetProximity)
			resetProximity()
		}
	}, [])

	return (
		<div
			className='tile-grid absolute inset-0 -z-10 flex-wrap'
			ref={ref}
		>
			{Array.from({ length: tileAmount }).map((_, index) => (
				<Tile key={index} />
			))}
		</div>
	)
}

const Tile = () => {
	return (
		<div className={`relative size-tile bg-brand`}>
			<div className='tile absolute inset-0 border-r border-t border-backgroundSecondary bg-background' />
		</div>
	)
}
