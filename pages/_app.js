import Head from 'next/head';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Challenge</title>
      </Head>
      <>
        <Component {...pageProps} />
      </>
      <footer>
        <h5>
          <a href="https://github.com/janper231" target="_blank">
            By @janper231
          </a>
        </h5>
      </footer>
    </>
  );
}

export default MyApp;
