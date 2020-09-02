import * as React from "react";

const SvgViewerVr = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      d="M27 17v7h-4.7l-1-1.4-.8-1.2-.8 1.2-1 1.4H14v-7h13zm1-1H13v9h6.2l1.2-1.8 1.4 1.8H28v-9z"
      fill="#000"
    />
    <path
      d="M17 19c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm0-1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM24 19c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm0-1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
      fill="#000"
    />
  </svg>
);

export default SvgViewerVr;
