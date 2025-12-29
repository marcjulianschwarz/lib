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
      {/* Spacer for mobile hamburger menu */}
      <div className="sm:hidden h-[66px]"></div>

      {/* Spacer for desktop sidebar */}
      <div
        className={`hidden sm:block sm:h-screen transition-all duration-300 ${showSidebar ? (showTitles ? "sm:w-[280px]" : "sm:w-[140px]") : "sm:w-5"}`}
      ></div>

      {/* Toggle button for desktop sidebar */}
      {!showSidebar && (
        <button
          onClick={handleToggleSidebar}
          className="hidden sm:flex fixed top-4 left-4 z-50 w-[48px] h-[20px] justify-center items-center bg-gray-200 rounded-full border border-gray-300 transition-colors hover:bg-gray-300 text-gray-500"
        >
          <ChevronRight className="w-3 h-3" />
        </button>
      )}

      {/* Mobile hamburger menu */}
      <div className="sm:hidden fixed top-4 left-4 z-50">
        <button
          onClick={handleMenuClick}
          className="w-[48px] h-[20px] flex justify-center items-center bg-gray-100 rounded-full border border-gray-200 transition-colors hover:bg-gray-200 text-gray-400"
        >
          {showMenu ? <X className="w-3 h-3" /> : <Menu className="w-3 h-3" />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {showMenu && (
        <div
          ref={menuRef}
          className="sm:hidden fixed top-[70px] left-4 z-40 bg-white border border-gray-200 rounded-2xl p-2 shadow-lg"
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

      {/* Regular sidebar for wider screens */}
      {showSidebar && (
        <div className="w-full h-min flex-row p-4 hidden sm:flex sm:flex-col sm:fixed sm:h-screen sm:w-min sm:transition-all sm:duration-300">
          <button
            onClick={handleToggleSidebar}
            className="hidden sm:flex absolute top-4 left-1/2 -translate-x-1/2 z-50 w-12 h-5 justify-center items-center bg-gray-100 rounded-full border border-gray-200 transition-colors hover:bg-gray-200 text-gray-400"
          >
            <ChevronLeft className="w-3 h-3" />
          </button>

          <div
            className={`bg-white border border-gray-200 rounded-2xl w-full h-min p-4 flex flex-row gap-5 sm:h-full ${showTitles ? "sm:w-auto" : "sm:w-20"} sm:my-8 sm:mx-4 sm:flex-col ${showTitles ? "sm:items-start" : "sm:items-center"}`}
          >
            {children}

            <div
              className={`relative ml-auto hover:cursor-pointer sm:mt-auto ${showTitles ? "w-full" : ""}`}
              ref={containerRef}
            >
              <div
                className={`${showTitles ? "w-full px-4 gap-3 justify-start" : "w-[50px] justify-center"} h-[50px] flex items-center no-underline bg-white rounded-xl border border-gray-300 transition-colors hover:bg-gray-100`}
                onClick={handleUserClick}
              >
                {username ? (
                  <div className="bg-gray-400 border border-gray-300 rounded-full w-12 h-5 flex items-center justify-center text-white font-semibold select-none text-base shrink-0">
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
      )}
    </SidebarContext.Provider>
  );
}
