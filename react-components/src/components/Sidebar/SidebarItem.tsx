import { useSidebarContext } from "@/contexts/SidebarContext";
import { Link, useLocation } from "react-router";

export interface SidebarItemProps {
  name: string;
  link: string;
  icon: React.ReactNode;
}

export function SidebarItem({ link, icon, name }: SidebarItemProps) {
  const location = useLocation();
  const isActive = location.pathname === link;
  const { showTitles } = useSidebarContext();

  return (
    <Link to={link} className={showTitles ? "w-full" : ""}>
      <div
        className={`
        ${showTitles ? "w-full px-4 gap-3 justify-start" : "w-[50px] justify-center"} h-[50px] flex items-center no-underline
        ${isActive ? "bg-gray-100 border-gray-400" : "bg-white border-gray-200"} rounded-xl border transition-colors
        hover:bg-gray-100
      `}
      >
        <div className="w-6 h-6 flex items-center justify-center shrink-0">
          {icon}
        </div>
        {showTitles && (
          <span className="text-sm font-medium whitespace-nowrap">{name}</span>
        )}
      </div>
    </Link>
  );
}
