import * as React from "react";

const SvgCameraLock = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path d="M19 23a3 3 0 100-6 3 3 0 000 6zM22 12h-6v1h6v-1z" fill="#fff" />
    <path d="M12 15h14v2h1v-3H11v12h9v-1h-8V15z" fill="#fff" />
    <path
      d="M29 23v-1.5c0-1.4-1.1-2.5-2.5-2.5S24 20.1 24 21.5V23h-1v5h7v-5h-1zm-3.8-1.5c0-.7.6-1.2 1.2-1.2s1.2.6 1.2 1.2V23h-2.5v-1.5h.1z"
      fill="#fff"
    />
  </svg>
);

export default SvgCameraLock;
