import * as React from "react";

const SvgSharingOpenLarge = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <g filter="url(#sharing-open-large_svg__filter0_d)" fill="#fff">
      <path d="M17 27h-6c-.55 0-1-.45-1-1V14c0-.55.45-1 1-1h18c.55 0 1 .45 1 1v2h2v-2c0-1.66-1.34-3-3-3H11c-1.66 0-3 1.34-3 3v12c0 1.66 1.34 3 3 3h6v-2z" />
      <path d="M32 29c0-7.5-4.73-7.42-7-7.5V17l-8 6 8 6v-4.5c1.76-.03 5.5 0 7 4.5z" />
    </g>
    <defs>
      <filter
        id="sharing-open-large_svg__filter0_d"
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

export default SvgSharingOpenLarge;
