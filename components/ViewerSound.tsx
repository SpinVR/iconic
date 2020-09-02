import * as React from "react";

const SvgViewerSound = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      d="M20 12l-5 5h-4v6h4l5 5V12zM22 12v2c3 .4 5 2.9 5 6s-2 5.6-5 6v2c4.2-.5 7-3.9 7-8s-2.8-7.5-7-8z"
      fill="#000"
    />
    <path d="M22 16v8c1.8-.2 3-2 3-4s-1.2-3.8-3-4z" fill="#000" />
  </svg>
);

export default SvgViewerSound;
