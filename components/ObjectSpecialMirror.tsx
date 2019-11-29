import * as React from "react";

const SvgObjectSpecialMirror = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <g clipPath="url(#object-special-mirror_svg__clip0)" fill="#fff">
      <path d="M20 12h-1v16h1V12zM26 18v3h-3v-3h3zm1-1h-5v5h5v-5zM16 18v3h-3v-3h3zm1-1h-5v5h5v-5z" />
    </g>
    <defs>
      <clipPath id="object-special-mirror_svg__clip0">
        <path fill="#fff" transform="translate(12 13)" d="M0 0h16v14H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgObjectSpecialMirror;
