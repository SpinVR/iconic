import * as React from "react";

const SvgErrorSmall = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" {...props}>
    <path
      d="M11.5 5C7.9 5 5 7.9 5 11.5S7.9 18 11.5 18s6.5-2.9 6.5-6.5S15.1 5 11.5 5zm.5 10h-1v-1h1v1zm0-2h-1V8h1v5z"
      fill="#fff"
    />
  </svg>
);

export default SvgErrorSmall;
