import * as React from "react";

const SvgOutput = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path d="M12 12v16h16V12H12zm12 12h-8v-8h8v8z" fill="#fff" />
  </svg>
);

export default SvgOutput;
