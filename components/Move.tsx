import * as React from "react";

const SvgMove = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      d="M27 19.5l-3-2V19h-4v-4h1.5l-2-3-2 3H19v4h-4v-1.5l-3 2 3 2V20h4v4h-1.5l2 3 2-3H20v-4h4v1.5l3-2z"
      fill="#fff"
    />
  </svg>
);

export default SvgMove;
