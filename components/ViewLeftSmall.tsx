import * as React from "react";

const SvgViewLeftSmall = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" {...props}>
    <g filter="url(#view-left-small_svg__filter0_d)">
      <path
        d="M6 6v9l3 3h9V9l-3.5-3H6zm11 11H9.5V9.5H17V17zM9.2 8.5L7.7 7h6.4l1.8 1.5H9.2z"
        fill="#fff"
      />
    </g>
    <defs>
      <filter
        id="view-left-small_svg__filter0_d"
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

export default SvgViewLeftSmall;
