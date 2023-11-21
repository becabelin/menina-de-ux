// Components
// Styles
import styles from './index.module.scss'

// Interface
import { ISubtitleLinks } from '@/interface/components'

export default function SubtitleLinks({ type, children }: ISubtitleLinks) {
  // Verifica se o título é do tipo principal. Se for, a tag será h1. Se não, será h2.
  const Comp = type === 'Primary' ? 'h1' : 'h2'
  return (
    <>
      <Comp className={styles.subtitle}>{children}</Comp>
    </>
  )
}
