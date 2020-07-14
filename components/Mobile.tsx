import * as React from "react";

const SvgMobile = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      d="M13 9v22h15V9H13zm7.5 21c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm5.5-4H15V11h11v15z"
      fill="#fff"
    />
  </svg>
);

export default SvgMobile;
