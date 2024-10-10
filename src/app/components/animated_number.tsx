'use client'

import { HTMLAttributes, useEffect, useRef } from 'react'

interface AnimatedNumProps
	extends HTMLAttributes<HTMLSpanElement> {
	children: string
}

export default function AnimatedNum(props: AnimatedNumProps) {
	const ref = useRef<HTMLSpanElement>(null)
	const { children, ...rest } = props

	useEffect(() => {
		const regex = /([0-9]{1,2}(?:\.\d+)?)([^0-9]*)/g
		const match = regex.exec(children)
		let max = 0
		let num = 0
		let unit = ''

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					num = 0
					countUp()
				}
			},
			{
				threshold: 1,
			},
		)

		const countUp = () => {
			const el = ref.current
			if (!el) return
			const step = max / 60
			ref.current.innerHTML = num.toFixed(0) + unit
			num += step
			if (num > max) return
			requestAnimationFrame(countUp)
		}

		if (match && ref.current) {
			max = parseFloat(match[1].replace(/,/g, ''))
			unit = match[2]
			console.log('unit ', unit, ' max ', max)
			ref.current.innerHTML = num.toFixed(0) + unit
			observer.observe(ref.current)
		}

		return () => observer.disconnect()
	}, [children])

	return <span {...rest} ref={ref} />
}
