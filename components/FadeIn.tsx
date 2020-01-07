import * as React from "react";

const SvgFadeIn = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      d="M12 21h1v-2h-1v2zM17 23h1v-6h-1v6zM22 25h1V15h-1v10zM27 28h1V12h-1v16z"
      fill="#fff"
    />
  </svg>
);

export default SvgFadeIn;
