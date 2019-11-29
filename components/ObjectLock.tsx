import * as React from "react";

const SvgObjectLock = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      d="M24 19c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1h-8c-.55 0-1-.45-1-1v-5c0-.55.45-1 1-1h8zm0-1h-8c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2z"
      fill="#fff"
    />
    <path
      d="M25 19h-1.04v-2.9c0-1.73-1.77-3.13-3.96-3.13s-3.96 1.41-3.96 3.13V19H15v-2.9c0-2.26 2.24-4.1 5-4.1s5 1.84 5 4.1V19z"
      fill="#fff"
    />
  </svg>
);

export default SvgObjectLock;
