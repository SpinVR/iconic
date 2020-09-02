import * as React from "react";

const SvgViewerShareWhatsapp = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={44} height={44} fill="none" {...props}>
    <g
      filter="url(#viewer-share-whatsapp_svg__filter0_d)"
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#000"
    >
      <path d="M5 22c0 9.4 7.6 17 17 17s17-7.6 17-17S31.4 5 22 5 5 12.6 5 22zm27.7-.7c0 5.6-4.5 10.1-10.1 10.1-1.7 0-3.4-.4-4.8-1.2l-5.4 1.4 1.4-5.2c-.9-1.5-1.4-3.3-1.3-5.1 0-5.6 4.5-10.1 10.1-10.1 2.7 0 5.2 1.1 7.2 3 1.8 1.9 2.9 4.4 2.9 7.1z" />
      <path d="M14.8 29.2l3.2-.8.3.2c1.3.8 2.8 1.2 4.3 1.2 4.6 0 8.4-3.8 8.4-8.4 0-2.2-.9-4.4-2.5-5.9-1.6-1.6-3.7-2.5-5.9-2.5-4.6 0-8.4 3.8-8.4 8.4 0 1.6.4 3.1 1.3 4.5l.2.3-.9 3zm12.5-5.7c.2.1.3.1.3.2.1.1.1.6-.1 1.2s-1.2 1.1-1.7 1.2c-.4.1-1 .1-1.6-.1-.4-.1-.8-.3-1.4-.5-2.4-1-4-3.3-4.3-3.8v-.1c-.1-.2-1-1.4-1-2.6 0-1.2.6-1.8.8-2.1v-.1c.2-.3.5-.3.7-.3h.6c.1 0 .3 0 .5.4.1.2.2.4.3.7.2.5.5 1.1.5 1.2.1.1.1.3 0 .4v.1c-.1.1-.1.2-.2.3 0 0-.1.1-.1.2-.1.1-.2.2-.2.3-.1.1-.3.3-.1.5.1.3.7 1.1 1.4 1.7.8.7 1.5 1 1.9 1.2.1 0 .1.1.2.1.3.1.4.1.5-.1.1-.2.6-.7.8-1 .2-.3.3-.2.6-.1.2.1 1.5.7 1.7.8-.2.3-.1.3-.1.3z" />
    </g>
    <defs>
      <filter
        id="viewer-share-whatsapp_svg__filter0_d"
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

export default SvgViewerShareWhatsapp;
