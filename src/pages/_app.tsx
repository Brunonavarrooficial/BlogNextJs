import type { AppProps } from 'next/app';
import { GlobalStyles } from '../styles/global-styles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}
