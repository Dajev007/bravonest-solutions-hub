import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const InteractiveButton: React.FC<Props> = ({ children, className = "", ...props }) => {
  return (
    <button
      {...props}
      data-cursor
      className={`relative overflow-hidden btn-gradient inline-flex items-center gap-3 ${className}`}
    >
      <span className="absolute left-0 top-0 h-full w-0 bg-white/6 transition-all duration-500 ease-out group-hover:w-full pointer-events-none" />
      <span className="relative z-10 flex items-center gap-3">
        <span className="dot w-2 h-2 rounded-full bg-white/90 inline-block transition-transform duration-400" />
        <span>{children}</span>
      </span>
      <span className="ripple absolute rounded-full bg-white/10 opacity-0 pointer-events-none" />
    </button>
  );
};

export default InteractiveButton;
