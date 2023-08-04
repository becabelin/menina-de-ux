import { ITextLinks } from '@/interface/components'
import styles from './index.module.scss'

export default function TextLinks({ children }: ITextLinks) {
  return (
    <>
      <p className={styles.text}>{children}</p>
    </>
  )
}
