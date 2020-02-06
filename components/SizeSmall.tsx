import * as React from "react";

const SvgSizeSmall = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" {...props}>
    <path
      d="M16 10.8h-1v1.3h1v-1.3zM16 13.4h-1v1.3h1v-1.3zM15 9.5h1V8h-1.5v1h.5v.5zM10.6 8H9.3v1h1.3V8zM13.2 8h-1.3v1h1.3V8z"
      fill="#fff"
    />
    <path d="M18 16.5L16 15v1H8V8h1L7.5 6 6 8h1v9h9v1l2-1.5z" fill="#fff" />
  </svg>
);

export default SvgSizeSmall;
