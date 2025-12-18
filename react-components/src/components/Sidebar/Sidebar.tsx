import { useState } from "react";
import { User } from "lucide-react";
import { useClickOutside } from "@/hooks/useClickOutside";
import AccountFlyout from "./AccountFlyout";

interface SidebarProps {
  children: React.ReactNode;
  username?: string;
  isAuthenticated: boolean;
}

export default function Sidebar({
  username,
  isAuthenticated,
  children,
}: SidebarProps) {
  const [showFlyout, setShowFlyout] = useState(false);
  const containerRef = useClickOutside(() => setShowFlyout(false));

  const handleUserClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowFlyout(!showFlyout);
  };

  return (
    <>
      <div className="hidden sm:block sm:h-screen sm:w-[140px]"></div>

      <div className="w-full h-min flex-row p-4 sm:flex sm:flex-col sm:fixed sm:h-screen sm:w-min sm:transition-all sm:duration-300">
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
                <p className="bg-gray-400 border border-gray-300 rounded-full w-4/5 h-4/5 flex items-center justify-center text-white font-semibold select-none">
                  {username.slice(0, 2).toUpperCase()}
                </p>
              ) : (
                <User size={24} color="currentColor" strokeWidth={2} />
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
