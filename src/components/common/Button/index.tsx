import { ReactNode } from 'react'
import styles from './index.module.scss'
import Link from 'next/link'

interface IButton {
  children: ReactNode
  icon?: React.ElementType
  url?: string
  type?:
    | 'Default'
    | 'White'
    | 'BluePrimary'
    | 'BlueSecondary'
    | 'PinkPrimary'
    | 'PinkSecondary'
    | 'Disabled'
}

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
