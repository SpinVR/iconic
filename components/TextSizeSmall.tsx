import * as React from "react";

const SvgTextSizeSmall = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" {...props}>
    <path d="M15 7H6v1h4v9h1V8h4V7z" fill="#fff" />
    <path d="M18 12h-5v1h2v4h1v-4h2v-1z" fill="#fff" />
  </svg>
);

export default SvgTextSizeSmall;
