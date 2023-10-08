// Components
import Head from 'next/head'
import Title from '@/components/common/Title/Title'
import SubTitle from '@/components/common/Subtitle/SubTitle'
import Button from '@/components/common/Button'

// Styles
import styled from '@/styles/Home.module.scss'
import styles from '@/styles/contact/Contact.module.scss'
import { BiAt, BiLogoInstagram, BiLogoLinkedinSquare } from 'react-icons/bi'

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
        <section className="container">
          <div className={styles.sectionContainer}>
            <div className={styles.textContainer}>
              <Title type="Xs">
                Quer ficar por dentro de todas as novidades?
              </Title>
              <SubTitle type="Default">
                Entre no canal do Telegram da Menina de UX e fique sabendo de
                todos os cursos e processos seletivos novos!
              </SubTitle>
              <div className={styles.buttonContainer}>
                <Button>Entrar no canal</Button>
              </div>
            </div>
            <img
              src="./Contact/mulher-recebendo-novidades.webp.svg"
              alt="Imagem mulher recebendo novidades"
              className={styles.contactImage}
            />
          </div>
        </section>
        <section className="container">
          <div className={styles.sectionContainer}>
            <div className={styles.textContainer}>
              <Title type="Xs">Redes Sociais</Title>
              <div>
                <SubTitle type="Default">
                  Me acompanhe nas redes sociais!
                </SubTitle>
                <SubTitle type="Default">
                  Se quiser conversar sobre projetos, eventos e afins, tem meu
                  e-mail aí!
                </SubTitle>
              </div>
              <div className={styles.buttonContainer}>
                <Button icon={BiAt} url={'mailto:becabelin@gmail.com'}>
                  E-mail
                </Button>
                <Button
                  icon={BiLogoInstagram}
                  url="https://www.instagram.com/meninadeux"
                >
                  Instagram
                </Button>
                <Button
                  icon={BiLogoLinkedinSquare}
                  url="https://www.linkedin.com/company/meninadeux/"
                >
                  LinkedIn
                </Button>
              </div>
            </div>
            <img
              src="./Contact/mulher-redes-sociais.webp.svg"
              alt="Imagem mulher redes sociais"
              className={styles.contactImage}
            />
          </div>
        </section>
      </main>
    </>
  )
}
