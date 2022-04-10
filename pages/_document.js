import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/*  */}
        {/* <link rel='stylesheet' href='https://export.sketch.com/shares/90bb7071-06f8-48c3-ac16-cbd122004688/tokens/css' /> */}
        <link rel='stylesheet' href='https://use.typekit.net/gtf6avi.css' />
        {/*  */}
        <meta name='apple-mobile-web-app-title' content='Register' />
        <meta name='application-name' content='Register' />
        <meta name='description' content='CHEF POINT Register Terminal' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='theme-color' content='#ffffff' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#ff0000' />
        <meta name='HandheldFriendly' content='true' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
