// Components
// Utilities
// Hooks

// Styles
import styles from './index.module.scss'

// Interfaces
import { ISubTitle } from '@/interface/components'

export default function SubTitle({ children, type = 'Default' }: ISubTitle) {
  return (
    <>
      <p className={styles[`subTitle${type}`]}>{children}</p>
    </>
  )
}
