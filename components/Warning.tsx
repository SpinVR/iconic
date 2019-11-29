import * as React from "react";

const SvgWarning = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <g filter="url(#warning_svg__filter0_d)">
      <path
        d="M19.5 14L13 25h13l-6.5-11zm.5 9.1h-1v-1h1v1zm-1-2v-3h1v3h-1z"
        fill="#fff"
      />
    </g>
    <defs>
      <filter
        id="warning_svg__filter0_d"
        x={6}
        y={6}
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

export default SvgWarning;
