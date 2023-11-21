// Components
import Head from 'next/head'
import News from '@/components/sections/News'
import SocialMedia from '@/components/sections/SocialMedia'

// Styles
import styled from '@/styles/Home.module.scss'
import styles from '@/styles/contact/Contact.module.scss'

// Utilities
// Hooks
// Interfaces

export default function Home() {
  return (
    <>
      <Head>
        <title>Contato</title>
        <meta name="Contato" content="página de contato do site Menina de UX" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styled.containerHome}>
        <div className={styles.animationContainer}>
          <News />
          <SocialMedia />
        </div>
      </main>
    </>
  )
}
