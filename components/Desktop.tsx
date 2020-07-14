import * as React from "react";

const SvgDesktop = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      d="M31 26V10H9v16h9v2h-2v2h8v-2h-2v-2h9zm-20-2V12h18v12H11z"
      fill="#fff"
    />
  </svg>
);

export default SvgDesktop;
