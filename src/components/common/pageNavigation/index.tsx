// Components
// Styles
import styles from './index.module.scss'

// Utilities
import Link from 'next/link'

// Hooks
// Interfaces

import SubTitle from '../Subtitle/SubTitle'

interface NavigatePage {
  text?: string
}

export default function PageNavigation({ text }: NavigatePage) {
  return (
    <div className={styles.pageNavigation}>
      <Link href={'/estude'}>
        <SubTitle type="Lg">
          <span className={styles.navigateActive}>Estudos</span>
        </SubTitle>
      </Link>
      <SubTitle>
        <span className={styles.course}> / {text}</span>
      </SubTitle>
    </div>
  )
}
