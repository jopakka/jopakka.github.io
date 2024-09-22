import * as React from "react";
import { BaseIcon } from "../model/Icon";

const IconCode = (props: BaseIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="#ededed"
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z" />
  </svg>
);
export default IconCode;
