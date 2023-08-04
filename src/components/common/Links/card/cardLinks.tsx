import { ICardLinks } from '@/interface/components'
import styles from './index.module.scss'

export default function CardLinks({ emoji, link, children }: ICardLinks) {
  return (
    <div className={styles.card_container}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className={styles.card}>
          <div className={styles.card__text}>{children}</div>
          <div className={styles.card__emoji}>{emoji}</div>
        </div>
      </a>
    </div>
  )
}
