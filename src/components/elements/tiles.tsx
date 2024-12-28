'use client'

import { useEffect, useRef, useState } from 'react'

function Tiles() {
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const containerRef = useRef<HTMLDivElement>(null)
	const [dimensions, setDimensions] = useState({
		width: 0,
		height: 0,
	})
	const [mousePos, setMousePos] = useState({
		x: -1000,
		y: -1000,
	})
	const [colors] = useState({
		tileBg: '#161616',
		border: '#2D2D2D',
		revealBg: '#F22F57',
	})

	const [rows, setRows] = useState(18)
	const BASE_INFLUENCE_TILES = 2.5

	const calculateRows = () => {
		const tileSize = parseFloat(
			getComputedStyle(
				document.documentElement,
			).getPropertyValue('--tile-size'),
		)
		return Math.round(100 / tileSize)
	}

	const calculateInfluenceRadius = (tileSize: number) => {
		return tileSize * BASE_INFLUENCE_TILES
	}

	const [influenceRadius, setInfluenceRadius] = useState(150)

	useEffect(() => {
		const updateDimensions = () => {
			if (containerRef.current) {
				const width = containerRef.current.offsetWidth
				const height = containerRef.current.offsetHeight
				const newRows = calculateRows()
				const tileSize = width / newRows
				const newInfluenceRadius =
					calculateInfluenceRadius(tileSize)

				setDimensions({ width, height })
				setRows(newRows)
				setInfluenceRadius(newInfluenceRadius)
			}
		}

		updateDimensions()
		window.addEventListener('resize', updateDimensions)

		return () => {
			window.removeEventListener('resize', updateDimensions)
		}
	}, [])

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return

		const ctx = canvas.getContext('2d')
		if (!ctx) return

		const tileSize = dimensions.width / rows
		const cols = Math.ceil(dimensions.height / tileSize)

		ctx.fillStyle = colors.revealBg
		ctx.fillRect(0, 0, dimensions.width, dimensions.height)

		const drawTile = (
			x: number,
			y: number,
			distanceRatio: number,
		) => {
			const tileX = x * tileSize
			const tileY = y * tileSize

			ctx.fillStyle = colors.tileBg
			ctx.strokeStyle = colors.border
			ctx.lineWidth = 1

			if (distanceRatio > 0) {
				ctx.beginPath()

				const maxRadius = tileSize / 2
				const centerX = tileX + maxRadius
				const centerY = tileY + maxRadius

				const points = []
				const numPoints = 40

				for (let i = 0; i < numPoints; i++) {
					const angle = (i / numPoints) * Math.PI * 2

					const squareX =
						tileX +
						(angle < Math.PI / 2 || angle > (3 * Math.PI) / 2
							? tileSize
							: 0)
					const squareY =
						tileY + (angle < Math.PI ? tileSize : 0)

					const circleX = centerX + Math.cos(angle) * maxRadius
					const circleY = centerY + Math.sin(angle) * maxRadius

					const x =
						squareX + (circleX - squareX) * distanceRatio
					const y =
						squareY + (circleY - squareY) * distanceRatio

					points.push({ x, y })
				}

				ctx.beginPath()
				ctx.moveTo(points[0].x, points[0].y)
				for (let i = 1; i < points.length; i++) {
					ctx.lineTo(points[i].x, points[i].y)
				}
				ctx.closePath()
				ctx.fill()
				ctx.stroke()
			} else {
				ctx.beginPath()
				ctx.rect(tileX, tileY, tileSize, tileSize)
				ctx.fill()
				ctx.stroke()
			}
		}

		const draw = () => {
			ctx.fillStyle = colors.revealBg
			ctx.fillRect(0, 0, dimensions.width, dimensions.height)

			for (let x = 0; x < rows; x++) {
				for (let y = 0; y < cols; y++) {
					const tileX = x * tileSize + tileSize / 2
					const tileY = y * tileSize + tileSize / 2

					const distance = Math.sqrt(
						Math.pow(mousePos.x - tileX, 2) +
							Math.pow(mousePos.y - tileY, 2),
					)

					const distanceRatio = Math.max(
						0,
						1 - distance / influenceRadius,
					)
					drawTile(x, y, distanceRatio)
				}
			}
		}

		draw()
	}, [dimensions, mousePos, colors, rows, influenceRadius])

	useEffect(() => {
		const handleGlobalMouseMove = (e: MouseEvent) => {
			const rect = canvasRef.current?.getBoundingClientRect()
			if (rect) {
				setMousePos({
					x: e.clientX - rect.left,
					y: e.clientY - rect.top,
				})
			}
		}

		const handleGlobalMouseLeave = () => {
			setMousePos({ x: -1000, y: -1000 })
		}

		document.addEventListener(
			'mousemove',
			handleGlobalMouseMove,
		)
		document.addEventListener(
			'mouseleave',
			handleGlobalMouseLeave,
		)

		return () => {
			document.removeEventListener(
				'mousemove',
				handleGlobalMouseMove,
			)
			document.removeEventListener(
				'mouseleave',
				handleGlobalMouseLeave,
			)
		}
	}, [])

	return (
		<div ref={containerRef} className='absolute inset-0'>
			<canvas
				ref={canvasRef}
				width={dimensions.width}
				height={dimensions.height}
				className='absolute top-0 left-0 pointer-events-none bg-brand'
			/>
		</div>
	)
}

export default Tiles
