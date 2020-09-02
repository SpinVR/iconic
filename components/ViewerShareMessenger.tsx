import * as React from "react";

const SvgViewerShareMessenger = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={44} height={44} fill="none" {...props}>
    <g filter="url(#viewer-share-messenger_svg__filter0_d)" fill="#000">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 22c0 9.4 7.6 17 17 17s17-7.6 17-17S31.4 5 22 5 5 12.6 5 22zm10.5 10.2v-3.6c-2.3-1.7-3.7-4.4-3.7-7.3 0-5.2 4.5-9.4 10.1-9.4C27.5 11.8 32 16 32 21.2c0 5.2-4.5 9.4-10.1 9.4-1 0-2-.1-3-.4l-3.4 2z"
      />
      <path d="M20.8 18.6l-5.5 5.8 5-2.7 2.6 2.7 5.4-5.8-4.9 2.7-2.6-2.7z" />
    </g>
    <defs>
      <filter
        id="viewer-share-messenger_svg__filter0_d"
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

export default SvgViewerShareMessenger;
