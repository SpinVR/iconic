import * as React from "react";

const SvgPlus = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={6} height={6} fill="none" {...props}>
    <path
      d="M2.296 6h1.408V3.661H6V2.339H3.704V0H2.296v2.339H0v1.322h2.296V6z"
      fill="#242424"
    />
  </svg>
);

export default SvgPlus;
