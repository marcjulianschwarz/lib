import { Link, useLocation } from "react-router";

export interface SidebarItemProps {
  name: string;
  link: string;
  icon: React.ReactNode;
}

export function SidebarItem({ link, icon }: SidebarItemProps) {
  const location = useLocation();
  const isActive = location.pathname === link;

  return (
    <Link to={link}>
      <div
        className={`
        w-[50px] h-[50px] flex justify-center items-center no-underline
        ${isActive ? "bg-gray-100 border-gray-400" : "bg-white border-gray-200"} rounded-xl border transition-colors
        hover:bg-gray-100
      `}
      >
        {icon}
      </div>
    </Link>
  );
}
