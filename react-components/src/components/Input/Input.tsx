import type { InputHTMLAttributes, RefObject } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  ref?: RefObject<HTMLInputElement | null>;
  highlightOnFocus?: boolean;
}

export default function Input({
  className = "",
  ref,
  highlightOnFocus = true,
  ...inputProps
}: InputProps) {
  const focusClass = highlightOnFocus
    ? "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    : "";
  return (
    <input
      ref={ref}
      {...inputProps}
      // font size is set to 16px here because this is the minimum font-size for iOS not to zoom into search bars.
      className={`w-full  pr-4 pl-4 py-2 text-[16px] border border-gray-300 rounded-lg ${focusClass} transition-colors ${className}`}
    ></input>
  );
}
