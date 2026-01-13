import { useState, useRef, useEffect } from "react";
import { ChevronDown, User, LogOut } from "lucide-react";
import { Link } from "react-router";
import { useConsoleSidebarContext } from "./ConsoleSidebarContext";

export interface ConsoleSidebarFooterProps {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
}

export function ConsoleSidebarFooter({
  icon,
  title,
  subtitle,
}: ConsoleSidebarFooterProps) {
  const { collapsed } = useConsoleSidebarContext();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  if (collapsed) {
    return (
      <div className="relative" ref={menuRef}>
        <button
          onClick={handleToggle}
          className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-stone-100 transition-colors"
        >
          {icon && (
            <div className="w-5 h-5 flex items-center justify-center text-stone-600">
              {icon}
            </div>
          )}
        </button>
        {menuOpen && (
          <div className="absolute bottom-full left-0 mb-2 w-48 bg-white border border-stone-200 rounded-lg shadow-lg py-1 z-50">
            <Link
              to="/account"
              className="flex items-center gap-2 px-3 py-2 text-sm text-stone-700 hover:bg-stone-100 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              <User className="w-4 h-4" />
              Account
            </Link>
            <Link
              to="/logout"
              className="flex items-center gap-2 px-3 py-2 text-sm text-stone-700 hover:bg-stone-100 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Link>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={handleToggle}
        className="w-full px-3 py-2 flex items-center gap-3 rounded-md text-left hover:bg-stone-100 transition-colors"
      >
        {icon && (
          <div className="w-5 h-5 flex items-center justify-center shrink-0 text-stone-600">
            {icon}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium text-stone-800 truncate">
            {title}
          </div>
          {subtitle && (
            <div className="text-xs text-stone-500 truncate">{subtitle}</div>
          )}
        </div>
        <ChevronDown
          className={`w-4 h-4 text-stone-400 shrink-0 transition-transform ${menuOpen ? "rotate-180" : ""}`}
        />
      </button>
      {menuOpen && (
        <div className="absolute bottom-full left-0 mb-2 w-full bg-white border border-stone-200 rounded-lg shadow-lg py-1 z-50">
          <Link
            to="/account"
            className="flex items-center gap-2 px-3 py-2 text-sm text-stone-700 hover:bg-stone-100 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            <User className="w-4 h-4" />
            Account
          </Link>
          <Link
            to="/logout"
            className="flex items-center gap-2 px-3 py-2 text-sm text-stone-700 hover:bg-stone-100 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Link>
        </div>
      )}
    </div>
  );
}
