import * as React from "react";

const SvgUploadPresentation = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 13h-8v14h8V13zm-9 3h-5v8h5v-8zm10 0h5v8h-5v-8z"
      fill="#fff"
    />
  </svg>
);

export default SvgUploadPresentation;
