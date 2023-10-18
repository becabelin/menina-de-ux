// Components
import Head from 'next/head'
import Title from '@/components/common/Title/Title'
import SubTitle from '@/components/common/Subtitle/SubTitle'
import Button from '@/components/common/Button'

// Styles
import styled from '@/styles/Home.module.scss'
import styles from '@/styles/contact/Contact.module.scss'
import { BiAt, BiLogoInstagram, BiLogoLinkedinSquare } from 'react-icons/bi'
import SocialMedia from '@/components/sections/SocialMedia'
import News from '@/components/sections/News'

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
        <News />
        <SocialMedia />
      </main>
    </>
  )
}
