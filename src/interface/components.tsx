import { ReactNode } from 'react'

// Interface text - Base
interface text {
  children: React.ReactNode
  style: string
}

// Interface do component Title
export interface ITitle extends text {
  type: 'Primary' | 'Secondary'
}

// Interface do component SubTitle
export type ISubTitle = text

// Interface do component Tags
export interface ITag {
  children: React.ReactNode
  type: 'Default' | 'Strong'
}

// Interface do component MenuLinks
export interface IMenuLinks {
  type: 'Primary' | 'Secondary'
  onClickHandler?: () => void
}

// Interface elements with img
interface Image {
  src: string
  width: number
  height: number
  alt: string
}

// Interface do component Logo
export interface ILogo extends Image {
  href: string
}

// Interface do component Card
export interface ICard {
  src: string
  alt: string
  title: string
  subtitle?: string
  description?: string
  href?: string
  type: 'Primary' | 'Secondary'
}

// Interface do component TitleLinks
export interface ITitleLinks {
  type: 'Primary' | 'Secondary'
  children: React.ReactNode
}

// Interface do component TextLinks
export interface ITextLinks {
  children: React.ReactNode
}

// Interface do component subtitleLinks
export interface ISubtitleLinks {
  type: 'Primary' | 'Secondary'
  children: React.ReactNode
}

// Interface do component CardLinks
export interface ICardLinks {
  emoji: string
  link: string
  children: React.ReactNode
  principal?: boolean
}

// Interface do component TypingText
export interface ITypingText {
  text: string
  delay: number
}

// Interface do componente CardInfo
export interface ICardInfo {
  src: string
  alt: string
  containerTitle: string
  containerDescription: string
  type?: 'Active' | 'Disabled'
}

// Interface do componente Button
export interface IButton {
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
