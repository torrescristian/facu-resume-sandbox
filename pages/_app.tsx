import '../styles/globals.css'
import '../styles/escritorio.css'
import '../styles/tablet.css'
import '../styles/styles.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
