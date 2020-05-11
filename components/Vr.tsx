import * as React from "react";

const SvgVr = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <g fill="#fff">
      <path d="M8 11v18h10l2-3.8 2 3.8h10V11H8zm22.5 16.5h-7.6l-1.6-3L20 22l-1.3 2.5-1.6 3H9.5v-15h21v15z" />
      <path d="M15 22c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm0-4.8c1 0 1.8.8 1.8 1.8s-.8 1.8-1.8 1.8-1.8-.8-1.8-1.8.8-1.8 1.8-1.8zM25 22c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm0-4.8c1 0 1.8.8 1.8 1.8s-.8 1.8-1.8 1.8-1.8-.8-1.8-1.8.8-1.8 1.8-1.8z" />
    </g>
  </svg>
);

export default SvgVr;
