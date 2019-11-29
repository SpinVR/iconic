import * as React from "react";

const SvgToastWarning = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      d="M19.5 14L13 25h13l-6.5-11zm.5 9.1h-1v-1h1v1zm-1-2v-3h1v3h-1z"
      fill="#fff"
    />
  </svg>
);

export default SvgToastWarning;
