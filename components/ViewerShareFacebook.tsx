import * as React from "react";

const SvgViewerShareFacebook = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={44} height={44} fill="none" {...props}>
    <g filter="url(#viewer-share-facebook_svg__filter0_d)">
      <path
        d="M39 22.114C39 12.644 31.407 5 22 5S5 12.644 5 22.114C5 30.671 11.233 37.745 19.393 39V27.02h-4.42v-4.906h4.307V18.35c.113-4.336 2.607-6.617 6.46-6.617 1.813 0 3.853.342 3.853.342v4.221H27.44c-2.153 0-2.72 1.37-2.72 2.624v3.195h4.76l-.793 4.906H24.72V39C32.767 37.745 39 30.671 39 22.114z"
        fill="#000"
      />
    </g>
    <defs>
      <filter
        id="viewer-share-facebook_svg__filter0_d"
        x={-2}
        y={-2}
        width={48}
        height={48}
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

export default SvgViewerShareFacebook;
