import * as React from "react";

const SvgScale = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      d="M12 20v8h16V12H12v8zm1 7v-6h6v6h-6zm14-14v14h-7v-7h-7v-7h14z"
      fill="#fff"
    />
  </svg>
);

export default SvgScale;
