// Components
import Head from 'next/head'

// Styles
import style from '@/styles/Sobre.module.scss'

// Assets
import MulherLendo from '../assets/mulher-lendo.webp.png'

// Utilities
// Hooks
// Interfaces

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre - Menina de UX</title>
        <meta name="description" content="Sobre o projeto Menina de UX." />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={style.sectionSobre}>
          <div className={style.div}>
            <img
              className={style.mulherLendo}
              alt="Mulher lendo um livro."
              src={MulherLendo.src}
            />
            <div className={style.div2}>
              <p className={style.textWrapper}>
                Só que eu queria mais que isso
              </p>
              <p className={style.p}>
                Com o tempo, fui percebendo que eu sempre gostei de educação e
                queria ser uma influência nessa área, poder ajudar outras
                pessoas com o que eu sabia (e ainda ia aprender)
              </p>
              <p className={style.textWrapper2}>
                Foquei para que a Menina de UX desse dicas e ensinasse coisas
                legais sobre design e carreira
              </p>
              <p className={style.textWrapper3}>
                E hoje estou aqui, contando essa história para você!
              </p>
            </div>
          </div>
        </div>
        <div className={style.sectionHero}>
          <p className={style.textWrapper}>Objetivos da Menina de UX</p>
        </div>
      </main>
    </>
  )
}
