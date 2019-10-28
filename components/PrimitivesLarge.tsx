import * as React from "react";

const SvgPrimitivesLarge = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      d="M8 10.8v14.3L20 33l12-7.9V10.8L20 6 8 10.8zm2.4.1L20 7.1l9.6 3.8L20 16l-9.6-5.1zM9 12.4l10 5.3v13.4L9 24.5V12.4zm22 12.1l-10 6.6V17.7l10-5.3v12.1z"
      fill="#fff"
    />
  </svg>
);

export default SvgPrimitivesLarge;
