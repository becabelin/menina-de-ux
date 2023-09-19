// Components
import Button from '../common/Button'
import SubTitle from '../common/Subtitle/SubTitle'
import Title from '../common/Title/Title'

// Styles
import styled from './Sections.module.scss'

// Utilities
import Image from 'next/image'
import SocialMediaImage from '@/../public/Sections/mulher-redes-sociais.svg'
import { MdAlternateEmail } from 'react-icons/md'
import { AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai'

export default function SocialMedia() {
  return (
    <section className={`container ${styled.sectionContainer}`}>
      <div className={styled.sectionContent}>
        <Title type="Sm">Redes Sociais</Title>
        <SubTitle type="Default">
          Me acompanhe nas redes sociais! <br /> Se quiser conversar sobre
          projetos, eventos e afins, tem meu e-mail aí!
        </SubTitle>
        <div className={styled.buttons}>
          <Button icon={MdAlternateEmail} url={'mailto:becabelin@gmail.com'}>
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
  )
}
