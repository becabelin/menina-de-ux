// Components
// Styles
import styles from './index.module.scss'

// Interface
import { ITitleLinks } from '@/interface/components'

export default function TitleLinks({ type, children }: ITitleLinks) {
  // Verifica se o título é do tipo principal. Se for, a tag será h1. Se não, será h2.
  const Comp = type === 'Primary' ? 'h1' : 'h2'
  return (
    <>
      <Comp className={styles.title}>{children}</Comp>
    </>
  )
}
