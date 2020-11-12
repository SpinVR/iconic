import * as React from "react";

const SvgViewerPositionTop = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M30 16H10v14h20V16zM8 8h24v24H8V8z"
      fill="#000"
    />
  </svg>
);

export default SvgViewerPositionTop;
