import * as React from "react";

const SvgObjectLightSpot = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      d="M20 22.1h-1.1V28H20v-5.9zM15 25.7l-1-.5 2.4-4.1.9.5-2.3 4.1zM24 25.7l-2.3-4.1.9-.5 2.4 4.1-1 .5zM19.5 13.8l2.9 4.3c-.2.6-.9 1.7-2.9 1.7s-2.7-1.2-2.9-1.7l2.9-4.3zm0-1.8l-3.9 5.9c0 .8 1 2.9 3.9 2.9s3.9-2.1 3.9-2.9L19.5 12z"
      fill="#fff"
    />
  </svg>
);

export default SvgObjectLightSpot;
