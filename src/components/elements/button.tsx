function Button(
	props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) {
	const { children, ...rest } = props
	return (
		<button
			className='relative border-gray-400 gap-6 flex flex-col py-6 px-10 items-center justify-center rounded-full border bg-gray-600 font-semibold uppercase group overflow-hidden before:absolute before:inset-1 before:rounded-full before:bg-brand before:opacity-0 before:transition-opacity before:duration-200 before:ease-in-out hover:before:opacity-100'
			{...rest}
		>
			<div className='overflow-hidden flex flex-col leading-tight relative'>
				<div className='flex gap-6 group-hover:-translate-y-full transition-transform ease-in-out duration-200'>
					{children}
				</div>
				<div className='flex gap-6 absolute top-0 translate-y-full group-hover:translate-y-[0%] transition-transform ease-in-out duration-200'>
					{children}
				</div>
			</div>
		</button>
	)
}

export default Button
