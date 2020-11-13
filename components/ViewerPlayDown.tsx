import * as React from "react";

const SvgViewerPlayDown = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <g clipPath="url(#viewer-play-down_svg__clip0)">
      <path d="M20 26.4l8-12.8H12l8 12.8z" fill="#000" />
    </g>
    <defs>
      <clipPath id="viewer-play-down_svg__clip0">
        <path fill="#000" transform="rotate(90 8 20)" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgViewerPlayDown;
