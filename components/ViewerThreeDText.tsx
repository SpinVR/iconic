import * as React from "react";

const SvgViewerThreeDText = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <g filter="url(#viewer-threeD-text_svg__filter0_d)" fill="#000">
      <path d="M11.08 14.704c.981-.384 2.075-.576 3.28-.576 1.216 0 2.101.235 2.656.704.555.459.832 1.2.832 2.224 0 1.024-.41 1.808-1.232 2.352.512.277.875.565 1.088.864.224.299.336.773.336 1.424 0 1.141-.288 1.99-.864 2.544-.565.555-1.477.832-2.736.832-.928 0-1.904-.139-2.928-.416L11 24.528l.112-1.68c1.195.203 2.197.304 3.008.304 1.099 0 1.648-.47 1.648-1.408 0-.395-.144-.71-.432-.944-.277-.235-.645-.352-1.104-.352h-2.128v-1.824h2.128c.352 0 .661-.15.928-.448.277-.299.416-.63.416-.992 0-.757-.528-1.136-1.584-1.136-.736 0-1.52.075-2.352.224l-.416.064-.144-1.632zM23.89 24.88h-3.665V14h3.664c.939 0 1.712.101 2.32.304.608.192 1.078.517 1.408.976.341.448.576.981.704 1.6.128.608.192 1.403.192 2.384 0 .981-.059 1.797-.176 2.448a4.716 4.716 0 01-.672 1.728c-.32.501-.79.87-1.408 1.104-.619.224-1.408.336-2.368.336zm2.32-4.32c.02-.341.031-.81.031-1.408 0-.608-.021-1.093-.064-1.456a2.763 2.763 0 00-.304-.992c-.16-.299-.4-.501-.72-.608-.31-.117-.73-.176-1.264-.176h-1.456v7.04h1.456c.8 0 1.381-.203 1.744-.608.31-.33.502-.928.576-1.792z" />
    </g>
    <defs>
      <filter
        id="viewer-threeD-text_svg__filter0_d"
        x={-2}
        y={-2}
        width={44}
        height={44}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={1} />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
  </svg>
);

export default SvgViewerThreeDText;
