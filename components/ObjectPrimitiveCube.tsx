import * as React from "react";

const SvgObjectPrimitiveCube = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      d="M19.5 12L12 15v9l7.5 5 7.5-5v-9l-7.5-3zM19 27.5l-6-4v-7.4l6 3.2v8.2zm-5.2-12.1l5.7-2.3 5.7 2.3-5.7 3-5.7-3zm6.2 3.9l6-3.2v7.4l-6 4v-8.2z"
      fill="#fff"
    />
  </svg>
);

export default SvgObjectPrimitiveCube;
