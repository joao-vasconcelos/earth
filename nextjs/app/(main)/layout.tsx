/* * */

import Providers from '@/app/providers';
import { MainWrapper } from '@/components/MainWrapper';
import { PostHogPageView } from '@/components/PostHogPageView';
import { availableFormats } from '@/i18n/config';
import { Analytics } from '@vercel/analytics/react';
import { NextIntlClientProvider } from 'next-intl';
import { Open_Sans } from 'next/font/google';

/* * */

import '@/styles/reset.css';
import '@/styles/globals.css';
import '@/styles/variables.css';
import '@/styles/widths.css';

/* * */

const openSans = Open_Sans({
	display: 'swap',
	subsets: ['latin'],
	variable: '--font-openSans',
	weight: ['400', '700'],
});

export const metadata = {
	description: 'Hey! I`m João de Vasconcelos. Come take a look at my work :)',
	metadataBase: process.env.VERCEL_URL ? new URL(`https://${process.env.VERCEL_URL}`) : new URL(`http://0.0.0.0:${process.env.PORT || 3000}`),
	title: 'Earth › João',
};

/* * */

export default function RootLayout({ children }) {
	return (
		<html className={openSans.variable}>
			<Analytics />
			<Providers>
				<body>
					<NextIntlClientProvider formats={availableFormats}>
						<PostHogPageView />
						<MainWrapper>
							{children}
						</MainWrapper>
					</NextIntlClientProvider>
				</body>
			</Providers>
		</html>
	);
}
