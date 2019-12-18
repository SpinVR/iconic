import * as React from "react";

const SvgViewFrontSmall = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" {...props}>
    <g filter="url(#view-front-small_svg__filter0_d)">
      <path
        d="M14.5 6H6v9l3 3h9V9l-3.5-3zm-6 10.1L7 14.6V7.7l1.5 1.5v6.9zM7.7 7h6.4l1.8 1.5H9.2L7.7 7z"
        fill="#fff"
      />
    </g>
    <defs>
      <filter
        id="view-front-small_svg__filter0_d"
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

export default SvgViewFrontSmall;
