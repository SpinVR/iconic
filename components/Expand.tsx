import * as React from "react";

const SvgExpand = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      d="M20 24l6-6.269-.7-.731-5.3 5.537L14.7 17l-.7.731L20 24z"
      fill="#fff"
    />
  </svg>
);

export default SvgExpand;
