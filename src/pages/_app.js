/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @next/next/no-img-element */
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
