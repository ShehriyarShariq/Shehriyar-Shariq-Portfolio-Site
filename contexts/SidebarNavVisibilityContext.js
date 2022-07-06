import React, { useState, useContext, useCallback } from "react";

const SidebarNavVisibilityContext = React.createContext();

export function useSidebarNavVisibility() {
  return useContext(SidebarNavVisibilityContext);
}

export function SidebarNavVisibilityProvider({ children }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    document.body.style.overflow = !isSidebarVisible ? "hidden" : "unset";
    setIsSidebarVisible(!isSidebarVisible);
  };

  const value = {
    isSidebarVisible,
    toggleSidebar,
  };

  return (
    <SidebarNavVisibilityContext.Provider value={value}>
      {children}
    </SidebarNavVisibilityContext.Provider>
  );
}
