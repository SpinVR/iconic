import * as React from "react";

const SvgScaleLarge = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      d="M8 8v24h24V8H8zm2 22v-8h8v8h-8zm20 0H20V20H10V10h20v20z"
      fill="#fff"
    />
  </svg>
);

export default SvgScaleLarge;
