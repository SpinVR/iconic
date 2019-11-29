import * as React from "react";

const SvgViewerInfo = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <g filter="url(#viewer-info_svg__filter0_d)">
      <path
        d="M20 9C13.95 9 9 13.95 9 20s4.95 11 11 11 11-4.95 11-11S26.05 9 20 9zm1.375 17.875h-2.75v-8.25h2.75v8.25zm0-11h-2.75v-2.75h2.75v2.75z"
        fill="#fff"
      />
    </g>
    <defs>
      <filter
        id="viewer-info_svg__filter0_d"
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

export default SvgViewerInfo;
