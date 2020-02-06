import * as React from "react";

const SvgViewLeft = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      d="M12 12v11.5l4.5 4.5H28V16l-4.7-4H12zm15 15H17V17h10v10zM16.7 16l-3-3H23l3.5 3h-9.8z"
      fill="#fff"
    />
  </svg>
);

export default SvgViewLeft;
