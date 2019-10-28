import * as React from "react";

const SvgTextLineHeightSmall = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" {...props}>
    <path
      d="M12 9H7v1h5V9zM12 12H7v1h5v-1zM12 15H7v1h5v-1zM16 12V9h1l-1.5-2L14 9h1v7h-1l1.5 2 1.5-2h-1v-4z"
      fill="#fff"
    />
  </svg>
);

export default SvgTextLineHeightSmall;
