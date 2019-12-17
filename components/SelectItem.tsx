import * as React from "react";

const SvgSelectItem = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={55} height={55} fill="none" {...props}>
    <path d="M39 26H29V16h-3v10H16v3h10v10h3V29h10v-3z" fill="#fff" />
  </svg>
);

export default SvgSelectItem;
