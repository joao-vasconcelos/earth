import { SWRConfig } from 'swr';
import fetch from '../services/fetch.js';
import BrowserConfig from '../services/BrowserConfig';

import '../styles/reset.css';
import '../styles/globals.css';
import '../styles/variables.css';
import '../styles/colors.css';
import '../styles/widths.css';

import Header from '../components/header/Header.js';
import Footer from '../components/footer/Footer.js';

export default function LunchMenu({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher: fetch, refreshInterval: 10000 }}>
      <BrowserConfig />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </SWRConfig>
  );
}
