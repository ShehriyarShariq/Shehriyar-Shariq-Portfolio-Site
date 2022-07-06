import React, { useState, useEffect } from "react";

export function useWindowScroll() {
  const [windowScroll, setWindowScroll] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setWindowScroll(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return windowScroll;
}
