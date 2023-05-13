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
