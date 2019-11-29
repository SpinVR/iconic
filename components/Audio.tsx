import * as React from "react";

const SvgAudio = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      d="M18 15v7.5c-.4-.3-.9-.5-1.5-.5-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5v-5.7l6-1.5v4.3c-.4-.4-.9-.6-1.5-.6-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5V13l-8 2zm-1.5 11c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm7-1c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zM19 17.7v-1.9l6-1.5v1.9l-6 1.5z"
      fill="#fff"
    />
  </svg>
);

export default SvgAudio;
