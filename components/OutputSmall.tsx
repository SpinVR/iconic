import * as React from "react";

const SvgOutputSmall = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" {...props}>
    <path d="M6 6v12h12V6H6zm9 9H9V9h6v6z" fill="#fff" />
  </svg>
);

export default SvgOutputSmall;
