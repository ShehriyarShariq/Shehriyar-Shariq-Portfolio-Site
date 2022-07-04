import React from "react";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import About from "../components/About";
import MyWork from "../components/MyWork";

function PortfolioSite() {
  return (
    <div className="w-full h-full relative z-10 flex flex-col gap-12 sm:gap-10">
      <div className="w-full md:h-screen grid grid-rows-[auto_1fr] gap-10 md:gap-0">
        <Nav />
        <Hero />
      </div>
      <About />
      <MyWork />
      <div className="h-[1000px] w-full bg-transparent"></div>
    </div>
  );
}

export default PortfolioSite;
