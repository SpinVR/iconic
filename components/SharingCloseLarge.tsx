import * as React from "react";

const SvgSharingCloseLarge = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <g filter="url(#sharing-close-large_svg__filter0_d)">
      <g clipPath="url(#sharing-close-large_svg__clip0)" fill="#fff">
        <path d="M25.5 16.07l-6.5 3v8l6.5 3.86 6.5-3.86v-8l-6.5-3zm0 1.1l4.93 2.28-4.93 3.04-4.93-3.04 4.93-2.28zm-5.05 9.6L20 26.5V20.27l4.55 2.8.45.28v6.11l-4.55-2.69zm5.55 2.7v-6.12l.45-.28 4.55-2.8V26.5l-.45.27-4.55 2.7z" />
        <path d="M17 26h-6c-.55 0-1-.45-1-1V13c0-.55.45-1 1-1h18c.55 0 1 .45 1 1v2h2v-2c0-1.66-1.34-3-3-3H11c-1.66 0-3 1.34-3 3v12c0 1.66 1.34 3 3 3h6v-2z" />
      </g>
    </g>
    <defs>
      <clipPath id="sharing-close-large_svg__clip0">
        <path fill="#fff" transform="translate(8 10)" d="M0 0h24v20.93H0z" />
      </clipPath>
      <filter
        id="sharing-close-large_svg__filter0_d"
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

export default SvgSharingCloseLarge;
