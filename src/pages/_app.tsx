// Components
import Layout from '@/components/layout'

// Styles
import '@/styles/globals.css'

// Utilities
// Hooks

// Interfaces
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
