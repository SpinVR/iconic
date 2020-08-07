import * as React from "react";

const SvgMouseLightLeftDoubleClick = (
  props?: React.SVGProps<SVGSVGElement>
) => (
  <svg width={49} height={49} fill="none" {...props}>
    <path
      d="M27 14c-5.5 0-10 4.5-10 10v6c0 5.5 4.5 10 10 10s10-4.5 10-10v-6c0-5.5-4.5-10-10-10zm8 10h-8v-8c4.4 0 8 3.6 8 8zm-8 14c-4.4 0-8-3.6-8-8v-4h16v4c0 4.4-3.6 8-8 8z"
      fill="#fff"
    />
    <mask
      id="mouse-light-left-double-click_svg__a"
      maskUnits="userSpaceOnUse"
      x={6}
      y={3}
      width={19}
      height={21}
    >
      <path fill="#C4C4C4" d="M6 3h19v21H6z" />
    </mask>
    <g mask="url(#mouse-light-left-double-click_svg__a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M43 24v6c0 8.837-7.163 16-16 16s-16-7.163-16-16v-6c0-8.837 7.163-16 16-16s16 7.163 16 16zM9 24c0-9.941 8.059-18 18-18s18 8.059 18 18v6c0 9.941-8.059 18-18 18S9 39.941 9 30v-6zm17-12h2c6.075 0 11 4.925 11 11v8c0 6.075-4.925 11-11 11h-2c-6.075 0-11-4.925-11-11v-8c0-6.075 4.925-11 11-11zM13 23c0-7.18 5.82-13 13-13h2c7.18 0 13 5.82 13 13v8c0 7.18-5.82 13-13 13h-2c-7.18 0-13-5.82-13-13v-8z"
        fill="#fff"
      />
    </g>
  </svg>
);

export default SvgMouseLightLeftDoubleClick;
