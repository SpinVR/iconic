import * as React from "react";

const SvgLockSmall = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" {...props}>
    <path
      d="M15 11V9.9C15 8.3 13.7 7 12.1 7h-.2C10.3 7 9 8.3 9 9.9V11H8v7h8v-7h-1zm-5-1.1c0-1 .9-1.9 1.9-1.9h.1c1.1 0 2 .9 2 1.9V11h-4V9.9zm5 7.1H9v-5h6v5z"
      fill="#fff"
    />
  </svg>
);

export default SvgLockSmall;
