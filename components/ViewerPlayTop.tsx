import * as React from "react";

const SvgViewerPlayTop = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <g clipPath="url(#viewer-play-top_svg__clip0)">
      <path d="M20 13.6l-8 12.8h16l-8-12.8z" fill="#000" />
    </g>
    <defs>
      <clipPath id="viewer-play-top_svg__clip0">
        <path fill="#fff" transform="rotate(-90 20 8)" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgViewerPlayTop;
