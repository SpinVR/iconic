import * as React from "react";

const SvgViewerCommentModeSelected = (
  props?: React.SVGProps<SVGSVGElement>
) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 37c9.389 0 17-7.611 17-17S29.389 3 20 3 3 10.611 3 20s7.611 17 17 17zm-6.834-22.1h13.706c.909 0 1.666.718 1.666 1.579v7.175c0 .861-.758 1.579-1.666 1.579h-4.695l-1.969 2.511-1.969-2.511h-5.073c-.909 0-1.666-.718-1.666-1.579V16.48c0-.861.757-1.579 1.666-1.579z"
      fill="#000"
    />
  </svg>
);

export default SvgViewerCommentModeSelected;
