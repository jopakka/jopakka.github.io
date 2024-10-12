import * as React from "react";
import { BaseIcon } from "../model/Icon";

const IconGym = (props: BaseIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="#ededed"
    viewBox="0 -960 960 960"
    aria-label="Gym weights"
    {...props}
  >
    <path d="m536-84-56-56 142-142-340-340-142 142-56-56 56-58-56-56 84-84-56-58 56-56 58 56 84-84 56 56 58-56 56 56-142 142 340 340 142-142 56 56-56 58 56 56-84 84 56 58-56 56-58-56-84 84-56-56-58 56Z" />
  </svg>
);
export default IconGym;
