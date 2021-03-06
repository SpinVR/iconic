import * as React from "react";

const SvgConfigurator = (props?: React.SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} fill="none" {...props}>
    <path
      d="M18.9 14.5c-.2-.9-1-1.5-1.9-1.5-.9 0-1.7.6-1.9 1.5H12v1h3.1c.2.9 1 1.5 1.9 1.5.9 0 1.7-.6 1.9-1.5H28v-1h-9.1zm-1.1 1c-.1.3-.4.5-.8.5s-.7-.2-.8-.5c-.1-.1-.2-.3-.2-.5s.1-.4.2-.5c.1-.3.4-.5.8-.5s.7.2.8.5c.1.1.2.3.2.5s-.1.4-.2.5zM23 18c-.9 0-1.7.6-1.9 1.5H12v1h9.1c.2.9 1 1.5 1.9 1.5.9 0 1.7-.6 1.9-1.5H28v-1h-3.1c-.2-.9-1-1.5-1.9-1.5zm.8 2.5c-.1.3-.4.5-.8.5s-.7-.2-.8-.5c-.1-.1-.2-.3-.2-.5s.1-.4.2-.5c.1-.3.4-.5.8-.5s.7.2.8.5c.1.1.2.3.2.5s-.1.4-.2.5zM17 23c-.9 0-1.7.6-1.9 1.5H12v1h3.1c.2.9 1 1.5 1.9 1.5.9 0 1.7-.6 1.9-1.5H28v-1h-9.1c-.2-.9-1-1.5-1.9-1.5zm.8 2.5c-.1.3-.4.5-.8.5s-.7-.2-.8-.5c-.1-.1-.2-.3-.2-.5s.1-.4.2-.5c.1-.3.4-.5.8-.5s.7.2.8.5c.1.1.2.3.2.5s-.1.4-.2.5z"
      fill="#fff"
    />
  </svg>
);

export default SvgConfigurator;
