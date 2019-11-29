import * as React from "react";

const SvgSwapMaterial = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      d="M19 19v9h9v-9h-9zm1 1.6l.6-.6H22l-2 2.1v-1.5zm0 2.9l3.5-3.5h1.4L20 24.9v-1.4zm7 2.9l-.6.6H25l2.1-2.1v1.5H27zm0-2.9L23.5 27h-1.4l4.9-4.9v1.4zm0-2.8L20.7 27H20v-.7l6.3-6.3h.7v.7zM16 13v3h-3v-3h3zm1-1h-5v5h5v-5zM18 13c2.8 0 5 2.2 5 5h1c0-3.3-2.7-6-6-6v1zM18 23c-2.8 0-5-2.2-5-5h-1c0 3.3 2.7 6 6 6v-1z"
      fill="#fff"
    />
  </svg>
);

export default SvgSwapMaterial;
