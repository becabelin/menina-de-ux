// Components
// Styles
// Utilities
import styled from "./index.module.scss";
// Hooks
import { useRouter } from "next/router";

// Interfaces
import { IMenuLinks } from "@/interface/components";

export default function MenuLinks({ type, onClickHandler }: IMenuLinks) {
  const router = useRouter();
  const styleUl = type === "Primary" ? styled.ulPrimary : styled.ulSecondary;
  const styleLi = type === "Primary" ? styled.liPrimary : styled.liSecondary;

  function Onclick(url: string): React.MouseEventHandler<HTMLLIElement> {
    return () => {
      router.push(url);
      if (onClickHandler) {
        onClickHandler();
      }
    };
  }

  return (
    <>
      <ul className={styleUl}>
        {[
          ["Início", "/"],
          ["Estude", "/estude"],
          ["Cursos", "/cursos"],
          ["Bootcamps", "/bootcamps"],
          ["Sobre", "/sobre"],
          ["Contato", "/contato"],
        ].map(([title, url], index) => (
          <li key={index} onClick={Onclick(url)} className={styleLi}>
            <span
              className={`${
                router.asPath === url ? styled.active : styled.notActive
              }`}
            >
              {title}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
