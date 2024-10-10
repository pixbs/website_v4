import Logo from '@/icons/logo.svg'
import { ImageResponse } from 'next/og'

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url)
	const title =
		searchParams.get('title') || "Welcome to Dimm's website!"
	const url = searchParams.get('url') || 'https://dimm.co'
	const size = {
		width: searchParams.get('width')
			? parseInt(searchParams.get('width')!)
			: 1200,
		height: searchParams.get('height')
			? parseInt(searchParams.get('height')!)
			: 630,
	}

	const backgroundColor = '#161616'
	const backgroundSecondaryColor = '#2d2d2d'
	const foregroundColor = 'white'
	const brandColor = '#f22f57'
	const tileSize = size.width / 10

	return new ImageResponse(
		(
			<div
				tw='flex w-full h-full flex-col'
				style={{
					backgroundImage: `linear-gradient(${backgroundSecondaryColor} 1px, transparent 1px), linear-gradient(90deg, ${backgroundSecondaryColor} 1px, transparent 1px)`,
					backgroundSize: `${tileSize}px ${tileSize}px`,
					backgroundColor: backgroundColor,
					padding: tileSize,
				}}
			>
				<div
					tw='flex flex-row items-center justify-center w-full'
					style={{
						height: tileSize,
					}}
				>
					<Logo
						tw='rounded-full mr-6'
						style={{
							backgroundColor: brandColor,
							width: tileSize / 2,
							height: tileSize / 2,
						}}
					/>
					<h1
						tw='m-0l'
						style={{
							fontSize: tileSize / 3,
							color: foregroundColor,
						}}
					>
						{url}
					</h1>
				</div>
				<h1
					tw='flex m-0 text-center justify-center items-center'
					style={{
						fontSize: tileSize / 1.5,
						width: '100%',
						height: tileSize * 2,
						color: backgroundColor,
						padding: `0 ${tileSize / 2}px`,
						backgroundColor: foregroundColor,
					}}
				>
					{title}
				</h1>
			</div>
		),
		size,
	)
}
