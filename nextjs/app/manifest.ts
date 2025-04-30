/* * */

export default function manifest() {
	return {
		description: 'João de Vasconcelos',
		display: 'standalone',
		icons: [
			{
				sizes: '192x192',
				src: '/android-chrome-192x192.png',
				type: 'image/png',
			},
			{
				sizes: '512x512',
				src: '/android-chrome-512x512.png',
				type: 'image/png',
			},
		],
		name: 'Earth',
		short_name: 'João\'s Earth',
		start_url: '/',
	};
}
