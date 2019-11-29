import * as React from "react";

const SvgInfoSmall = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" {...props}>
    <path
      d="M11.5 18c3.6 0 6.5-2.9 6.5-6.5S15.1 5 11.5 5 5 7.9 5 11.5 7.9 18 11.5 18zM11 8h1v1h-1V8zm0 2h1v5h-1v-5z"
      fill="#fff"
    />
  </svg>
);

export default SvgInfoSmall;
