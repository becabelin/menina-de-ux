// Components
// Utilities
// Hooks

// Styles
import styles from './index.module.scss'

// Interfaces
import { ITitle } from '@/interface/components'

export default function Title({ children, type = 'Default' }: ITitle) {
  // Verifica se o título é do tipo principal. Se for, a tag será h1. Se não, será h2.
  return (
    <>
      <h2 className={styles[`title${type}`]}>{children}</h2>
    </>
  )
}
