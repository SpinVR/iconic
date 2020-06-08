import * as React from "react";

const SvgPinLarge = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path d="M28 24l-3-5v-9H15v9l-3 5h7v7h2v-7h7z" fill="#fff" />
  </svg>
);

export default SvgPinLarge;
