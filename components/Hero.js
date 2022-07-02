import React from "react";
import OverlappingCharacter from "./OverlappingCharacter";

export default function Hero() {
  return (
    <div className="w-full h-full pl-[15%] pr-[10%] md:pl-[12%] md:pr-[10%] lg:px-[12%] overflow-auto grid md:grid-cols-[auto_1fr] md:justify-between sm:items-center gap-8 sm:gap-10">
      <div>
        <div className="text-white text-lg sm:text-4xl mb-2 sm:mb-6">
          Hi, I am
        </div>
        <div className="text-5xl sm:text-6xl md:text-5xl lg:text-7xl xl:text-[5rem] flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5 mb-7 sm:mb-14">
          <span className="text-primary whitespace-nowrap">
            <OverlappingCharacter
              char="S"
              textSize=" text-5xl sm:text-6xl md:text-5xl lg:text-7xl xl:text-[5rem] "
            />
            hehriyar
          </span>
          <span className="text-primary whitespace-nowrap">
            <OverlappingCharacter
              char="S"
              textSize=" text-5xl sm:text-6xl md:text-5xl lg:text-7xl xl:text-[5rem] "
            />
            hariq.
          </span>
        </div>
        <div className="text-white text-2xl sm:text-4xl mb-6 sm:mb-12">
          A Full Stack Web/
          <br className="sm:hidden" />
          Mobile
          <br className="hidden sm:block" />
          Developer
        </div>
        <div className="flex flex-row gap-4 sm:gap-8">
          <img
            src="/images/icons/github.svg"
            className="w-[30px] sm:w-[70px]"
          />
          <div className="w-fit text-secondary text-sm md:text-lg lg:text-xl xl:text-2xl px-7 sm:px-10 py-2 sm:py-3 rounded-xl sm:rounded-2xl border-[2px] sm:border-[4px] border-secondary flex items-center justify-center">
            <span className="hidden sm:block">Download My Resume</span>
            <span className="sm:hidden">Download Resume</span>
          </div>
        </div>
      </div>
      <img
        src="/images/me.png"
        className="w-[60%] md:w-[100%] xl:w-[70%] mx-auto pr-[5%] md:pr-0"
      />
    </div>
  );
}
