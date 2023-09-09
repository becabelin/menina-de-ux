// Components
import Head from 'next/head'
import Title from '@/components/common/Title/Title'

// Styles
import style from '@/styles/Sobre.module.scss'

// Assets
import MulherLendo from '../assets/mulher-lendo.webp.png'
import MulherAssistindo from '../assets/menina-assistindo-aula.webp.png'

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre - Menina de UX</title>
        <meta name="description" content="Tudo sobre o projeto Menina de UX." />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section id={style.about}>
          <div className={style.aboutMore}>
            <div className={style.girlReading}>
              <img src={MulherLendo.src} alt="Menina lendo um livro." />
            </div>

            <div className={style.descAboutMore}>
              <Title type="Sm">Só que eu queria mais que isso</Title>
              <p>
                Com o tempo, fui percebendo que eu sempre gostei de educação e
                queria ser uma influência nessa área, poder ajudar outras
                pessoas com o que eu sabia (e ainda ia aprender).
              </p>

              <p>
                Foquei para que a Menina de UX desse dicas e ensinasse coisas
                legais sobre design e carreira
              </p>

              <p>E hoje estou aqui, contando essa história para você!</p>
            </div>
          </div>

          <div className={style.goals}>
            <div className={style.titleGoals}>
              <Title type="Lg">Objetivos da Menina de UX</Title>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
