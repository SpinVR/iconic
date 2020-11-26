import * as React from "react";

const SvgViewerPlayLeft = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <g clipPath="url(#viewer-play-left_svg__clip0)">
      <path d="M13.6 20l12.8 8V12l-12.8 8z" fill="#000" />
    </g>
    <defs>
      <clipPath id="viewer-play-left_svg__clip0">
        <path fill="#fff" transform="rotate(-180 14 14)" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgViewerPlayLeft;
