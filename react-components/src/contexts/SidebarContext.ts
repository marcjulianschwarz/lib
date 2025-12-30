import { createContext, useContext } from "react";

export const SidebarContext = createContext<{ showTitles: boolean }>({
  showTitles: true,
});

export const useSidebarContext = () => useContext(SidebarContext);
