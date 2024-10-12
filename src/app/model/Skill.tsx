import { ReactNode } from "react";
import { BaseIcon } from "./Icon";

export default interface Skill {
  icon: (icon: BaseIcon) => ReactNode;
  text: string;
}
