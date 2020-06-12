import * as React from "react";

const SvgAdd = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={30} height={30} fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 0h-3v14H0v3h14v13h3V17h13v-3H17V0z"
      fill="#fff"
    />
  </svg>
);

export default SvgAdd;
