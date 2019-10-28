import * as React from "react";

const SvgOutputOffLarge = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path d="M30 10v20H10V10h20zm2-2H8v24h24V8z" fill="#fff" />
  </svg>
);

export default SvgOutputOffLarge;
