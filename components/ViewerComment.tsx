import * as React from "react";

const SvgViewerComment = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <g filter="url(#viewer-comment_svg__filter0_d)">
      <path
        d="M28.849 12H11.15C9.978 12 9 12.95 9 14.09v9.497c0 1.14.978 2.089 2.151 2.089h6.551L20.244 29l2.543-3.324h6.062c1.173 0 2.151-.95 2.151-2.09V14.09C31 12.95 30.022 12 28.849 12z"
        fill="#000"
      />
    </g>
    <defs>
      <filter
        id="viewer-comment_svg__filter0_d"
        x={-2}
        y={-2}
        width={44}
        height={44}
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

export default SvgViewerComment;
