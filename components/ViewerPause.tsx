import * as React from "react";

const SvgViewerPause = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path d="M17 12h-4v16h4V12zM27 12h-4v16h4V12z" fill="#000" />
  </svg>
);

export default SvgViewerPause;
