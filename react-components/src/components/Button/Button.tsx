import { type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | React.ReactNode[];
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export default function Button({
  className = "",
  children,
  leftIcon,
  rightIcon,
  ...buttonProps
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center px-4 py-2 border border-default-border-500 rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed disabled:hover:bg-gray-300 disabled:text-white transition-colors font-medium cursor-pointer bg-white hover:bg-gray-50";

  return (
    <button {...buttonProps} className={`${baseClasses} ${className}`.trim()}>
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
}
