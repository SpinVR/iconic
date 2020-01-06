import * as React from "react";

const SvgProfileDefault = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={95} height={95} fill="none" {...props}>
    <path
      d="M95 47.5C95 21.267 73.734 0 47.5 0 21.267 0 0 21.267 0 47.5 0 73.734 21.267 95 47.5 95 73.734 95 95 73.734 95 47.5z"
      fill="#C4C4C4"
    />
    <path
      d="M28.5 68.875h38c0-7.837-3.8-14.487-9.263-18.288 2.613-2.612 4.513-6.175 4.513-10.212 0-7.837-6.413-14.25-14.25-14.25s-14.25 6.413-14.25 14.25c0 4.038 1.663 7.6 4.513 10.212-5.463 3.8-9.263 10.45-9.263 18.288zm7.125-28.5c0-6.65 5.225-11.875 11.875-11.875s11.875 5.225 11.875 11.875S54.15 52.25 47.5 52.25s-11.875-5.225-11.875-11.875zm4.038 11.875c2.375 1.425 4.987 2.375 7.837 2.375 2.85 0 5.7-.95 7.837-2.375 4.513 2.85 7.838 8.075 8.55 14.25H31.113c.476-6.175 3.8-11.4 8.55-14.25z"
      fill="#878787"
    />
  </svg>
);

export default SvgProfileDefault;