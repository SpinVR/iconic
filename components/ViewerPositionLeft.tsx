import * as React from "react";

const SvgViewerPositionLeft = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <g clipPath="url(#viewer-position-left_svg__clip0)">
      <g clipPath="url(#viewer-position-left_svg__clip1)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 10v20h14V10H16zM8 32V8h24v24H8z"
          fill="#000"
        />
      </g>
    </g>
    <defs>
      <clipPath id="viewer-position-left_svg__clip0">
        <path fill="#000" d="M0 0h40v40H0z" />
      </clipPath>
      <clipPath id="viewer-position-left_svg__clip1">
        <path fill="#000" transform="rotate(-90 20 12)" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgViewerPositionLeft;
