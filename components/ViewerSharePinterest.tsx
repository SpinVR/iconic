import * as React from "react";

const SvgViewerSharePinterest = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={44} height={44} fill="none" {...props}>
    <g filter="url(#viewer-share-pinterest_svg__filter0_d)">
      <path
        d="M22.056 5C12.618 5 5 12.593 5 22c0 7.253 4.548 13.373 10.802 15.867-.113-1.36-.227-3.4 0-4.874.341-1.36 2.047-8.5 2.047-8.5s-.455-1.02-.455-2.493c0-2.38 1.365-4.08 3.07-4.08 1.479 0 2.16 1.133 2.16 2.38 0 1.473-.909 3.627-1.364 5.667-.455 1.7.91 3.06 2.502 3.06 3.07 0 5.344-3.174 5.344-7.82 0-4.08-2.956-6.914-7.164-6.914-4.889 0-7.732 3.627-7.732 7.367 0 1.473.569 3.06 1.251 3.853.114.114.114.34.114.454-.114.566-.455 1.7-.455 1.926-.114.34-.227.34-.568.227-2.161-1.02-3.525-4.08-3.525-6.573 0-5.327 3.866-10.314 11.257-10.314 5.913 0 10.575 4.194 10.575 9.86 0 5.894-3.753 10.54-8.87 10.54-1.705 0-3.411-.906-3.866-1.926 0 0-.91 3.286-1.023 4.08-.341 1.473-1.365 3.286-2.16 4.42 1.591.453 3.297.793 5.002.793C31.38 39 39 31.407 39 22c.113-9.407-7.505-17-16.943-17z"
        fill="#000"
      />
    </g>
    <defs>
      <filter
        id="viewer-share-pinterest_svg__filter0_d"
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

export default SvgViewerSharePinterest;
