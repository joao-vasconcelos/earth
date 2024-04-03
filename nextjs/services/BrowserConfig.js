import Head from 'next/head';

export default function BrowserConfig() {
  return (
    <>
      <Head>
        <title>João › Earth</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' />
        <meta name='theme-color' content='#ffffff' media='(prefers-color-scheme: light)' />
        <meta name='theme-color' content='#1e1e1e' media='(prefers-color-scheme: dark)' />
      </Head>
    </>
  );
}
