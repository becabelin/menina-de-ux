// Components
import Head from 'next/head'
import Title from '@/components/common/Title/Title'
import SubTitle from '@/components/common/Subtitle/SubTitle'
import CardInfo from '@/components/common/CardInfo'

// Styles
import styled from '@/styles/Home.module.scss'
import styledEstude from '@/styles/Estude.module.scss'

// Utilities
import Image from 'next/image'
import HeroImage from '@/../public/estude/mulher-estudando-2.webp.png'
import NewsImage from '@/../public/estude/mulher-recebendo-novidades.svg'
import SocialMediaImage from '@/../public/estude/mulher-redes-sociais.svg'
import Button from '@/components/common/Button'
import { MdAlternateEmail } from 'react-icons/md'
import { AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai'
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
          <div className={styledEstude.heroTexts}>
            <Title type="Lg">Estude com a Menina de UX</Title>
            <SubTitle type="Lg">
              Aprenda sobre carreira, currículo, design e tecnologia com os
              vários conteúdos gratuitos aqui!
            </SubTitle>
          </div>
          <Image src={HeroImage} alt="mulher estudando" />
        </section>
        <section className={`container ${styledEstude.learn}`}>
          <Title type="Sm">O que você quer aprender hoje?</Title>
          {/* slider case */}
          <div className={styledEstude.cards}>
            <CardInfo
              type="Disabled"
              alt="/"
              src="https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
              containerTitle="Currículo de Milhões"
              containerDescription="Aprenda a criar o currículo campeão para enviar nos processos seletivos
              e descubra coisas super importantes que você não sabia antes!"
            />
            <CardInfo
              type="Disabled"
              alt="/"
              src="https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
              containerTitle="O Poder do LinkedIn"
              containerDescription="Tudo sobre a maior rede profissional de todas e as melhores dicas para deixar o seu perfil atrativo para recrutadores!"
            />
            <CardInfo
              type="Active"
              alt="/"
              src="https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
              containerTitle="Card Sorting"
              containerDescription="Conheça mais sobre essa ferramenta bastante utilizada durante para trabalhar a arquitetura de informação de um site ou aplicativo!"
            />
            <CardInfo
              type="Active"
              alt="/"
              src="https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
              containerTitle="Proposta de Valor"
              containerDescription="O que é, como fazer e como ela pode mudar o seu negócio. Hoje, no Menina de UX repórter!"
            />
          </div>
        </section>
        <section
          className={`container 
          ${styledEstude.news}`}
        >
          <div className={styledEstude.content}>
            <Title type="Sm">
              Quer ficar por dentro de todas as novidades?
            </Title>
            <SubTitle type="Default">
              Entre no canal do Telegram da Menina de UX e fique sabendo de
              todos os cursos e processos seletivos novos!
            </SubTitle>
            <div className={styledEstude.buttons}>
              <Button url={'https://t.me/meninadeux'}> Entrar no canal </Button>
            </div>
          </div>
          <Image
            src={NewsImage}
            alt="Mulher no celular conferindo os novos cursos."
          />
        </section>
        <section
          className={`container 
          ${styledEstude.socialMedia}`}
        >
          <div className={styledEstude.content}>
            <Title type="Sm">Redes Sociais</Title>
            <SubTitle type="Default">
              Me acompanhe nas redes sociais! <br /> Se quiser conversar sobre
              projetos, eventos e afins, tem meu e-mail aí!
            </SubTitle>
            <div className={styledEstude.buttons}>
              <Button
                icon={MdAlternateEmail}
                url={'mailto:becabelin@gmail.com'}
              >
                E-mail
              </Button>
              <Button
                icon={AiOutlineInstagram}
                url="https://www.instagram.com/meninadeux"
              >
                Instagram
              </Button>
              <Button
                icon={AiFillLinkedin}
                url="https://www.linkedin.com/company/meninadeux/"
              >
                LinkedIn
              </Button>
            </div>
          </div>
          <Image
            src={SocialMediaImage}
            alt="Mulher com um megafone, simulando interface de rede social."
          />
        </section>
      </main>
    </>
  )
}
