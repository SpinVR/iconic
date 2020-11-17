import * as React from "react";

const SvgGizmoDirectionalLight = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={101} height={102} fill="none" {...props}>
    <g filter="url(#gizmo-directional-light_svg__filter0_d)" fill="#fff">
      <path d="M64.612 51c0-7.974-6.392-14.43-14.287-14.43-7.895 0-14.287 6.456-14.287 14.43 0 7.976 6.392 14.432 14.287 14.432 7.895 0 14.287-6.456 14.287-14.431zM40.55 51c0-5.468 4.361-9.873 9.775-9.873 5.414 0 9.775 4.405 9.775 9.874 0 5.468-4.361 9.873-9.775 9.873-5.414 0-9.775-4.405-9.775-9.873zM52.58 25.936h-4.51v4.558h4.51v-4.558zM34.389 31.669l-3.19 3.222 3.19 3.223 3.19-3.223-3.19-3.222zM30.023 48.723h-4.511v4.557h4.511v-4.557zM75.139 48.723h-4.512v4.557h4.512v-4.557zM66.276 31.68l-3.19 3.223 3.19 3.222 3.19-3.222-3.19-3.223z" />
      <path d="M42.825 58.725h15v9h-15zM42.825 69.725h15v2h-15z" />
    </g>
    <defs>
      <filter
        id="gizmo-directional-light_svg__filter0_d"
        x={-1.175}
        y={-1}
        width={103}
        height={104}
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

export default SvgGizmoDirectionalLight;
