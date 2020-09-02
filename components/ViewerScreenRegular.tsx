import * as React from "react";

const SvgViewerScreenRegular = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      d="M31 11l-2-2-4 4-3-3v8h8l-3-3 4-4zM13 25l-4 4 2 2 4-4 3 3v-8h-8l3 3z"
      fill="#000"
    />
  </svg>
);

export default SvgViewerScreenRegular;
