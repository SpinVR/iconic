import * as React from "react";

const SvgWarningSmall = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" {...props}>
    <path
      d="M11.5 6L5 17h13L11.5 6zm.5 9.1h-1v-1h1v1zm-1-2v-3h1v3h-1z"
      fill="#fff"
    />
  </svg>
);

export default SvgWarningSmall;
