import * as React from "react";

const SvgObjectSearch = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <g clipPath="url(#object-search_svg__clip0)">
      <path
        d="M27.85 27.15l-4.42-4.42A6.471 6.471 0 0025 18.5a6.5 6.5 0 10-6.5 6.5c1.61 0 3.09-.59 4.23-1.57l4.42 4.42.7-.7zM18.5 24a5.51 5.51 0 01-5.5-5.5c0-3.03 2.47-5.5 5.5-5.5s5.5 2.47 5.5 5.5-2.47 5.5-5.5 5.5z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="object-search_svg__clip0">
        <path
          fill="#fff"
          transform="translate(12 12)"
          d="M0 0h15.85v15.85H0z"
        />
      </clipPath>
    </defs>
  </svg>
);

export default SvgObjectSearch;
