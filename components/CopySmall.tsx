import * as React from "react";

const SvgCopySmall = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" {...props}>
    <g filter="url(#copy-small_svg__filter0_d)">
      <g clipPath="url(#copy-small_svg__clip0)" fill="#fff">
        <path d="M17.3 9.7H9.4c-.4 0-.7.3-.7.7v7.9c0 .4.3.7.7.7h7.9c.4 0 .7-.3.7-.7v-7.9c0-.4-.3-.7-.7-.7zm-.6 8H10V11h6.7v6.7z" />
        <path d="M7.3 8.3h7.3V7h-8c-.3 0-.6.3-.6.7v8h1.3V8.3z" />
      </g>
    </g>
    <defs>
      <clipPath id="copy-small_svg__clip0">
        <path fill="#fff" transform="translate(6 7)" d="M0 0h12v12H0z" />
      </clipPath>
      <filter
        id="copy-small_svg__filter0_d"
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

export default SvgCopySmall;
