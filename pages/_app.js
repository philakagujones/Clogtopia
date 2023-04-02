import '@/styles/globals.css'
import { NextUIProvider } from '@nextui-org/react';
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Script src="https://unpkg.com/focus-visible@5.0.2/dist/focus-visible.js" defer/>
    <Script src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js" />
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </>
  );
}

export default MyApp;