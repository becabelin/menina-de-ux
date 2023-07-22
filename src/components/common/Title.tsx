// Components
// Styles
// Utilities
// Hooks

// Interfaces
import { ITitle } from '@/interface/components'

export default function Title({ type, children, style }: ITitle) {
  // Verifica se o título é do tipo principal. Se for, a tag será h1. Se não, será h2.
  const Comp = type === 'Primary' ? 'h1' : 'h2'
  return (
    <>
      <Comp className={`${style}`}>{children}</Comp>
    </>
  )
}
