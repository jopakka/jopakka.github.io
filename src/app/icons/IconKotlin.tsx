import * as React from "react";
import { BaseIcon } from "../model/Icon";

const IconKotlin = (props: BaseIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    {...props}
  >
    <g transform="matrix(.04 0 0 .04 2 2)">
      <linearGradient
        id="a"
        x1={500.004}
        x2={-0.097}
        y1={579.106}
        y2={1079.206}
        gradientTransform="translate(-47.587 -14524.75) scale(24.995)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0.003}
          style={{
            stopColor: "#e44857",
          }}
        />
        <stop
          offset={0.469}
          style={{
            stopColor: "#c711e1",
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#7f52ff",
          }}
        />
      </linearGradient>
      <path
        d="M500 500H0V0h500L250 250z"
        style={{
          fill: "url(#a)",
        }}
      />
    </g>
  </svg>
);
export default IconKotlin;
