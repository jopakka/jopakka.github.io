import { ReactNode } from "react";
import { BaseIcon } from "./Icon";

export default interface Contact {
  id?: string;
  icon: (icon: BaseIcon) => ReactNode;
  url: string;
}
