export default function Loader() {
	return (
		<div className='pointer-events-none fixed inset-0 z-[999] flex-row items-stretch justify-stretch'>
			{Array.from({ length: 9 }).map((_, index) => (
				<div
					key={index}
					className={`h-full w-full animate-move-out border-b border-l border-background bg-[#111] ${index >= 4 && 'max-md:hidden'} ${index >= 5 && 'max-lg:hidden'}`}
					style={{
						animationDelay: `${index * 0.1}s`,
					}}
				/>
			))}
		</div>
	)
}
