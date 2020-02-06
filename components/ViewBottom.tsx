import * as React from "react";

const SvgViewBottom = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path d="M24 19h-1v2h1v-2z" fill="#fff" />
    <path
      d="M23.3 12H12v11.5l4.5 4.5H28V16l-4.7-4zM16 23h-3v-9.3l3 3V23zm-2.3-10H23v2h1v-1.1l2.5 2.1h-9.8l-3-3zM27 26.6l-1.2-1.2-.7-.7-1.1-1.1V22h-1v1h-6v-6h6v1h1v-1h3v9.6z"
      fill="#fff"
    />
  </svg>
);

export default SvgViewBottom;
