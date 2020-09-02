import * as React from "react";

const SvgViewerCommentPinSmall = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={30} height={30} fill="none" {...props}>
    <g filter="url(#viewer-comment-pin-small_svg__filter0_d)">
      <path
        d="M25 12.885C24.5 20.047 15 26 15 26S5 18.873 5 12.885C5 6.896 9.477 3 15 3s10 3.896 10 9.885z"
        fill="#000"
      />
    </g>
    <defs>
      <filter
        id="viewer-comment-pin-small_svg__filter0_d"
        x={-2}
        y={-2}
        width={34}
        height={34}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={1} />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
  </svg>
);

export default SvgViewerCommentPinSmall;
