/* * */

import '@/styles/reset.css';
import '@/styles/globals.css';
import '@/styles/variables.css';
import '@/styles/widths.css';

/* * */

import dynamic from 'next/dynamic';
import Providers from './providers';
import { Analytics } from '@vercel/analytics/react';
import { Open_Sans } from 'next/font/google';

/* * */

const openSans = Open_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-openSans',
  display: 'swap',
});

export const metadata = {
  metadataBase: process.env.VERCEL_URL ? new URL(`https://${process.env.VERCEL_URL}`) : new URL(`http://0.0.0.0:${process.env.PORT}`),
  title: 'Earth › João',
  description: 'Hey! I`m João de Vasconcelos. Come take a look at my work :)',
};

/* * */

const PostHogPageView = dynamic(() => import('nextjs/componentsNew/PostHogPageView/PostHogPageView'), {
  ssr: false,
});

/* * */

export default function RootLayout({ children }) {
  return (
    <html className={openSans.variable}>
      <Analytics />
      <Providers>
        <body>
          <PostHogPageView />
          {children}
        </body>
      </Providers>
    </html>
  );
}
