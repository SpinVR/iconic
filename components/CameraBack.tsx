import * as React from "react";

const SvgCameraBack = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path d="M13 13h14v4h1v-5H12v16h9v-1h-8V13z" fill="#fff" />
    <path
      d="M26 24c0-5-3.5-4.9-5-5v-3l-5 4 5 4v-3c1.2 0 4 0 5 3z"
      fill="#fff"
    />
  </svg>
);

export default SvgCameraBack;
