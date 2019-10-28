import * as React from "react";

const SvgExpandSmall = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" {...props}>
    <path
      d="M12 16l6-6.269L17.3 9 12 14.537 6.7 9l-.7.731L12 16z"
      fill="#fff"
    />
  </svg>
);

export default SvgExpandSmall;
