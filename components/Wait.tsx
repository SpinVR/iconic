import * as React from "react";

const SvgWait = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      d="M24 13v3.6L20.6 20l3.4 3.4V27h-8v-3.6l3.4-3.4-3.4-3.4V13h8zm1-1H15v5l3 3-3 3v5h10v-5l-3-3 3-3v-5z"
      fill="#fff"
    />
  </svg>
);

export default SvgWait;
