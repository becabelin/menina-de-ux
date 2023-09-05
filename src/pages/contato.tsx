// Components
import Head from "next/head";

// Styles
import styled from "@/styles/Home.module.scss";
import Title from "@/components/common/Title/Title";

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
        </section>
      </main>
    </>
  );
}
