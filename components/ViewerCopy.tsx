import * as React from "react";

const SvgViewerCopy = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      d="M27.9 15H16.1c-.6 0-1.1.5-1.1 1.1v11.8c0 .6.5 1.1 1.1 1.1h11.8c.6 0 1.1-.5 1.1-1.1V16.1c0-.6-.5-1.1-1.1-1.1zM27 27H17V17h10v10z"
      fill="#000"
    />
    <path d="M13 13h11v-2H12c-.6 0-1 .4-1 1v12h2V13z" fill="#000" />
  </svg>
);

export default SvgViewerCopy;
