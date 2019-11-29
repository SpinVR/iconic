import * as React from "react";

const SvgSpecialLarge = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      d="M20 10c5.5 0 10 4.5 10 10s-4.5 10-10 10-10-4.5-10-10 4.5-10 10-10zm0-2C13.4 8 8 13.4 8 20s5.4 12 12 12 12-5.4 12-12S26.6 8 20 8z"
      fill="#fff"
    />
    <path
      d="M20 14l-1.4 4.2h-4.4l3.6 2.6-1.4 4.2 3.6-2.6 3.6 2.6-1.4-4.2 3.6-2.6h-4.4L20 14z"
      fill="#fff"
    />
  </svg>
);

export default SvgSpecialLarge;
