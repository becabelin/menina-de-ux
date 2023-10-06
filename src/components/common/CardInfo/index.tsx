// Components
import Button from '../Button'

// Styles~
import Styles from './index.module.scss'

// Utilities
// Hooks
// Interfaces
import { ICardInfo } from '@/interface/components'

export default function CardInfo({
  src,
  alt,
  containerTitle,
  containerDescription,
  type = 'Active',
}: ICardInfo) {
  return (
    <div className={Styles.container}>
      <img src={`${src}`} alt={alt} className={Styles.containerImg} />
      <h3 className={Styles.containerTitle}>{containerTitle}</h3>
      <p className={Styles.containerDescription}>{containerDescription}</p>

      {type === 'Active' ? (
        <Button type="Blue">ver mais</Button>
      ) : (
        <Button type="Disabled">Em breve</Button>
      )}
    </div>
  )
}
