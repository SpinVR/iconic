import * as React from "react";

const SvgScaleSmall = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" {...props}>
    <path d="M6 6v11h11V6H6zm1 10v-4h4v4H7zm9 0h-4v-5H7V7h9v9z" fill="#fff" />
  </svg>
);

export default SvgScaleSmall;
