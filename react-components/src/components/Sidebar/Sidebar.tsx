import { useState } from "react";
import { User, Menu, X } from "lucide-react";
import { useClickOutside } from "@/hooks/useClickOutside";
import AccountFlyout from "./AccountFlyout";

interface SidebarProps {
  children: React.ReactNode;
  username?: string;
  isAuthenticated: boolean;
  onNavigate?: () => void;
}

export default function Sidebar({
  username,
  isAuthenticated,
  children,
  onNavigate,
}: SidebarProps) {
  const [showFlyout, setShowFlyout] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
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

  const handleNavigate = () => {
    setShowMenu(false);
    onNavigate?.();
  };

  return (
    <>
      {/* Spacer for mobile hamburger menu */}
      <div className="sm:hidden h-[66px]"></div>

      {/* Spacer for desktop sidebar */}
      <div className="hidden sm:block sm:h-screen sm:w-[140px]"></div>

      {/* Mobile hamburger menu */}
      <div className="sm:hidden fixed top-4 left-4 z-50">
        <button
          onClick={handleMenuClick}
          className="w-[50px] h-[50px] flex justify-center items-center bg-white rounded-xl border border-gray-200 transition-colors hover:bg-gray-100"
        >
          {showMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
      <div className="w-full h-min flex-row p-4 hidden sm:flex sm:flex-col sm:fixed sm:h-screen sm:w-min sm:transition-all sm:duration-300">
        <div className="bg-white border border-gray-200 rounded-2xl w-full h-min p-4 flex flex-row gap-5 sm:h-full sm:w-20 sm:my-8 sm:mx-4 sm:flex-col sm:items-center">
          {children}

          <div
            className="relative ml-auto hover:cursor-pointer sm:mt-auto"
            ref={containerRef}
          >
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
    </>
  );
}
