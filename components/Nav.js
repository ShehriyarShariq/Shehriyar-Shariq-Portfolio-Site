import React from "react";

const navItemCss =
  "text-white text-xl hover:cursor-pointer hover:underline underline-offset-2 select-none";

export default function Nav() {
  return (
    <header className="h-[50px] sm:h-[120px] flex flex-row justify-between px-[8%] sm:px-[5%] mt-[20px] sm:mt-[50px] items-center">
      <img src="/images/logo.svg" className="h-full sm:h-3/4 select-none" />
      <nav className="hidden md:flex gap-14 flex-row items-center">
        <span className={navItemCss}>About</span>
        <span className={navItemCss}>Skills</span>
        <span className={navItemCss}>Work</span>
        <span className={navItemCss}>Blog</span>
        <button className="text-white text-xl px-5 py-2 bg-secondary rounded-lg transition-colors hover:bg-secondary_hovered select-none">
          Contact
        </button>
      </nav>
      <img src="/images/icons/menu.svg" className="h-1/2 md:hidden" />
    </header>
  );
}
