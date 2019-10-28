import * as React from "react";

const SvgObjectGroup = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path d="M27 13v14H13V13h14zm1-1H12v16h16V12z" fill="#fff" />
    <path d="M21 16v5h-5v-5h5zm1-1h-7v7h7v-7z" fill="#fff" />
    <path d="M24 19v5h-5v-5h5zm1-1h-7v7h7v-7z" fill="#fff" />
  </svg>
);

export default SvgObjectGroup;
