import { useState, createContext, useContext } from "react";
import { User, Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useClickOutside } from "@/hooks/useClickOutside";
import AccountFlyout from "./AccountFlyout";

interface SidebarProps {
  children: React.ReactNode;
  username?: string;
  isAuthenticated: boolean;
  onNavigate?: () => void;
  showTitles?: boolean;
}

const SidebarContext = createContext<{ showTitles: boolean }>({
  showTitles: true,
});

export const useSidebarContext = () => useContext(SidebarContext);

export default function Sidebar({
  username,
  isAuthenticated,
  children,
  onNavigate,
  showTitles = true,
}: SidebarProps) {
  const [showFlyout, setShowFlyout] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const containerRef = useClickOutside(() => setShowFlyout(false));
  const menuRef = useClickOutside(() => setShowMenu(false));

  const handleUserClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowFlyout(!showFlyout);
  };

  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const handleToggleSidebar = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowSidebar(!showSidebar);
  };

  const handleNavigate = () => {
    setShowMenu(false);
    onNavigate?.();
  };

  return (
    <SidebarContext.Provider value={{ showTitles }}>
      {/* Mobile view */}
      <div className="sm:hidden">
        {/* Mobile hamburger menu button */}
        <div className="fixed top-4 left-4 z-50">
          <button
            onClick={handleMenuClick}
            className="w-12 h-5 flex justify-center items-center bg-gray-100 rounded-full border border-gray-200 transition-colors hover:bg-gray-200 text-gray-400"
          >
            {showMenu ? (
              <X className="w-3 h-3" />
            ) : (
              <Menu className="w-3 h-3" />
            )}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {showMenu && (
          <div
            ref={menuRef}
            className="fixed top-[70px] left-4 z-40 bg-white border border-gray-200 rounded-2xl p-2 shadow-lg"
          >
            <div className="flex flex-col gap-2" onClick={handleNavigate}>
              {children}
              <div className="relative hover:cursor-pointer" ref={containerRef}>
                <div
                  className="w-[50px] h-[50px] flex justify-center items-center no-underline bg-white rounded-xl border border-gray-300 transition-colors hover:bg-gray-100"
                  onClick={handleUserClick}
                >
                  {username ? (
                    <p className="bg-gray-400 border border-gray-300 rounded-full w-4/5 h-4/5 flex items-center justify-center text-white font-semibold select-none text-base">
                      {username.slice(0, 2).toUpperCase()}
                    </p>
                  ) : (
                    <User
                      className="w-6 h-6"
                      color="currentColor"
                      strokeWidth={2}
                    />
                  )}
                </div>
                <AccountFlyout
                  showFlyout={showFlyout}
                  onNavigate={() => setShowFlyout(false)}
                  isAuthenticated={isAuthenticated}
                />
              </div>
            </div>
          </div>
        )}

        {/* Spacer for mobile menu */}
        <div className="h-[66px]"></div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden sm:flex sm:flex-col sm:h-screen sm:sticky sm:top-0 sm:transition-all sm:duration-300">
        {showSidebar ? (
          <div className="flex flex-col p-4 h-full">
            <button
              onClick={handleToggleSidebar}
              className="self-center mb-2 w-12 h-5 flex justify-center items-center bg-gray-100 rounded-full border border-gray-200 transition-colors hover:bg-gray-200 text-gray-400"
            >
              <ChevronLeft className="w-3 h-3" />
            </button>

            <div
              className={`bg-white border border-gray-200 rounded-2xl p-4 flex flex-col gap-5 h-full ${showTitles ? "w-[180px]" : "w-20"} ${showTitles ? "items-start" : "items-center"}`}
            >
              {children}

              <div
                className={`relative hover:cursor-pointer mt-auto ${showTitles ? "w-full" : ""}`}
                ref={containerRef}
              >
                <div
                  className={`${showTitles ? "w-full px-4 gap-3 justify-start" : "w-[50px] justify-center"} h-[50px] flex items-center no-underline bg-white rounded-xl border border-gray-300 transition-colors hover:bg-gray-100`}
                  onClick={handleUserClick}
                >
                  {username ? (
                    <div className="bg-gray-400 border border-gray-300 rounded-full w-[40px] h-[40px] flex items-center justify-center text-white font-semibold select-none text-base shrink-0">
                      {username.slice(0, 2).toUpperCase()}
                    </div>
                  ) : (
                    <div className="w-6 h-6 flex items-center justify-center shrink-0">
                      <User
                        className="w-6 h-6"
                        color="currentColor"
                        strokeWidth={2}
                      />
                    </div>
                  )}
                  {showTitles && (
                    <span className="text-sm font-medium whitespace-nowrap">
                      Account
                    </span>
                  )}
                </div>
                <AccountFlyout
                  showFlyout={showFlyout}
                  onNavigate={() => setShowFlyout(false)}
                  isAuthenticated={isAuthenticated}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="p-4">
            <button
              onClick={handleToggleSidebar}
              className="w-12 h-5 flex justify-center items-center bg-gray-200 rounded-full border border-gray-300 transition-colors hover:bg-gray-300 text-gray-500"
            >
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        )}
      </div>
    </SidebarContext.Provider>
  );
}
