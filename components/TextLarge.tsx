import * as React from "react";

const SvgTextLarge = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path d="M29 10H11v2h8v18h2V12h8v-2z" fill="#fff" />
  </svg>
);

export default SvgTextLarge;
