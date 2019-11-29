import * as React from "react";

const SvgActive = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path d="M20 22a2 2 0 100-4 2 2 0 000 4z" fill="#fff" />
  </svg>
);

export default SvgActive;
