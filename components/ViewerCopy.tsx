import * as React from "react";

const SvgViewerCopy = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <g filter="url(#viewer-copy_svg__filter0_d)" fill="#fff">
      <path d="M27.9 15H16.1c-.6 0-1.1.5-1.1 1.1v11.8c0 .6.5 1.1 1.1 1.1h11.8c.6 0 1.1-.5 1.1-1.1V16.1c0-.6-.5-1.1-1.1-1.1zM27 27H17V17h10v10z" />
      <path d="M13 13h11v-2H12c-.6 0-1 .4-1 1v12h2V13z" />
    </g>
    <defs>
      <filter
        id="viewer-copy_svg__filter0_d"
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

export default SvgViewerCopy;
