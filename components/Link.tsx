import * as React from "react";

const SvgLink = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      d="M19 22h-3.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5H19v-1h-3.5c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5H19v-1zM24.5 16H21v1h3.5c1.4 0 2.5 1.1 2.5 2.5S25.9 22 24.5 22H21v1h3.5c1.9 0 3.5-1.6 3.5-3.5S26.4 16 24.5 16z"
      fill="#fff"
    />
    <path d="M23 19h-6v1h6v-1z" fill="#fff" />
  </svg>
);

export default SvgLink;
