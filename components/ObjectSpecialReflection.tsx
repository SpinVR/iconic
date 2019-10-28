import * as React from "react";

const SvgObjectSpecialReflection = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <g clipPath="url(#object-special-reflection_svg__clip0)" fill="#fff">
      <path d="M12 25v1h15.5v-1H12zM15 13v6.5h-3l3.5 3.5 3.5-3.5h-3V13h-1zM23 23v-6.5h-3l3.5-3.5 3.5 3.5h-3V23h-1z" />
    </g>
    <defs>
      <clipPath id="object-special-reflection_svg__clip0">
        <path fill="#fff" transform="translate(11 13)" d="M0 0h17v13H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgObjectSpecialReflection;
