import * as React from "react";

const SvgViewerPositionBottom = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <g clipPath="url(#viewer-position-bottom_svg__clip0)">
      <g clipPath="url(#viewer-position-bottom_svg__clip1)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 24h20V10H10v14zm22 8H8V8h24v24z"
          fill="#000"
        />
      </g>
    </g>
    <defs>
      <clipPath id="viewer-position-bottom_svg__clip0">
        <path fill="#000" d="M0 0h40v40H0z" />
      </clipPath>
      <clipPath id="viewer-position-bottom_svg__clip1">
        <path fill="#000" transform="rotate(-180 16 16)" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgViewerPositionBottom;
