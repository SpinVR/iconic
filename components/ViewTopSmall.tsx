import * as React from "react";

const SvgViewTopSmall = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" {...props}>
    <g filter="url(#view-top-small_svg__filter0_d)">
      <path
        d="M6 6v9l3 3h9V9l-3.5-3H6zm2.5 10.1L7 14.6V7.7l1.5 1.5v6.9zm8.5.9H9.5V9.5H17V17z"
        fill="#fff"
      />
    </g>
    <defs>
      <filter
        id="view-top-small_svg__filter0_d"
        x={-2}
        y={-2}
        width={28}
        height={28}
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

export default SvgViewTopSmall;
