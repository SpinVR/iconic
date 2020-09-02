import * as React from "react";

const SvgViewerScreenFull = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      d="M31 9h-8l3 3-4 4 2 2 4-4 3 3V9zM16 22l-4 4-3-3v8h8l-3-3 4-4-2-2z"
      fill="#000"
    />
  </svg>
);

export default SvgViewerScreenFull;
