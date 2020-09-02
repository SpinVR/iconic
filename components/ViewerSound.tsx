import * as React from "react";

const SvgViewerSound = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <g filter="url(#viewer-sound_svg__filter0_d)" fill="#000">
      <path d="M20 12l-5 5h-4v6h4l5 5V12zM22 12v2c3 .4 5 2.9 5 6s-2 5.6-5 6v2c4.2-.5 7-3.9 7-8s-2.8-7.5-7-8z" />
      <path d="M22 16v8c1.8-.2 3-2 3-4s-1.2-3.8-3-4z" />
    </g>
    <defs>
      <filter
        id="viewer-sound_svg__filter0_d"
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
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
  </svg>
);

export default SvgViewerSound;
