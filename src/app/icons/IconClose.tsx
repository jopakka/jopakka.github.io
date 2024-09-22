import * as React from "react";
import { BaseIcon } from "../model/Icon";

const IconClose = (props: BaseIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="#ededed"
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
  </svg>
);
export default IconClose;
