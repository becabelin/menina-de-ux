// Components
// Styles
// Utilities
// Hooks

// Interfaces
import { ISubTitle } from '@/interface/components'

export default function SubTitle({ children, style }: ISubTitle) {
  return (
    <>
      <p className={`${style}`}>{children}</p>
    </>
  )
}
