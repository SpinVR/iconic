import * as React from "react";

const SvgToastBrio = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.5 15h2.1c1.3 0 2.4 1.1 2.4 2.4v.2c0 1.3-1.1 2.4-2.4 2.4h-2.1c-.3 0-.5-.2-.5-.6v-3.9c0-.3.2-.5.5-.5zm.1 6h.2c2.3 0 4.2 1.9 4.2 4.2v.2c0 .3-.3.6-.6.6h-3.8c-.3 0-.6-.3-.6-.6v-3.8c0-.3.3-.6.6-.6zm-4 0h-2.1c-.3 0-.5.2-.5.5v3.9c0 .4.2.6.5.6h2.1c1.3 0 2.4-1.1 2.4-2.4v-.2c0-1.3-1.1-2.4-2.4-2.4zm-2.1-6h2.1c1.3 0 2.4 1.1 2.4 2.4v.2c0 1.3-1.1 2.4-2.4 2.4h-2.1c-.3 0-.5-.2-.5-.6v-3.9c0-.3.2-.5.5-.5z"
      fill="#fff"
    />
  </svg>
);

export default SvgToastBrio;
