import * as React from "react";

const SvgSwapObject = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      d="M16 13v3h-3v-3h3zm1-1h-5v5h5v-5zM23 19c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm0-1c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zM18 12v1c2.4 0 4.4 1.7 4.9 4 .4 0 .7.1 1 .2C23.5 14.3 21 12 18 12zM13 18h-1c0 3 2.3 5.5 5.2 5.9-.1-.3-.2-.7-.2-1-2.3-.5-4-2.5-4-4.9z"
      fill="#fff"
    />
  </svg>
);

export default SvgSwapObject;
