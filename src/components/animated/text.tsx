'use client'
import { motion } from 'motion/react'

interface AnimatedTextProps {
	children: string
}

function StaggeredText({ children }: AnimatedTextProps) {
	const defaultAnimations = {
		hidden: {
			translateY: '-100%',
		},
		visible: {
			translateY: '0%',
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
							staggerChildren: 0.05,
							delayChildren: index * 0.15,
						}}
						key={`${index}-word`}
						className='inline-block relative overflow-hidden'
					>
						{word.split('').map((char, index) => (
							<motion.span
								variants={defaultAnimations}
								transition={{ ease: 'easeInOut' }}
								key={index}
								className='inline-block text-nowrap relative'
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
