import * as React from "react";

const SvgViewerShareTwitter = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={44} height={44} fill="none" {...props}>
    <g filter="url(#viewer-share-twitter_svg__filter0_d)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 5C12.593 5 5 12.593 5 22s7.593 17 17 17 17-7.593 17-17S31.407 5 22 5zm-.453 14.393v-.566c-.114-1.474.793-2.947 2.266-3.514.567-.226 1.474-.226 2.04 0 .227.114.68.34 1.02.567l.567.34.68-.227c.34-.113.793-.34 1.02-.453.227-.113.34-.113.34-.113 0 .226-.453.906-.793 1.246-.454.567-.34.567.68.227.566-.227.566-.227.453 0-.113.113-.453.567-.793.907-.68.68-.68.68-.68 1.246 0 .907-.454 2.607-.794 3.627-.793 1.813-2.38 3.74-3.966 4.647-2.267 1.36-5.214 1.7-7.82.906-.794-.226-2.267-.906-2.267-1.02 0 0 .453-.113 1.02-.113 1.133 0 2.267-.34 3.173-.907l.68-.34-.793-.226c-1.02-.34-2.04-1.134-2.267-1.927-.113-.227 0-.227.567-.227h.68l-.567-.226c-.68-.34-1.36-.907-1.586-1.587-.227-.453-.567-1.473-.454-1.587 0 0 .227 0 .567.114.793.34.907.226.453-.227-.906-.907-1.133-2.267-.793-3.513l.227-.567.793.793c1.587 1.587 3.513 2.494 5.667 2.834l.68-.114z"
        fill="#000"
      />
    </g>
    <defs>
      <filter
        id="viewer-share-twitter_svg__filter0_d"
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

export default SvgViewerShareTwitter;
