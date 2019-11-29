import * as React from "react";

const SvgToastInfo = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      d="M19.5 26c3.6 0 6.5-2.9 6.5-6.5S23.1 13 19.5 13 13 15.9 13 19.5s2.9 6.5 6.5 6.5zM19 16h1v1h-1v-1zm0 2h1v5h-1v-5z"
      fill="#fff"
    />
  </svg>
);

export default SvgToastInfo;
