import * as React from "react";

const SvgViewerPositionRight = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <g clipPath="url(#viewer-position-right_svg__clip0)">
      <g clipPath="url(#viewer-position-right_svg__clip1)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 30V10H10v20h14zm8-22v24H8V8h24z"
          fill="#000"
        />
      </g>
    </g>
    <defs>
      <clipPath id="viewer-position-right_svg__clip0">
        <path fill="#000" d="M0 0h40v40H0z" />
      </clipPath>
      <clipPath id="viewer-position-right_svg__clip1">
        <path fill="#000" transform="rotate(90 12 20)" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgViewerPositionRight;
