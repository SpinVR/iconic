import * as React from "react";

const SvgMoveLarge = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      d="M32 20l-5-3v2h-6v-6h2l-3-5-3 5h2v6h-6v-2l-5 3 5 3v-2h6v6h-2l3 5 3-5h-2v-6h6v2l5-3z"
      fill="#fff"
    />
  </svg>
);

export default SvgMoveLarge;
