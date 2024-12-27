function Grid() {
	const columnClass = 'bg-gray-600 border-l border-gray-400'
	return (
		<div className='absolute -z-10 inset-0 base-grid'>
			<div className='bg-gray-600' />
			<div className={columnClass} />
			<div className={columnClass} />
			<div className={columnClass} />
			<div className={`hidden ${columnClass} lg:block`} />
			<div className={`hidden ${columnClass} lg:block`} />
		</div>
	)
}

export default Grid
