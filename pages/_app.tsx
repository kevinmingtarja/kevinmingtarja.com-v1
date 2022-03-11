import type { AppProps } from "next/app"
import Analytics from "scripts/analytics"

import Layout from "~/components/Layout"

import "../styles/globals.css"
import "../styles/fonts.css"

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Analytics />
      <Component {...pageProps} />
    </Layout>
  )
}
export default App
