/* * */

import { MainWrapper } from '@/components/MainWrapper';
import { ThemeContextProvider } from '@/contexts/Theme.context';
import { availableFormats } from '@/i18n/config';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { NextIntlClientProvider } from 'next-intl';
import { Work_Sans } from 'next/font/google';

/* * */

const workSans = Work_Sans({
	display: 'swap',
	subsets: ['latin'],
	variable: '--font-work-sans',
	weight: ['400', '500', '600', '700'],
});

export const metadata = {
	description: 'Hey! I`m João de Vasconcelos. Come take a look at my work :)',
	metadataBase: process.env.VERCEL_URL ? new URL(`https://${process.env.VERCEL_URL}`) : new URL(`http://0.0.0.0:${process.env.PORT || 3000}`),
	title: 'Earth › João',
};

/* * */

export default function RootLayout({ children }) {
	return (
		<ThemeContextProvider>
			<html className={workSans.variable} data-theme="planet" lang="en">
				<body>
					<NextIntlClientProvider formats={availableFormats}>
						{/* <PostHogPageView /> */}
						<MainWrapper>
							{children}
						</MainWrapper>
					</NextIntlClientProvider>
				</body>
			</html>
			<Analytics />
			<SpeedInsights />
		</ThemeContextProvider>
	);
}
