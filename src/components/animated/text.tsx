'use client'
import { motion } from 'motion/react'

interface StaggeredTextProps {
	delay?: number
	duration?: number
	children?: string
}

function StaggeredText({
	children = '',
	delay = 0,
	duration = 1,
}: StaggeredTextProps) {
	const defaultAnimations = {
		hidden: {
			opacity: 0.2,
			y: '100%',
		},
		visible: {
			opacity: 1,
			y: '0%',
		},
	}

	return (
		<>
			<span className='sr-only'>{children}</span>
			<motion.span className='aria-hidden:* overflow-clip'>
				{children.split(' ').map((word, index) => (
					<motion.span
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
						transition={{
							staggerChildren: 0.005,
							delayChildren: index * 0.05 + delay,
						}}
						key={`${index}-word`}
						className='inline-block overflow-clip'
					>
						{word.split('').map((char, index) => (
							<motion.span
								variants={defaultAnimations}
								transition={{
									ease: 'easeInOut',
									duration: duration,
								}}
								key={index}
								className='inline-block text-nowrap'
							>
								{char}
							</motion.span>
						))}
						<span className='inline-block'>&nbsp;</span>
					</motion.span>
				))}
			</motion.span>
		</>
	)
}

export default StaggeredText
