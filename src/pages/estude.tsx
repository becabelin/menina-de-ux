// Components
import Head from 'next/head'
import Title from '@/components/common/Title/Title'
import CardInfo from '@/components/common/CardInfo'
import News from '@/components/sections/News'
import SocialMedia from '@/components/sections/SocialMedia'

// Styles
import styled from '@/styles/Home.module.scss'
import styledEstude from '@/styles/Estude.module.scss'

// Utilities
import Image from 'next/image'
import CurriculumImg from '@/../public/estude/curriculo.png'
import ConnectionsImg from '@/../public/estude/conexoes-linkedin.png'
import PostItImg from '@/../public/estude/preenchendo-post-its.png'
import PuzzleImg from '@/../public/estude/quebra-cabecas.png'
import HeroImage from '@/../public/estude/mulher-estudando.png'

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
        <section className={`container ${styledEstude.hero}`}>
          <div className={styledEstude.content}>
            <Title type="Default">
              Estude com a <br /> Menina de UX
            </Title>
            <Title type="Sm">
              Aprenda sobre carreira, currículo, design e <br /> tecnologia com
              os vários conteúdos gratuitos aqui!
            </Title>
          </div>

          <div className={styledEstude.content}>
            <Image src={HeroImage} alt="mulher estudando" />
          </div>
        </section>
        <section className={`container ${styledEstude.learn}`}>
          <Title type="Sm">O que você quer aprender hoje?</Title>
          {/* slider case */}
          <div className={styledEstude.cards}>
            <CardInfo
              type="Disabled"
              alt="/"
              src={CurriculumImg.src}
              containerTitle="Currículo de Milhões"
              containerDescription="Aprenda a criar o currículo campeão para enviar nos processos seletivos
              e descubra coisas super importantes que você não sabia antes!"
            />
            <CardInfo
              type="Disabled"
              alt="/"
              src={ConnectionsImg.src}
              containerTitle="O Poder do LinkedIn"
              containerDescription="Tudo sobre a maior rede profissional de todas e as melhores dicas para deixar o seu perfil atrativo para recrutadores!"
            />
            <CardInfo
              type="Active"
              alt="/"
              src={PostItImg.src}
              containerTitle="Card Sorting"
              containerDescription="Conheça mais sobre essa ferramenta bastante utilizada durante para trabalhar a arquitetura de informação de um site ou aplicativo!"
            />
            <CardInfo
              type="Active"
              alt="/"
              src={PuzzleImg.src}
              containerTitle="Proposta de Valor"
              containerDescription="O que é, como fazer e como ela pode mudar o seu negócio. Hoje, no Menina de UX repórter!"
            />
          </div>
        </section>
        <News />
        <SocialMedia />
      </main>
    </>
  )
}
