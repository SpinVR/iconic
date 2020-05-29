import * as React from "react";

const SvgUndockPreviewSmall = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" {...props}>
    <path d="M8 7v7h8V7H8zm7 6H9V8h6v5z" fill="#fff" />
    <path d="M7 10H6v6h8v-1H7v-5z" fill="#fff" />
  </svg>
);

export default SvgUndockPreviewSmall;
