// Components
// Styles
import styles from './index.module.scss'

// Interfaces
import { ITextLinks } from '@/interface/components'

export default function TextLinks({ children }: ITextLinks) {
  return (
    <>
      <p className={styles.text}>{children}</p>
    </>
  )
}
