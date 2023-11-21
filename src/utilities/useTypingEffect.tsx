// Interface
import { ITypingText } from '@/interface/components'
// Hooks
import { useState, useEffect } from 'react'

// Function typing effect
export function useTypingEffect(originalText: string, delay: number) {
  const [typedText, setTypedText] = useState('')

  useEffect(() => {
    let currentIndex = 0

    const typingInterval = setInterval(() => {
      if (currentIndex <= originalText.length) {
        setTypedText(originalText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, delay)

    return () => clearInterval(typingInterval)
  }, [originalText, delay])

  return typedText
}

export function TypingText({ text, delay }: ITypingText) {
  const typedText = useTypingEffect(text, delay)

  return <>{typedText}</>
}
