import * as React from "react";

const SvgViewerAndroid = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" {...props}>
    <path
      d="M2 12C2 6.486 6.486 2 12 2c2.227 0 4.334.716 6.095 2.072l-2.324 3.02A6.123 6.123 0 0012 5.81 6.198 6.198 0 005.81 12 6.198 6.198 0 0012 18.19a6.2 6.2 0 005.89-4.285H12v-3.81h10V12c0 5.514-4.486 10-10 10S2 17.514 2 12z"
      fill="#000"
    />
  </svg>
);

export default SvgViewerAndroid;
