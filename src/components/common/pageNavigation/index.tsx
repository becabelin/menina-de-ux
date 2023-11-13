// Components
// Styles
import styles from './index.module.scss'

// Utilities
import Link from 'next/link'

// Hooks
// Interfaces

interface NavigatePage {
  text?: string
}

export default function PageNavigation({ text }: NavigatePage) {
  return (
    <div className={styles.pageNavigation}>
      <Link href={'/estude'}>
        <span className={styles.navigateActive}>Estudos</span>
      </Link>
      <span className={styles.course}> / {text}</span>
    </div>
  )
}
