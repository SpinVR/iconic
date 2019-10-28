import * as React from "react";

const SvgCollapse = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      d="M20 16l-6 6.269.7.731 5.3-5.537L25.3 23l.7-.731L20 16z"
      fill="#fff"
    />
  </svg>
);

export default SvgCollapse;
