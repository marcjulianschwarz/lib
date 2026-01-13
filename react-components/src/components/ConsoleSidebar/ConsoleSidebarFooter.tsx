import { ChevronDown } from "lucide-react";
import { useConsoleSidebarContext } from "./ConsoleSidebarContext";

export interface ConsoleSidebarFooterProps {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  onClick?: () => void;
}

export function ConsoleSidebarFooter({
  icon,
  title,
  subtitle,
  onClick,
}: ConsoleSidebarFooterProps) {
  const { collapsed } = useConsoleSidebarContext();

  if (collapsed) {
    return (
      <button
        onClick={onClick}
        className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-stone-100 transition-colors"
      >
        {icon && (
          <div className="w-5 h-5 flex items-center justify-center text-stone-600">
            {icon}
          </div>
        )}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="w-full px-3 py-2 flex items-center gap-3 rounded-md text-left hover:bg-stone-100 transition-colors"
    >
      {icon && (
        <div className="w-5 h-5 flex items-center justify-center shrink-0 text-stone-600">
          {icon}
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-stone-800 truncate">
          {title}
        </div>
        {subtitle && (
          <div className="text-xs text-stone-500 truncate">{subtitle}</div>
        )}
      </div>
      <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />
    </button>
  );
}
