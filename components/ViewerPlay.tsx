import * as React from "react";

const SvgViewerPlay = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path d="M28 20l-14-8v16l14-8z" fill="#000" />
  </svg>
);

export default SvgViewerPlay;
