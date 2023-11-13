// Components
// Styles
import styles from './index.module.scss'

// Interfaces
import { ICardLinks } from '@/interface/components'

export default function CardLinks({
  emoji,
  link,
  children,
  principal,
}: ICardLinks) {
  return (
    <div className={styles.card_container}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div
          className={`${principal ? styles.card__principal : styles.card} ${
            styles.bounce
          }`}
        >
          <div
            className={`${principal ? styles.card__text : styles.card__text}`}
          >
            {children}
          </div>
          <div className={styles.card__emoji}>{emoji}</div>
        </div>
      </a>
    </div>
  )
}
