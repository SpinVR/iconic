import * as React from "react";

const SvgTextRightSmall = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" {...props}>
    <path
      d="M18 10H8v1h10v-1zM18 7H6v1h12V7zM18 13h-6v1h6v-1zM18 16H6v1h12v-1z"
      fill="#fff"
    />
  </svg>
);

export default SvgTextRightSmall;
