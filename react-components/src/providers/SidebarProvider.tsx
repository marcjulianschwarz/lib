import { useLocation } from "react-router";

interface SidebarProviderProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
  hideSidebarRoutes?: string[];
}

export default function SidebarProvider({
  sidebar,
  children,
  hideSidebarRoutes = [],
}: SidebarProviderProps) {
  const location = useLocation();

  const shouldHideSidebar = hideSidebarRoutes.includes(location.pathname);

  if (shouldHideSidebar) {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-col sm:flex-row sm:min-h-screen">
      {sidebar}
      {children}
    </div>
  );
}
