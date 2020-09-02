import * as React from "react";

const SvgViewerShare = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path d="M9 30l22-10L9 10v7.5L22.444 20 9 22.5V30z" fill="#000" />
  </svg>
);

export default SvgViewerShare;
