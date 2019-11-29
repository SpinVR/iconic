import * as React from "react";

const SvgTriggerComplete = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <g clipPath="url(#trigger-complete_svg__clip0)" fill="#C4C4C4">
      <path d="M16 13h9v1h-9z" />
      <path d="M20 13h1v8h-1v-8z" />
      <path d="M20.5 26l-3.897-6h7.794L20.5 26z" />
    </g>
    <defs>
      <clipPath id="trigger-complete_svg__clip0">
        <path
          fill="#fff"
          transform="translate(13 13)"
          d="M0 0h14.27v13.48H0z"
        />
      </clipPath>
    </defs>
  </svg>
);

export default SvgTriggerComplete;
