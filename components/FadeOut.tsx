import * as React from "react";

const SvgFadeOut = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      d="M28 19h-1v2h1v-2zM23 17h-1v6h1v-6zM18 15h-1v10h1V15zM13 12h-1v16h1V12z"
      fill="#fff"
    />
  </svg>
);

export default SvgFadeOut;
