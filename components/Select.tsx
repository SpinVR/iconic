import * as React from "react";

const SvgSelect = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <circle cx={19.5} cy={18.5} r={7} stroke="#fff" />
    <path stroke="#fff" d="M19.5 10v6M19.5 21v6M11 18.5h6M22 18.5h6" />
  </svg>
);

export default SvgSelect;
