import * as React from "react";

const SvgTriggerLoop = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      d="M26.8 17.3l-.8.5c.6.7 1 1.6 1 2.7 0 2.2-1.8 4-4 4h-5V23l-3 2 3 2v-1.5h5c2.8 0 5-2.2 5-5 0-1.2-.4-2.3-1.2-3.2zM17 16.5h5V18l3-2-3-2v1.5h-5c-2.8 0-5 2.2-5 5 0 1.2.5 2.3 1.2 3.2l.8-.5c-.6-.8-1-1.7-1-2.7 0-2.2 1.8-4 4-4z"
      fill="#fff"
    />
  </svg>
);

export default SvgTriggerLoop;
