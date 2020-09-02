import * as React from "react";

const SvgViewerSoundOff = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      d="M15 13l-1 1 2 2-1 1h-4v6h4l5 5v-8l2 2v2c.5-.1 1-.3 1.4-.6l1.4 1.4c-.8.6-1.7 1.1-2.8 1.2v2c1.6-.2 3.1-.8 4.2-1.8L28 28l1-1-14-14zM27 20c0 .9-.2 1.7-.5 2.5L28 24c.6-1.2 1-2.5 1-4 0-4.1-2.8-7.5-7-8v2c3 .4 5 2.9 5 6zM20 16v-4l-2 2 2 2z"
      fill="#000"
    />
    <path d="M25 20c0-2-1.2-3.8-3-4v2l2.9 2.9c.1-.3.1-.6.1-.9z" fill="#000" />
  </svg>
);

export default SvgViewerSoundOff;
