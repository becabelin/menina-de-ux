// Components
import Logo from '../common/Logo'
import MenuLinks from '../common/MenuLinks'
import MenuMob from './MenuMob'

// Styles
import styled from './index.module.scss'

// Utilities
// Hooks
import { useEffect, useState } from 'react'

// Interfaces

export default function Header() {
  const [scrollPosition, SetScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => SetScrollPosition(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const styleHeader = scrollPosition ? styled.normal : styled.transparent
  return (
    <>
      <header className={styleHeader}>
        <div className={styled.content}>
          <Logo
            href="/"
            src="./logo.svg"
            alt="logo da Menina de UX"
            height={40}
            width={158}
          />
          <nav>
            <MenuLinks type="Primary" />
          </nav>
          <MenuMob />
        </div>
      </header>
    </>
  )
}
