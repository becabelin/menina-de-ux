// Components
import Head from 'next/head'
import Title from '@/components/common/Title/Title'
import SubTitle from '@/components/common/Subtitle/SubTitle'
import Button from '../components/common/Button'
import Image from 'next/image'
import Card from '@/components/common/Card'

// Styles
import styles from '@/styles/Index.module.scss'
import styled from '@/styles/Home.module.scss'

// Utilities
import { FaLinkedin, FaInstagram } from 'react-icons/fa'
import { MdAlternateEmail } from 'react-icons/md'

// Hooks
// Interfaces

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styled.containerHome}>
        <section className={styles.inicioAjudando}>
          <div className={`container ${styles.containerFlex}`}>
            <div className={styles.textLeft}>
              <div className={styles.title}>
                <Title type="Default">Ajudando meninas como eu</Title>
              </div>
              <div className={styles.subtitle}>
                <SubTitle type="Lg">
                  Encontre os melhores cursos e processos seletivos na área de
                  tecnologia e ainda aprenda sobre o mundo do UX Design!
                </SubTitle>
              </div>
              <div className={styles.inicioButton}>
                <div>
                  <Button url="/cursos" type="Blue">
                    Descobrir cursos
                  </Button>
                </div>
                <div>
                  <Button type="Pink">Processos Seletivos</Button>
                </div>
              </div>
            </div>
            <div className={styles.inicioImg}>
              <Image
                className={styles.img}
                src="./Inicio/mulher-estudando.webp.svg"
                width={428.39}
                height={428.39}
                alt="Imagem de uma mulher estudando"
              />
            </div>
          </div>
        </section>

        <section className={styles.inicioCarreira}>
          <div className="container">
            <div className={styles.inicioImg}>
              <Image
                className={styles.img}
                src="./Inicio/aprovado.webp.svg"
                width={447}
                height={461}
                alt="Imagem de um homem sinalizando que está aprovado"
              />
            </div>
          </div>
          <div className="container">
            <div className={styles.title}>
              <Title type="Sm">Comece a sua carreira</Title>
            </div>
            <div className={styles.subtitle}>
              <SubTitle type="Default">
                Aprenda mais sobre a área de tech e design, tenha acesso a
                conteúdos incríveis e entre no mercado de trabalho com chave de
                ouro!
              </SubTitle>
            </div>
            <div className={styles.inicioButton}>
              <Button type="Blue">Estude com a Menina de UX!</Button>
            </div>
          </div>
        </section>

        <section className={styles.inicioProjeto}>
          <div className={`container ${styles.containerFlex}`}>
            <div className={styles.textRight}>
              <div className={styles.title}>
                <Title type="Sm">Crie seu primeiro projeto em UX Design</Title>
              </div>
              <div className={styles.subtitle}>
                <SubTitle type="Default">
                  Com um template no Figma e os posts de guia, você vai
                  conseguir se guiar para construir o seu case do zero!e.
                </SubTitle>
                <br />
                <SubTitle type="Default">
                  Clique agora no botão abaixo e faça o download do template no
                  Figma!
                </SubTitle>
              </div>
              <div className={styles.inicioButton}>
                <Button type="Blue">Crie seu primeiro projeto!</Button>
                <Button type="Pink">Baixar template</Button>
              </div>
            </div>
            <div className={styles.inicioImg}>
              <Image
                className={styles.img}
                src="./Inicio/primeiro_projeto.svg"
                width={447}
                height={461}
                alt="Imagem de uma mulher no computador"
              />
            </div>
          </div>
        </section>

        <section className={styles.inicioCurso}>
          <div className="container">
            <div className={styles.title}>
              <Title type="Xs">CURSOS TOPS</Title>
            </div>
            <div className={styles.title}>
              <Title type="Lg">Os melhores em várias áreas</Title>
            </div>
            <div className={styles.card}>
              <ul className={styles.cardList}>
                <li>
                  <Card
                    type="Primary"
                    src="./Inicio/curso-em-video.svg"
                    alt="alt img"
                    title="Curso em vídeo"
                  />
                </li>
                <li>
                  <Card
                    type="Primary"
                    src="./Inicio/dio.webp.svg"
                    alt="alt img"
                    title="Digital Innovation One"
                  />
                </li>
                <li>
                  <Card
                    type="Primary"
                    src="./Inicio/estacaohack.webp.svg"
                    alt="alt img"
                    title="Estação Hack"
                  />
                </li>
                <li>
                  <Card
                    type="Primary"
                    src="./Inicio/mundo-senai.svg"
                    alt="alt img"
                    title="Mundo SENAI"
                  />
                </li>
              </ul>
            </div>
            <div className={`${styles.inicioButton} ${styles.centerButton}`}>
              <Button>Descobrir mais cursos</Button>
            </div>
          </div>

          <div className="container">
            <div className={styles.title}>
              <Title type="Xs">ÚLTIMOS PROCESSOS SELETIVOS</Title>
            </div>
            <div className={styles.title}>
              <Title type="Lg">Para você ser o melhor no que faz</Title>
            </div>
            <div className={styles.card}>
              <ul className={styles.cardList}>
                <li>
                  <Card
                    type="Primary"
                    src="./Inicio/soulbilingue.webp.svg"
                    alt="alt img"
                    title="Soul Bilíngue"
                    subtitle="Inscrições até 10/12/22"
                    href="#"
                  />
                </li>
                <li>
                  <Card
                    type="Primary"
                    src="./Inicio/martechacademy.webp.svg"
                    alt="alt img"
                    title="Martech Academy"
                    subtitle="Inscrições até 28/11/22"
                    href="#"
                  />
                </li>
                <li>
                  <Card
                    type="Primary"
                    src="./Inicio/Cursos.svg"
                    alt="alt img"
                    title="Capacitação Gratuita em Introdução à Programação"
                    subtitle="Inscrições por tempo limitado!"
                    href="#"
                  />
                </li>
                <li>
                  <Card
                    type="Primary"
                    src="./Inicio/curso.svg"
                    alt="alt img"
                    title="Bolsas Santander Tecnologia | Santander Gamer Pro"
                    subtitle="Inscrições até 24/11/22"
                    href="#"
                  />
                </li>
              </ul>
            </div>
            <div className={`${styles.inicioButton} ${styles.centerButton}`}>
              <Button>Veja mais</Button>
            </div>
          </div>
        </section>

        <section className={styles.inicioNovidades}>
          <div className={`container ${styles.containerFlex}`}>
            <div className={styles.textLeft}>
              <div className={styles.title}>
                <Title type="Sm">
                  Quer ficar por dentro de todas as novidades?
                </Title>
              </div>
              <div className={styles.subtitle}>
                <SubTitle type="Default">
                  Entre no canal do Telegram da Menina de UX e fique sabendo de
                  todos os cursos e processos seletivos novos!
                </SubTitle>
              </div>
              <div className={styles.inicioButton}>
                <Button type="Blue">Entrar no canal</Button>
              </div>
            </div>
            <div className={styles.inicioImg}>
              <Image
                className={styles.img}
                src="./Inicio/mulher-recebendo-novidades.webp.svg"
                width={447}
                height={461}
                alt="Imagem de uma mulher com o celular nas mãos"
              />
            </div>
          </div>
        </section>

        <div className={styles.inicioSocial}>
          <div className={`container ${styles.containerFlex}`}>
            <div className={styles.textLeft}>
              <div className={styles.title}>
                <Title type="Sm">Redes Sociais</Title>
              </div>
              <div className={styles.subtitle}>
                <SubTitle type="Default">
                  Me acompanhe nas redes sociais!
                </SubTitle>
                <SubTitle type="Default">
                  Se quiser conversar sobre projetos, eventos e afins, tem meu
                  e-mail também!
                </SubTitle>
              </div>
              <div className={styles.buttonSocial}>
                <Button icon={MdAlternateEmail} type="Blue">
                  E-mail
                </Button>
                <Button icon={FaInstagram} type="Blue">
                  Instagram
                </Button>
                <Button icon={FaLinkedin} type="Blue">
                  LinkedIn
                </Button>
              </div>
            </div>
            <div className={styles.inicioImg}>
              <Image
                className={styles.img}
                src="./Inicio/mulher-redes-sociais.webp.svg"
                width={447}
                height={461}
                alt="Imagem de uma mulher com auto-falante atrás de uma tela de post"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
