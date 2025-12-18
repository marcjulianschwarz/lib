import { useState, type ReactNode } from "react";

interface ExpanderProps {
  title: string;
  children: ReactNode;
  defaultExpanded?: boolean;
  className?: string;
}

export default function Expander({
  title,
  children,
  defaultExpanded = false,
  className = "",
}: ExpanderProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div
      className={`border border-slate-200 rounded-lg overflow-hidden ${className}`}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-3 text-left hover:bg-slate-50 transition-colors duration-200 cursor-pointer"
      >
        <span className="text-sm font-medium text-slate-700">{title}</span>
        <svg
          className={`w-5 h-5 text-slate-500 transition-transform duration-300 ease-in-out ${
            isExpanded ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-3 pb-3">{children}</div>
      </div>
    </div>
  );
}
