import BrowserConfig from '../services/BrowserConfig';
import Header from '../components/global/Header';
import Footer from '../components/global/Footer';
import { usePostHog } from '../services/Posthog';
import { Analytics } from '@vercel/analytics/react';

import '../styles/reset.css';
import '../styles/globals.css';
import '../styles/variables.css';
import '../styles/colors.css';
import '../styles/widths.css';

export default function JoaoEarth({ Component, pageProps }) {
  //
  // ANALYTICS
  usePostHog(process.env.NEXT_PUBLIC_POSTHOG_API_KEY, {
    api_host: 'https://app.posthog.com',
    loaded: (posthog) => {
      if (process.env.NODE_ENV === 'development') posthog.opt_out_capturing();
    },
  });

  return (
    <>
      <BrowserConfig />
      <Header />
      <Component {...pageProps} />
      <Footer />
      <Analytics />
    </>
  );
}
