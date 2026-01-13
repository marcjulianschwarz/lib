import { useConsoleSidebarContext } from "./ConsoleSidebarContext";

export interface ConsoleSidebarSectionProps {
  title?: string;
  children: React.ReactNode;
}

export function ConsoleSidebarSection({
  title,
  children,
}: ConsoleSidebarSectionProps) {
  const { collapsed } = useConsoleSidebarContext();

  return (
    <div className={collapsed ? "" : "w-full"}>
      {title && !collapsed && (
        <div className="px-3 py-2 text-xs font-medium text-stone-500 uppercase tracking-wider">
          {title}
        </div>
      )}
      {collapsed && title && (
        <div className="w-full border-t border-stone-200 my-2" />
      )}
      <div className={`flex flex-col ${collapsed ? "items-center" : ""}`}>
        {children}
      </div>
    </div>
  );
}
