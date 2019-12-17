import * as React from "react";

const SvgCheck = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <g clipPath="url(#check_svg__clip0)">
      <path
        d="M16.667 29L10 20l4-3 3 4 9.833-11 3.667 3.333L16.667 29z"
        fill="#34A1AD"
      />
    </g>
    <defs>
      <clipPath id="check_svg__clip0" />
    </defs>
  </svg>
);

export default SvgCheck;
