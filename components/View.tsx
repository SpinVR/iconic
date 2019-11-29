import * as React from "react";

const SvgView = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <g filter="url(#view_svg__filter0_d)">
      <path
        d="M20 12c-8.8 0-12 8-12 8s3.2 8 12 8 12-8 12-8-3.2-8-12-8zm0 13.333c-2.933 0-5.333-2.4-5.333-5.333 0-2.933 2.4-5.333 5.333-5.333 2.933 0 5.333 2.4 5.333 5.333 0 2.933-2.4 5.333-5.333 5.333z"
        fill="#fff"
      />
    </g>
    <defs>
      <filter
        id="view_svg__filter0_d"
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

export default SvgView;
