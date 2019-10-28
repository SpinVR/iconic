import * as React from "react";

const SvgObjectCamera = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path d="M27 16v10H13V16h14zm1-1H12v12h16V15z" fill="#fff" />
    <path d="M20 23.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" fill="#fff" />
    <path
      d="M20 19c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0-1c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM23 13h-6v1h6v-1z"
      fill="#fff"
    />
    <path d="M23 13h-6v1h6v-1z" fill="#fff" />
  </svg>
);

export default SvgObjectCamera;
