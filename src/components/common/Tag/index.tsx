// Components
// Styles
import styled from "./index.module.scss";

// Utilities
// Hooks

// Interfaces
import { ITag } from "@/interface/components";

export default function Tag({ children, type }: ITag) {
  const style = type === "Default" ? styled.tagDefault : styled.tagStrong;
  return (
    <>
      <span className={style}>{children}</span>
    </>
  );
}
