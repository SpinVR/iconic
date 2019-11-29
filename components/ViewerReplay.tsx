import * as React from "react";

const SvgViewerReplay = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <g filter="url(#viewer-replay_svg__filter0_d)">
      <path
        d="M22 11c-5 0-9 4-9 9h-3l4.5 5 4.5-5h-3c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6c-.9 0-1.7-.2-2.5-.5l-2.2 2.2c1.4.8 3 1.3 4.7 1.3 5 0 9-4 9-9s-4-9-9-9z"
        fill="#fff"
      />
    </g>
    <defs>
      <filter
        id="viewer-replay_svg__filter0_d"
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
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
  </svg>
);

export default SvgViewerReplay;
