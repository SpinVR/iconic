import * as React from "react";

const SvgTriggerLookat = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <g clipPath="url(#trigger-lookat_svg__clip0)" fill="#fff">
      <path d="M17.7 13l-.5.8 2.5 1.8c-.1.1-.1.3-.2.4-1 .4-1.7 2-1.7 3.9s.7 3.5 1.7 3.9c.1.2.2.3.2.5l-2.5 1.8.6.8 9.8-7-9.9-6.9zm3.8 3.9l4.2 3-4.5 3.2c.6-.7.9-1.9.9-3.3.1-1.1-.1-2.1-.6-2.9zM16.5 20H16v1h.5v-1zM13 20h-1v1h1v-1zM15 20h-1v1h1v-1z" />
    </g>
    <defs>
      <clipPath id="trigger-lookat_svg__clip0">
        <path fill="#fff" transform="translate(12 13)" d="M0 0h15.5v13.9H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgTriggerLookat;
