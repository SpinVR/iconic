import * as React from "react";

const SvgCloseSmall = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" {...props}>
    <g filter="url(#close-small_svg__filter0_d)">
      <path
        d="M17.5 7.5l-1-1L12 11 7.5 6.5l-1 1L11 12l-4.5 4.5 1 1L12 13l4.5 4.5 1-1L13 12l4.5-4.5z"
        fill="#fff"
      />
    </g>
    <defs>
      <filter
        id="close-small_svg__filter0_d"
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

export default SvgCloseSmall;
