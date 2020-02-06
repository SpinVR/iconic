import * as React from "react";

const SvgCameraUnlock = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path d="M19 23a3 3 0 100-6 3 3 0 000 6zM22 12h-6v1h6v-1z" fill="#fff" />
    <path d="M12 15h14v2h1v-3H11v12h9v-1h-8V15z" fill="#fff" />
    <path
      d="M25.2 23v-1.5c0-.7.6-1.2 1.2-1.2.7 0 1.2.5 1.2 1.2l1.4-.3c-.2-1.2-1.2-2.2-2.5-2.2-1.4 0-2.5 1.1-2.5 2.5V23h-1v5h7v-5h-4.8zm3.8 4h-5v-3h5v3z"
      fill="#fff"
    />
  </svg>
);

export default SvgCameraUnlock;
