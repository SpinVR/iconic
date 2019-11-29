import * as React from "react";

const SvgViewerConfigurator = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <g filter="url(#viewer-configurator_svg__filter0_d)" fill="#fff">
      <path d="M24 17c-1.3 0-2.4.8-2.8 2H10v2h11.2c.4 1.2 1.5 2 2.8 2 1.3 0 2.4-.8 2.8-2H31v-2h-4.2c-.4-1.2-1.5-2-2.8-2zm0 4.5c-.4 0-.8-.2-1.1-.5-.2-.3-.4-.6-.4-1s.2-.7.4-1c.3-.3.7-.5 1.1-.5.4 0 .8.2 1.1.5.2.3.4.6.4 1s-.2.7-.4 1c-.3.3-.7.5-1.1.5zM16 24c-1.3 0-2.4.8-2.8 2H10v2h3.2c.4 1.2 1.5 2 2.8 2 1.3 0 2.4-.8 2.8-2H31v-2H18.8c-.4-1.2-1.5-2-2.8-2zm0 4.5c-.4 0-.8-.2-1.1-.5-.2-.3-.4-.6-.4-1s.2-.7.4-1c.3-.3.7-.5 1.1-.5.4 0 .8.2 1.1.5.2.3.4.6.4 1s-.2.7-.4 1c-.3.3-.7.5-1.1.5zM18.8 12c-.4-1.2-1.5-2-2.8-2-1.3 0-2.4.8-2.8 2H10v2h3.2c.4 1.2 1.5 2 2.8 2 1.3 0 2.4-.8 2.8-2H31v-2H18.8zM16 14.5c-.4 0-.8-.2-1.1-.5-.2-.3-.4-.6-.4-1s.2-.7.4-1c.3-.3.7-.5 1.1-.5.4 0 .8.2 1.1.5.2.3.4.6.4 1s-.2.7-.4 1c-.3.3-.7.5-1.1.5z" />
    </g>
    <defs>
      <filter
        id="viewer-configurator_svg__filter0_d"
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

export default SvgViewerConfigurator;