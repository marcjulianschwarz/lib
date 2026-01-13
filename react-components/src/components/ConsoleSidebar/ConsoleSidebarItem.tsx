import { Link, useLocation } from "react-router";
import { useConsoleSidebarContext } from "./ConsoleSidebarContext";

export interface ConsoleSidebarItemProps {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

export function ConsoleSidebarItem({
  link,
  icon,
  name,
}: ConsoleSidebarItemProps) {
  const location = useLocation();
  const isActive = location.pathname === link;
  const { collapsed } = useConsoleSidebarContext();

  return (
    <Link to={link} className={collapsed ? "" : "w-full block"}>
      <div
        className={`
          flex items-center rounded-md text-sm transition-colors
          ${isActive ? "bg-stone-200/70 font-medium" : "hover:bg-stone-100"}
          ${collapsed ? "w-10 h-10 justify-center" : "w-full px-3 py-2 gap-3"}
        `}
      >
        {icon && (
          <div className="w-4 h-4 flex items-center justify-center shrink-0 text-stone-600">
            {icon}
          </div>
        )}
        {!collapsed && <span className="text-stone-800">{name}</span>}
      </div>
    </Link>
  );
}
