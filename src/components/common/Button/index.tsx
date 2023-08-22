// Components
// Styles
import styles from './index.module.scss'

// Utilities
import Link from 'next/link'

// Hooks
// Interfaces
import { IButton } from '@/interface/components'

export default function Button({
  children,
  icon: Icon,
  url = '#',
  type = 'Default',
}: IButton) {
  return (
    <Link href={url}>
      <div className={styles[`Button${type}`]}>
        {Icon ? (
          <span>
            <Icon />
          </span>
        ) : (
          <span></span>
        )}
        <span>{children}</span>
      </div>
    </Link>
  )
}
