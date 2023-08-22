import { ReactNode } from 'react'
import Button from '../Button'
import Styles from './index.module.scss'

interface ICardInfo {
  children: ReactNode
  src: string
  alt: string
  containerTitle: string
  containerDescription: string
  button: string
  type: 'container'
}

export default function CardInfo({
  src = '/',
  alt = '/',
  containerTitle = '/',
  containerDescription = '/',
  button = '/',
}: ICardInfo) {
  return (
    <div className={Styles.container}>
      <img src={`${src}`} alt={alt} className={Styles.containerImg} />
      <h3 className={Styles.containerTitle}>{containerTitle}</h3>
      <p className={Styles.containerDescription}>{containerDescription}</p>
      <Button>{button}</Button>
    </div>
  )
}

/* 
export default function CardInfo() {
  return (
    <div className={Styles.container}>
      <img
        className={Styles.containerImg}
        src="https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
      ></img>
      <h3 className={Styles.containerTitle}>Currículo de Milhões</h3>
      <p className={Styles.containerDescription}>
        Aprenda a criar o currículo campeão para enviar nos processos seletivos
        e descubra coisas super importantes que você não sabia antes!
      </p>
      <Button type="Disabled">Em breve</Button>
    </div>
  )
} */
