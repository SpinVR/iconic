import * as React from "react";

const SvgToastError = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <g clipPath="url(#toast-error_svg__clip0)">
      <path
        d="M19.5 13c-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5 6.5-2.9 6.5-6.5-2.9-6.5-6.5-6.5zm.5 10h-1v-1h1v1zm0-2h-1v-5h1v5z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="toast-error_svg__clip0">
        <path
          fill="#fff"
          transform="rotate(-180 13.5 13.5)"
          d="M0 0h14v14H0z"
        />
      </clipPath>
    </defs>
  </svg>
);

export default SvgToastError;
