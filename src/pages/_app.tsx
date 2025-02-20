// pages/_app.tsx
import '../styles/globals.css'; // Certifique-se de que o caminho do CSS está correto
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
