import * as React from "react";

const SvgMoveSmall = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" {...props}>
    <path
      d="M18 11.5L16 10v1h-3V8h1l-1.5-2L11 8h1v3H9v-1l-2 1.5L9 13v-1h3v3h-1l1.5 2 1.5-2h-1v-3h3v1l2-1.5z"
      fill="#fff"
    />
  </svg>
);

export default SvgMoveSmall;
