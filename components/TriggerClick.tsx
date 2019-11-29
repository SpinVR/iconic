import * as React from "react";

const SvgTriggerClick = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.793 12.429h1.414V17h-1.414v-4.571zM17 18.793h-4.571v1.414H17v-1.414zM18.793 22v4.571h1.414V22h-1.414zM22 20.207h4.571v-1.414H22v1.414z"
      fill="#fff"
    />
  </svg>
);

export default SvgTriggerClick;
