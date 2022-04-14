import BrowserConfig from '../services/BrowserConfig';
import Header from '../components/header/Header.js';
import Footer from '../components/footer/Footer.js';

import '../styles/reset.css';
import '../styles/globals.css';
import '../styles/variables.css';
import '../styles/colors.css';
import '../styles/widths.css';

export default function JoaoEarth({ Component, pageProps }) {
  return (
    <>
      <BrowserConfig />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
