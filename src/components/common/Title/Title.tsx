// Components
// Utilities
// Hooks

// Styles
import styles from './index.module.scss'

// Interfaces
import { ITitle } from '@/interface/components'

export default function Title({ children, type = 'Default' }: ITitle) {
  // Verifica se o título é do tipo principal. Se for, a tag será h1. Se não, será h2.

  const TitleType = type === 'Default' ? 'h1' : 'h2'

  return (
    <>
      <TitleType className={styles[`title${type}`]}>{children}</TitleType>
    </>
  )
}
