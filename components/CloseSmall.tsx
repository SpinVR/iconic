import * as React from "react";

const SvgCloseSmall = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" {...props}>
    <path
      d="M17.5 7.5l-1-1L12 11 7.5 6.5l-1 1L11 12l-4.5 4.5 1 1L12 13l4.5 4.5 1-1L13 12l4.5-4.5z"
      fill="#fff"
    />
  </svg>
);

export default SvgCloseSmall;
