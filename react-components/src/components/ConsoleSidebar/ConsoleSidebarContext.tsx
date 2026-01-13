import { createContext, useContext } from "react";

interface ConsoleSidebarContextValue {
  collapsed: boolean;
}

export const ConsoleSidebarContext = createContext<ConsoleSidebarContextValue>({
  collapsed: false,
});

export function useConsoleSidebarContext() {
  return useContext(ConsoleSidebarContext);
}
