import * as React from "react";

const SvgViewBack = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      d="M23.3 12H12v11.5l4.5 4.5H28V16l-4.7-4zM16 26.1L13.9 24H16v2.1zM24 15v-1.1l2.5 2.1H24v-1zm3 11.6v.4H17V17h10v9.6z"
      fill="#fff"
    />
  </svg>
);

export default SvgViewBack;
