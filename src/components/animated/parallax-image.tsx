'use client'

import {
	motion,
	MotionValue,
	useScroll,
	useSpring,
	useTransform,
} from 'motion/react'
import Image from 'next/image'
import { useRef } from 'react'

function useParallax(
	value: MotionValue<number>,
	distance: number,
) {
	const parallax = useTransform(
		value,
		[0, 1],
		[-distance, distance],
	)
	const smoothParallax = useSpring(parallax, {
		damping: distance,
		stiffness: distance * 10,
	})
	return smoothParallax
}

interface ParallaxImageProps {
	image: string
	imageAlt: string
	backgroundImage?: string
	color?: string
}

function ParallaxImage({
	image,
	imageAlt,
	backgroundImage,
	color,
}: ParallaxImageProps) {
	const ref = useRef(null)
	const { scrollYProgress } = useScroll({ target: ref })
	const yImage = useParallax(scrollYProgress, 40)
	const yBackground = useParallax(scrollYProgress, 50)

	return (
		<div
			className='flex relative bg-gray-600 aspect-square items-center justify-center'
			ref={ref}
		>
			<motion.div
				style={{ y: yImage }}
				className='p-4 z-10 relative group-hover:scale-110'
			>
				<Image
					src={image}
					alt={imageAlt}
					width={1440}
					height={900}
					className='p-4 z-10 relative'
				/>
			</motion.div>
			<motion.div
				className='absolute inset-0 z-0 overflow-hidden'
				style={{ y: yBackground, backgroundColor: color }}
			>
				{backgroundImage && (
					<Image
						src={backgroundImage}
						alt={imageAlt}
						fill
						className='group-hover:scale-110 transition-transform duration-500 ease-out'
					/>
				)}
			</motion.div>
		</div>
	)
}

export default ParallaxImage
