// Components
import Head from "next/head";

// Styles
import styled from "@/styles/Home.module.scss";
import Title from "@/components/common/Title/Title";
import SubTitle from "@/components/common/Subtitle/SubTitle";
import Button from "@/components/common/Button";
import { BiAt, BiLogoInstagram, BiLogoLinkedinSquare } from "react-icons/bi";

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
          <Title type="Xs">Quer ficar por dentro de todas as novidades?</Title>
          <SubTitle type="Lg">
            Entre no canal do Telegram da Menina de UX e fique sabendo de todos
            os cursos e processos seletivos novos!
          </SubTitle>
          <Button>Entrar no canal</Button>
        </section>
        <section className="container">
          <Title type="Xs">Redes Sociais</Title>
          <SubTitle type="Lg">
            Me acompanhe nas redes sociais! Se quiser conversar sobre projetos,
            eventos e afins, tem meu e-mail aí!
          </SubTitle>
          <Button>
            <BiAt /> E-mail
          </Button>
          <Button><BiLogoInstagram/>Instagram</Button>
          <Button><BiLogoLinkedinSquare/>LinkedIn</Button>
        </section>
      </main>
    </>
  );
}
