// Components
// Styles
// Utilities
import Image from 'next/image'
import Link from 'next/link'

// Hooks
// Interfaces
import { ILogo } from '@/interface/components'

export default function Logo({ src, href, width, height, alt }: ILogo) {
  return (
    <>
      <Link href={href}>
        <Image src={src} width={width} height={height} alt={alt} priority />
      </Link>
    </>
  )
}
