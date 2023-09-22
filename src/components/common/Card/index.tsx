// // Components
// // Styles
// import styled from './index.module.scss'

// // Utilities
// import Link from 'next/link'
// import { HiOutlineArrowLongRight } from 'react-icons/hi2'
// import { convertStringCharacters } from '@/utilities/Converts'

// // Hooks
// // Interfaces
// import { ICard } from '@/interface/components'

// export default function Card(props: ICard) {
//   const { alt, src, title, description, subtitle, href, type = 'base' } = props

//   const style = type === 'Primary' ? styled.primary : styled.secondary

//   return (
//     <div className={style}>
//       <img src={`${src}`} alt={alt} className={styled.img} />
//       <h2 className={styled.title}>
//         {title.length > 300
//           ? `${convertStringCharacters(title, 300)}...`
//           : title}
//       </h2>
//       {subtitle && <span className={styled.subtitle}>{subtitle}</span>}
//       {description && (
//         <p className={styled.description}>
//           {description.length > 1000
//             ? `${convertStringCharacters(description, 1000)}...`
//             : description}
//         </p>
//       )}
//       {href && (
//         <Link href={`${href}`} target="_blank" className={styled.link}>
//           Saiba mais <HiOutlineArrowLongRight size={20} />
//         </Link>
//       )}
//     </div>
//   )
// }

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
  const {
    alt,
    src,
    title,
    description,
    subtitle,
    href,
    type = 'base',
    ancora = false,
  } = props

  const style = type === 'Primary' ? styled.primary : styled.secondary

  const cardContent = (
    <div className={style}>
      <img src={`${src}`} alt={alt} className={styled.img} />
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
      {href && !ancora && (
        <Link href="#" target="_blank" className={styled.link}>
          Saiba mais <HiOutlineArrowLongRight size={20} />
        </Link>
      )}
    </div>
  )

  if (ancora && href) {
    return (
      <a href={`${href}`} className={style}>
        {cardContent}
      </a>
    )
  } else {
    // Adicione um retorno padrão caso nenhuma condição seja atendida
    return cardContent
  }
}
