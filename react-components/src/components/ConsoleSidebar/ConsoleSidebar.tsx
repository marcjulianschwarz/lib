import { useState } from "react";
import { PanelLeftClose, PanelLeft, Menu, X } from "lucide-react";
import { ConsoleSidebarContext } from "./ConsoleSidebarContext";

export interface ConsoleSidebarProps {
  /** Content to display in the header area (e.g., logo and title) */
  header?: React.ReactNode;
  /** Icon to show in collapsed header (e.g., logo icon) */
  headerIcon?: React.ReactNode;
  /** Main navigation content (sections and items) */
  children: React.ReactNode;
  /** Footer content (e.g., user info, links) */
  footer?: React.ReactNode;
  /** Whether the sidebar starts collapsed on desktop */
  defaultCollapsed?: boolean;
  /** Callback when collapse state changes */
  onCollapseChange?: (collapsed: boolean) => void;
}

export default function ConsoleSidebar({
  header,
  headerIcon,
  children,
  footer,
  defaultCollapsed = false,
  onCollapseChange,
}: ConsoleSidebarProps) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggle = () => {
    const newState = !collapsed;
    setCollapsed(newState);
    onCollapseChange?.(newState);
  };

  const handleMobileToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <ConsoleSidebarContext.Provider value={{ collapsed }}>
      {/* Mobile view */}
      <div className="sm:hidden">
        {/* Mobile hamburger menu button */}
        <div className="fixed top-4 left-4 z-50">
          <button
            onClick={handleMobileToggle}
            className="w-10 h-10 flex justify-center items-center bg-stone-100 rounded-md border border-stone-200 transition-colors hover:bg-stone-200 text-stone-500"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/20"
            onClick={handleMobileToggle}
          >
            <div
              className="absolute top-16 left-4 right-4 max-w-xs bg-stone-50 border border-stone-200 rounded-lg shadow-lg p-4"
              onClick={(e) => e.stopPropagation()}
            >
              {header && (
                <div className="mb-4 pb-3 border-b border-stone-200">
                  {header}
                </div>
              )}
              <nav
                className="flex flex-col gap-1 max-h-[60vh] overflow-y-auto"
                onClick={handleMobileToggle}
              >
                <ConsoleSidebarContext.Provider value={{ collapsed: false }}>
                  {children}
                </ConsoleSidebarContext.Provider>
              </nav>
              {footer && (
                <div
                  className="mt-4 pt-3 border-t border-stone-200"
                  onClick={handleMobileToggle}
                >
                  <ConsoleSidebarContext.Provider value={{ collapsed: false }}>
                    {footer}
                  </ConsoleSidebarContext.Provider>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Spacer for mobile */}
        <div className="h-16" />
      </div>

      {/* Desktop sidebar */}
      <div
        className={`
          hidden sm:flex flex-col h-screen sticky top-0 bg-stone-50 border-r border-stone-200
          transition-all duration-300 ease-in-out
          ${collapsed ? "sm:w-16" : "sm:w-64"}
        `}
      >
        <div
          className={`flex flex-col h-full p-3 ${collapsed ? "min-w-16 items-center" : "min-w-64"}`}
        >
          {/* Header with toggle */}
          <div
            className={`flex items-center mb-4 ${collapsed ? "flex-col gap-2" : "justify-between"}`}
          >
            {!collapsed && header && (
              <div className="flex-1 min-w-0">{header}</div>
            )}
            {collapsed && headerIcon && (
              <div className="text-stone-700">{headerIcon}</div>
            )}
            <button
              onClick={handleToggle}
              className="p-1.5 rounded hover:bg-stone-200 text-stone-500 transition-colors shrink-0"
              title={collapsed ? "Expand" : "Collapse"}
            >
              {collapsed ? (
                <PanelLeft className="w-4 h-4" />
              ) : (
                <PanelLeftClose className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Main navigation */}
          <nav
            className={`flex-1 flex flex-col gap-1 ${collapsed ? "items-center" : "overflow-y-auto"}`}
          >
            {children}
          </nav>

          {/* Footer */}
          {footer && (
            <div
              className={`mt-auto pt-4 border-t border-stone-200 flex flex-col gap-1 ${collapsed ? "items-center w-full" : ""}`}
            >
              {footer}
            </div>
          )}
        </div>
      </div>
    </ConsoleSidebarContext.Provider>
  );
}
