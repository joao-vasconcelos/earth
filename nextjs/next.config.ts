/* * */

import { type NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

/* * */

const nextConfig: NextConfig = {
	reactStrictMode: true,
	async redirects() {
		return [

			/* DEFAULT */

			{ destination: '/blog', permanent: false, source: '/' },

			/* LEGACY */

			{ destination: '/blog/infrastructure', permanent: true, source: '/infrastructure' },

		];
	},
};

/* * */

export default createNextIntlPlugin()(nextConfig);
