interface LoaderProps {
	isStatic?: boolean
}

function Loader({ isStatic = false }: LoaderProps) {
	return (
		<div className='fixed z-[999] inset-0 base-grid pointer-events-none'>
			{Array.from({ length: 6 }).map((_, i) => (
				<div
					key={i}
					className={` bg-gray-800 border-b-[1rem] border-b-gray-600 ${i > 0 && 'border-l border-l-gray-400'} ${i > 3 && 'hidden lg:block'} ${!isStatic && 'animate-move-out'}`}
					style={{ animationDelay: `${i * 0.1 + 0.1}s` }}
				/>
			))}
		</div>
	)
}

export default Loader
