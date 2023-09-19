// Styles
import styled from './index.module.scss'

// Utilities
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai'
import { BsTelegram } from 'react-icons/bs'

// Images
import Logo from '@/../public//Footer/header-logo.svg'
import Supporter1 from '@/../public/Footer/ods-4.svg'
import Supporter2 from '@/../public/Footer/ods-5.svg'

export default function Footer() {
  return (
    <footer>
      <section className={`container ${styled.footerContainer}`}>
        <div className={styled.logoContainer}>
          <Image src={Logo} alt="Logo Menina de UX." />
          <p className={styled.slogan}>Ajudando meninas como eu</p>
        </div>
        <div className={styled.projects}>
          <h3 className={styled.titlesFooter}>Projetos</h3>
          <ul className={styled.footerItems}>
            <li>
              <Link href="#">Crie seu Case</Link>
            </li>
          </ul>
        </div>
        <div className={styled.about}>
          <h3 className={styled.titlesFooter}>Sobre a menina de ux</h3>
          <ul className={styled.footerItems}>
            <li>
              <Link href="#">Conheça a iniciativa</Link>
            </li>
            <li>
              <Link href="#">Quem criou</Link>
            </li>
          </ul>
        </div>
        <div className={styled.socialMedia}>
          <h3 className={styled.titlesFooter}>Redes sociais</h3>
          <ul className={styled.footerItems}>
            <li>
              <Link href="#">
                <AiOutlineInstagram /> <span>Instagram</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <AiFillLinkedin /> <span>LinkedIn</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <BsTelegram /> <span>Telegram</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styled.supporters}>
          <span>ODS apoiadas:</span>
          <div className={styled.imagesSupporters}>
            <Image
              src={Supporter1}
              alt="Objetivo de Desenvolvimento Sustentável 4: Educação de qualidade."
            />
            <Image
              src={Supporter2}
              alt="Objetivo de Desenvolvimento Sustentável 5: Igualdade de gênero."
            />
          </div>
        </div>
      </section>
      <section className={`${styled.copyright}`}>
        <p>Feito com 💙 por Menina de UX</p>
        <p>
          Design e código por
          <strong> Receba Belin</strong>
        </p>
        <p>Ilustrações por Storyset</p>
      </section>
    </footer>
  )
}
