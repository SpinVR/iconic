import * as React from "react";

const SvgClose = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      d="M25.5 15.5l-1-1L20 19l-4.5-4.5-1 1L19 20l-4.5 4.5 1 1L20 21l4.5 4.5 1-1L21 20l4.5-4.5z"
      fill="#fff"
    />
  </svg>
);

export default SvgClose;
