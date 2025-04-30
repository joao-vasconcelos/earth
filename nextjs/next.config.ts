/* * */

import { type NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

/* * */

const nextConfig: NextConfig = {
	reactStrictMode: true,
	async redirects() {
		return [
			{ destination: '/geobus', permanent: false, source: '/' },
		];
	},
};

/* * */

export default createNextIntlPlugin()(nextConfig);
