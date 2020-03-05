import * as React from "react";

const SvgTriggerParallel = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      d="M15.5 19a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM28 12h-7v7h7v-7zM25 21h-1v4h-1.5l2 3 2-3H25v-4zM16 21h-1v4h-1.5l2 3 2-3H16v-4z"
      fill="#fff"
    />
  </svg>
);

export default SvgTriggerParallel;
