// Interface do component Title
export interface ITitle {
  children: React.ReactNode;
  type: "Primary" | "Secondary";
  style: string;
}

// Interface do component MenuLinks
export interface IMenuLinks {
  type: "Primary" | "Secondary";
  onClickHandler?: () => void;
}

// Interface elements with img
interface Image {
  src: string;
  width: number;
  height: number;
  alt: string;
}

// Interface do component Logo
export interface ILogo extends Image {
  href: string;
}

// Interface do component Card
export interface ICard {
  src: string;
  alt: string;
  href: string;
  title: string;
  subtitle?: string;
  description?: string;
  type: "Primary" | "Secondary";
}
