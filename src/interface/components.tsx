// Interface do component Title
export interface ITitle {
  children: React.ReactNode;
  type: "Primary" | "Secondary";
  style: string;
}
