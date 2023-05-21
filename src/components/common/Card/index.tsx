// Components
// Styles
import styled from "./index.module.scss";
// Utilities
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { convertStringCharacters } from "@/utilities/Converts";

// Hooks
// Interfaces
import { ICard } from "@/interface/components";

export default function Card(props: ICard) {
  const { alt, src, title, description, href, subtitle, type = "base" } = props;

  const style = type === "Primary" ? styled.primary : styled.secondary;

  return (
    <>
      <div className={style}>
        <Image
          src={`${src}`}
          width={type === "Primary" ? 300 : 240}
          height={type === "Primary" ? 150 : 120}
          alt={alt}
          className={styled.img}
        />
        <div className={styled.divCardContent}>
          <div className={styled.divCardText}>
            <p className={styled.title}>
              {title.length > 300
                ? `${convertStringCharacters(title, 48)}...`
                : title}
            </p>
            {subtitle && <span className={styled.subtitle}>{subtitle}</span>}
            {description && (
              <p className={styled.description}>
                {description.length > 280
                  ? `${convertStringCharacters(description, 280)}...`
                  : description}
              </p>
            )}
          </div>
          <Link href={`${href}`} target="_blank" className={styled.link}>
            Saiba mais <HiOutlineArrowLongRight size={20} />
          </Link>
        </div>
      </div>
    </>
  );
}
