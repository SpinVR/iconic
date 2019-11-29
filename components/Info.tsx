import * as React from "react";

const SvgInfo = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <g filter="url(#info_svg__filter0_d)">
      <path
        d="M19.5 26c3.6 0 6.5-2.9 6.5-6.5S23.1 13 19.5 13 13 15.9 13 19.5s2.9 6.5 6.5 6.5zM19 16h1v1h-1v-1zm0 2h1v5h-1v-5z"
        fill="#fff"
      />
    </g>
    <defs>
      <filter
        id="info_svg__filter0_d"
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

export default SvgInfo;
