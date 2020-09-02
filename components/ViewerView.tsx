import * as React from "react";

const SvgViewerView = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      d="M20 12c-8.8 0-12 8-12 8s3.2 8 12 8 12-8 12-8-3.2-8-12-8zm0 13.333c-2.933 0-5.333-2.4-5.333-5.333 0-2.933 2.4-5.333 5.333-5.333 2.933 0 5.333 2.4 5.333 5.333 0 2.933-2.4 5.333-5.333 5.333z"
      fill="#000"
    />
  </svg>
);

export default SvgViewerView;
