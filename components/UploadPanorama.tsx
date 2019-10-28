import * as React from "react";

const SvgUploadPanorama = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      d="M20 15c-5 0-9-1-9-1v12s4-1 9-1 9 1 9 1V14s-4 1-9 1zm-8 .2c.7.1 1.8.3 3 .5v8.6c-1.2.1-2.3.3-3 .5v-9.6zm4 9v-8.4c1.2.1 2.6.2 4 .2s2.8-.1 4-.2v8.4c-1.2-.1-2.6-.2-4-.2s-2.8.1-4 .2zm12 .6c-.7-.1-1.8-.3-3-.5v-8.6c1.2-.1 2.3-.3 3-.5v9.6z"
      fill="#fff"
    />
  </svg>
);

export default SvgUploadPanorama;
