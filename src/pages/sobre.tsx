// Components
import Head from 'next/head'

// Styles
import style from '@/styles/Sobre.module.scss'

// Assets
import MulherLendo from '../assets/mulher-lendo.webp.png'
import MulherAssistindo from '../assets/menina-assistindo-aula.webp.png'

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
        <div className={style.sectionCarousel}>
          <div className={style.divCarousel}>
            <div className={style.overlapGroup}>
              <div className={style.div}>
                <div className={style.div2}>
                  <img
                    className={style.meninaAssistindo}
                    alt="Menina assistindo"
                    src={MulherAssistindo.src}
                  />
                  <div className={style.div3}>
                    <p className={style.textWrapper}>
                      Ensinar e trazer conteúdos incríveis
                    </p>
                    <p className={style.p}>
                      A Menina de UX busca poder ajudar meninas que queiram
                      começar suas carreiras em design e/ou tecnologia
                    </p>
                    <div className={style.textWrapper2}>Por quê?</div>
                    <p className={style.textWrapper3}>
                      Porque ela acredita que qualquer menina pode ser o que
                      quiser e que podemos aprender qualquer coisa
                    </p>
                    <div className={style.textWrapper4}>Como?</div>
                    <p className={style.textWrapper5}>
                      Criando aulas, apostilas e conteúdos sobre UX e carreira
                      de forma totalmente gratuita e online!
                    </p>
                  </div>
                </div>
              </div>
              <div className={style.ol}>
                <div className={style.li} />
                <div className={style.li2} />
                <div className={style.li3} />
                <div className={style.li4} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
