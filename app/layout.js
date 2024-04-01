/* * */

import '@/styles/reset.css';
import '@/styles/globals.css';
import '@/styles/variables.css';
import '@/styles/widths.css';

/* * */

import { Providers } from './providers';
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
  metadataBase: process.env.VERCEL_URL ? new URL(`https://${process.env.VERCEL_URL}`) : new URL(`http://0.0.0.0:${process.env.PORT || 3000}`),
  title: 'Earth',
  description: 'João de Vasconcelos',
};

/* * */

export default function RootLayout({ children }) {
  return (
    <html className={openSans.variable}>
      <body>
        <Analytics />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
