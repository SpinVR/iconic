import * as React from "react";

const SvgSoloAdd = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      d="M20 1c10.5 0 19 8.5 19 19s-8.5 19-19 19S1 30.5 1 20 9.5 1 20 1zm0-1C9 0 0 9 0 20s9 20 20 20 20-9 20-20S31 0 20 0z"
      fill="#fff"
    />
    <path
      d="M17 29h16c0-3.3-1.6-6.1-3.9-7.7 1.1-1.1 1.9-2.6 1.9-4.3 0-3.3-2.7-6-6-6s-6 2.7-6 6c0 1.7.7 3.2 1.9 4.3-2.3 1.6-3.9 4.4-3.9 7.7zm3-12c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5zm1.7 5c1 .6 2.1 1 3.3 1 1.2 0 2.4-.4 3.3-1 1.9 1.2 3.3 3.4 3.6 6H18.1c.2-2.6 1.6-4.8 3.6-6zM14.7 17h-5v-5h-1v5h-5v1h5v5h1v-5h5v-1z"
      fill="#fff"
    />
  </svg>
);

export default SvgSoloAdd;
