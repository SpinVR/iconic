import * as React from "react";

const SvgViewerInfo = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      d="M20 9C13.95 9 9 13.95 9 20s4.95 11 11 11 11-4.95 11-11S26.05 9 20 9zm1.375 17.875h-2.75v-8.25h2.75v8.25zm0-11h-2.75v-2.75h2.75v2.75z"
      fill="#000"
    />
  </svg>
);

export default SvgViewerInfo;
