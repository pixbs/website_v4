'use client'
import {
	motion,
	useAnimationFrame,
	useMotionValue,
	useScroll,
	useSpring,
	useTransform,
	useVelocity,
	wrap,
} from 'motion/react'
import { useRef } from 'react'

interface MarqueeProps {
	text: string
	baseVelocity?: number
}

function Marquee({ text, baseVelocity = 4 }: MarqueeProps) {
	const baseX = useMotionValue(0)
	const { scrollY } = useScroll()
	const scrollVelocity = useVelocity(scrollY)
	const smoothVelocity = useSpring(scrollVelocity, {
		damping: 50,
		stiffness: 400,
	})
	const velocityFactor = useTransform(
		smoothVelocity,
		[0, 10000],
		[0, 10],
		{
			clamp: false,
		},
	)
	/**
	 * This is a magic wrapping for the length of the text - you
	 * have to replace for wrapping that works for you or dynamically
	 * calculate
	 */
	const x = useTransform(baseX, (v) => `${wrap(-25, -50, v)}%`)
	const directionFactor = useRef<number>(1)
	useAnimationFrame((t, delta) => {
		let moveBy =
			directionFactor.current * baseVelocity * (delta / 1000)
		/**
		 * This is what changes the direction of the scroll once we
		 * switch scrolling directions.
		 */
		if (velocityFactor.get() < 0) {
			directionFactor.current = -1
		} else if (velocityFactor.get() > 0) {
			directionFactor.current = 1
		}

		moveBy +=
			directionFactor.current * moveBy * velocityFactor.get()

		baseX.set(baseX.get() + moveBy)
	})

	return (
		<motion.p
			className='text-huge font-extrabold left-tile whitespace-nowrap uppercase text-gray-400 leading-[0.71]'
			style={{ x }}
		>
			{text.repeat(4)}
		</motion.p>
	)
}

export default Marquee
