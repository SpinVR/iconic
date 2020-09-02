import * as React from "react";

const SvgViewerArText = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      d="M10.272 26l2.448-10.88h4.192L19.36 26h-2.208l-.432-1.968h-3.808L12.48 26h-2.208zm4.16-9.056l-1.104 5.168h2.976L15.2 16.944h-.768zM23.017 22.352V26h-2.208V15.12h4.224c2.56 0 3.84 1.195 3.84 3.584 0 1.419-.533 2.464-1.6 3.136L28.825 26h-2.416l-1.264-3.648h-2.128zm2.048-1.888c.523 0 .912-.16 1.168-.48.256-.32.384-.741.384-1.264s-.139-.939-.416-1.248c-.267-.31-.656-.464-1.168-.464h-2.016v3.456h2.048z"
      fill="#000"
    />
  </svg>
);

export default SvgViewerArText;
