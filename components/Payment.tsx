import * as React from "react";

const SvgPayment = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <g clipPath="url(#payment_svg__clip0)">
      <path
        d="M25.3 15H14c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h11.3c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1zm0 1v2H14v-2h11.3zM14 24v-4h11.3v4H14z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="payment_svg__clip0">
        <path fill="#fff" d="M13 15h13.3v10H13z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgPayment;
