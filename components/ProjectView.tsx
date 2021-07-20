import * as React from "react";

const SvgProjectView = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      d="M32 29H8c-.55 0-1-.45-1-1V12c0-.55.45-1 1-1h14c.55 0 1-.45 1-1s-.45-1-1-1H7a2 2 0 00-2 2v18c0 1.1.9 2 2 2h26c1.1 0 2-.9 2-2v-8c0-.55-.45-1-1-1s-1 .45-1 1v7c0 .55-.45 1-1 1zm-5-19c0 .55.45 1 1 1h3.59L28 14.09a.996.996 0 101.41 1.41L33 12.41V16c0 .55.45 1 1 1s1-.45 1-1V9h-7c-.55 0-1 .45-1 1z"
      fill="#fff"
    />
    <path
      d="M17 15.627v8.746c0 .512.497.812.846.5l4.94-4.373c.285-.25.285-.75 0-1l-4.94-4.373c-.349-.312-.846-.012-.846.5z"
      fill="#fff"
    />
  </svg>
);

export default SvgProjectView;
