import React from "react";
import { useSidebarNavVisibility } from "../contexts/SidebarNavVisibilityContext";

const navItemCss = "text-white text-lg select-none";

function SidebarNav() {
  const { toggleSidebar } = useSidebarNavVisibility();
  return (
    <div className="md:hidden fixed top-0 w-screen h-screen z-20">
      <div
        className="w-full h-full bg-transparent_gray bg-opacity-20 backdrop-blur-md pointer-events-auto"
        onClick={toggleSidebar}
      ></div>
      <div className="w-full h-full absolute top-0 grid grid-cols-[1fr_3fr] pointer-events-none">
        <div>
          <img src="/images/logo.svg" className="w-[60%] ml-4 mt-6" />
        </div>
        <div className="w-full h-full bg-black_alt pointer-events-auto py-10 px-12">
          <img
            src="/images/icons/close.svg"
            className="w-6 mr-0 ml-auto"
            onClick={toggleSidebar}
          />
          <nav className="flex gap-7 flex-col mt-14">
            <span className={navItemCss}>About</span>
            <span className={navItemCss}>Skills</span>
            <span className={navItemCss}>Work</span>
            <span className={navItemCss}>Blog</span>
            <span className={navItemCss}>Contact</span>
            <div className="w-full text-secondary text-sm whitespace-nowrap px-6 py-3 rounded-xl border-[2px] border-secondary flex items-center justify-center">
              Download Resume
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default SidebarNav;
