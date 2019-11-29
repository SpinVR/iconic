import * as React from "react";

const SvgEffectsVignette = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      d="M25 12H15c-1.7 0-3 1.3-3 3v10c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3V15c0-1.7-1.3-3-3-3zm-5 13c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"
      fill="#fff"
    />
  </svg>
);

export default SvgEffectsVignette;
