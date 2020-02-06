import * as React from "react";

const SvgViewFront = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      d="M23.3 12H12v11.5l4.5 4.5H28V16l-4.7-4zm3.7 4.5h-9.8L13.7 13H23l4 3.5zm-14 6.6v-9.4l3.5 3.5v9.4L13 23.1z"
      fill="#fff"
    />
  </svg>
);

export default SvgViewFront;
