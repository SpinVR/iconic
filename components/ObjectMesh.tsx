import * as React from "react";

const SvgObjectMesh = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <g clipPath="url(#object-mesh_svg__clip0)">
      <path
        d="M19.5 13L12 26.86h15L19.5 13zm.5 3.02l5.14 9.49L20 22.09v-6.07zm-1 6.07l-5.14 3.42L19 16.02v6.07zm.5.87l4.35 2.9h-8.7l4.35-2.9z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="object-mesh_svg__clip0">
        <path fill="#fff" transform="translate(12 13)" d="M0 0h15v13.86H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgObjectMesh;
