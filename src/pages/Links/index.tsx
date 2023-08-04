import TitleLinks from '@/components/common/Links/title/titleLinks'
import TextLinks from '@/components/common/Links/text/textLinks'
import SubtitleLinks from '@/components/common/Links/subtitle/subtitleLinks'
import CardLinks from '@/components/common/Links/card/cardLinks'
import Logo from '@/components/common/Logo'
import styles from './index.module.scss'
// import Image from 'next/image'
// import link from 'next/link'
// import '../../components/common/Links/card/index.module.scss'

export default function Link() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.logo}>
          <Logo
            href="https://meninadeux.com/"
            src="/logo_rosa.svg"
            width={180}
            height={180}
            alt="Logo do projeto Menina de UX"
          />
          <p className="text-sm text-gray-300">Ajudando meninas como eu</p>
        </div>
        <div className={styles.divGlobal}>
          <div className={styles.divText}>
            <TitleLinks type="Primary">Oiê, tudo bem? 👩🏻‍💻</TitleLinks>

            <TextLinks>
              A Menina de UX é uma iniciativa focada para ajudar meninas que
              querem começar suas carreiras na área de UX Design e não sabem por
              onde começar 😉
            </TextLinks>
            <TextLinks>Espero que eu possa te ajudar! 😊</TextLinks>
          </div>
          <div className={styles.divParcerias}>
            <SubtitleLinks type="Secondary">Parcerias</SubtitleLinks>
            <div className={styles.divCardsLinks}>
              <CardLinks
                link="https://coderhouse.com.br/?utm_source=alianzas&utm_medium=alianzas&utm_campaign=alianza"
                emoji="🎟️"
              >
                Use nosso cupom MENINADEUX para ganhar 20% de desconto nos curso
                da Coderhouse
              </CardLinks>
              <CardLinks
                link="https://cubos.academy/cursos/design-uxui?utm_source=meninadeux&utm_medium=influencerPaid&utm_campaign=20230727_instagram_userExperience&utm_content=sales"
                emoji="🎟️"
              >
                Use nosso cupom MENINA10 para ganhar 10% de desconto no curso de
                UX Design da Cubos Academy
              </CardLinks>

              <CardLinks
                link="https://aulas.cubos.academy/criar-conta?utm_source=meninadeux&utm_medium=influencerPaid&utm_campaign=20230720_instagram_userExperience&utm_content=sales&utm_keyword=minicursogratuito"
                emoji="📚"
              >
                Minicurso de UX da Cubos Academy
              </CardLinks>
            </div>
          </div>
          <div className={styles.divLinks}>
            <SubtitleLinks type="Secondary">Nossos Links</SubtitleLinks>
            <div className={styles.divCardsLinks}>
              <CardLinks
                link="https://www.atados.com.br/ong/menina-de-ux"
                emoji="💪🏻"
              >
                Seja uma voluntária!
              </CardLinks>

              <CardLinks link="https://meninadeux.com/" emoji="🌏">
                Acesso o nosso site
              </CardLinks>

              <CardLinks
                link="https://discord.com/invite/QKxb2w424F"
                emoji="👾"
              >
                Participe da nossa comunidade no Discord
              </CardLinks>

              <CardLinks link="https://t.me/meninadeux" emoji="📨">
                Entre no nosso canal do Telegram
              </CardLinks>

              <CardLinks
                link="https://www.linkedin.com/company/meninadeux"
                emoji="💙"
              >
                LinkedIn
              </CardLinks>

              <CardLinks
                link="https://www.instagram.com/meninadeux/"
                emoji="📷"
              >
                Instagram
              </CardLinks>

              <CardLinks link="https://www.threads.net/@meninadeux" emoji="✍🏻">
                Threads
              </CardLinks>

              <CardLinks link="https://medium.com/@meninadeux" emoji="📓">
                Medium
              </CardLinks>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
