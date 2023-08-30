// Styles
import styles from './index.module.scss'

// Utilities
import { BiUpArrowAlt } from 'react-icons/bi'

// Hooks
import { useState, useEffect, useCallback } from 'react'

export default function ButtonToTop() {
  const [showButton, setShowButton] = useState(false)

  // Monitora o Scroll Y e seta o showButton para true quando maior que 0.
  const handleScroll = useCallback(() => setShowButton(window.scrollY > 0), [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <button
      className={`${styles.button_to_top} 
      ${showButton ? styles.active : ''}`}
      onClick={scrollToTop}
    >
      <BiUpArrowAlt />
    </button>
  )
}
