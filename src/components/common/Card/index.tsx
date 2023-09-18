// Components
// Styles
import styled from './index.module.scss'

// Utilities
import Link from 'next/link'
import { HiOutlineArrowLongRight } from 'react-icons/hi2'
import { convertStringCharacters } from '@/utilities/Converts'

// Hooks
// Interfaces
import { ICard } from '@/interface/components'

export default function Card(props: ICard) {
  const { alt, src, title, description, subtitle, href, type = 'base' } = props

  const style = type === 'Primary' ? styled.primary : styled.secondary

  return (
    <div className={style}>
      <div className={styled.containerImg}>
        <img src={`${src}`} alt={alt} className={styled.img} />
      </div>
      <h2 className={styled.title}>
        {title.length > 300
          ? `${convertStringCharacters(title, 300)}...`
          : title}
      </h2>
      {subtitle && <span className={styled.subtitle}>{subtitle}</span>}
      {description && (
        <p className={styled.description}>
          {description.length > 1000
            ? `${convertStringCharacters(description, 1000)}...`
            : description}
        </p>
      )}
      {href && (
        <Link href={`${href}`} target="_blank" className={styled.link}>
          Saiba mais <HiOutlineArrowLongRight size={20} />
        </Link>
      )}
    </div>
  )
}
