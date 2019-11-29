import * as React from "react";

const SvgObjectPrimitiveTorus = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      d="M20 14c-4.4 0-8 2.9-8 6.5s3.6 6.5 8 6.5 8-2.9 8-6.5-3.6-6.5-8-6.5zm0 12c-3.9 0-7-2.5-7-5.5s3.1-5.5 7-5.5 7 2.5 7 5.5-3.1 5.5-7 5.5z"
      fill="#fff"
    />
    <path
      d="M20 18c-1.7 0-3 .9-3 2s1.3 2 3 2 3-.9 3-2-1.3-2-3-2zm0 3c-1.2 0-2-.6-2-1s.8-1 2-1 2 .6 2 1-.8 1-2 1z"
      fill="#fff"
    />
  </svg>
);

export default SvgObjectPrimitiveTorus;
