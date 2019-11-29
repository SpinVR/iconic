import * as React from "react";

const SvgPanorama94X68 = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={94} height={68} fill="none" {...props}>
    <g filter="url(#panorama-94x68_svg__filter0_d)">
      <g clipPath="url(#panorama-94x68_svg__clip0)">
        <path
          d="M47 17.5c-16.5 0-29.7-3.3-29.7-3.3v39.6s13.2-3.3 29.7-3.3 29.7 3.3 29.7 3.3V14.2S63.5 17.5 47 17.5zm-26.4.66c2.31.33 5.94.99 9.9 1.65v28.38c-3.96.33-7.59.99-9.9 1.65V18.16zm13.2 29.7V20.14c3.96.33 8.58.66 13.2.66 4.62 0 9.24-.33 13.2-.66v27.72c-3.96-.33-8.58-.66-13.2-.66-4.62 0-9.24.33-13.2.66zm39.6 1.98c-2.31-.33-5.94-.99-9.9-1.65V19.81c3.96-.33 7.59-.99 9.9-1.65v31.68z"
          fill="#fff"
        />
      </g>
    </g>
    <defs>
      <clipPath id="panorama-94x68_svg__clip0">
        <path
          fill="#fff"
          transform="translate(17.3 14.2)"
          d="M0 0h59.4v39.6H0z"
        />
      </clipPath>
      <filter
        id="panorama-94x68_svg__filter0_d"
        x={-2}
        y={-2}
        width={98}
        height={72}
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

export default SvgPanorama94X68;
