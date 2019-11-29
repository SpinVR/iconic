import * as React from "react";

const SvgCameraLarge = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path d="M30 15v13H10V15h20zm2-2H8v17h24V13z" fill="#fff" />
    <path
      d="M20 26c2.5 0 4.5-2 4.5-4.5S22.5 17 20 17s-4.5 2-4.5 4.5 2 4.5 4.5 4.5zM25 9H15v2h10V9z"
      fill="#fff"
    />
  </svg>
);

export default SvgCameraLarge;
