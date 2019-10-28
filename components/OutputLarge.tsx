import * as React from "react";

const SvgOutputLarge = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path d="M30 10v20H10V10h20zm2-2H8v24h24V8z" fill="#fff" />
    <path d="M25 15v10H15V15h10zm1-1H14v12h12V14z" fill="#fff" />
  </svg>
);

export default SvgOutputLarge;
