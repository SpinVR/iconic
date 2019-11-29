import * as React from "react";

const SvgObjectSpecialPortal = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path d="M27 20h-6.5v-3L17 20.5l3.5 3.5v-3H27v-1z" fill="#fff" />
    <path
      d="M14 20.5c0-2.7 1.2-5.2 3.3-6.8l-.6-.7c-2.3 1.8-3.7 4.6-3.7 7.5 0 2.9 1.4 5.7 3.7 7.5l.6-.7c-2.1-1.6-3.3-4.1-3.3-6.8z"
      fill="#fff"
    />
  </svg>
);

export default SvgObjectSpecialPortal;
