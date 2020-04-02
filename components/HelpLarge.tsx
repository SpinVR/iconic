import * as React from "react";

const SvgHelpLarge = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      d="M20 7c7.2 0 13 5.8 13 13s-5.8 13-13 13S7 27.2 7 20 12.8 7 20 7zm0-2C11.7 5 5 11.7 5 20s6.7 15 15 15 15-6.7 15-15S28.3 5 20 5z"
      fill="#fff"
    />
    <path
      d="M21 24h-2v2h2v-2zM20 14c-2.2 0-4 1.8-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.8-3 5h2c0-2.2 3-2.5 3-5 0-2.2-1.8-4-4-4z"
      fill="#fff"
    />
  </svg>
);

export default SvgHelpLarge;
