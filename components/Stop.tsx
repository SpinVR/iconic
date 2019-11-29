import * as React from "react";

const SvgStop = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path d="M25 15H15v10h10V15z" fill="#fff" />
  </svg>
);

export default SvgStop;
