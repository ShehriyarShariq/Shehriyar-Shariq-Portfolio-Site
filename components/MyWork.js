import React from "react";
import OverlappingCharacter from "./OverlappingCharacter";

function MyWork() {
  return (
    <div className="w-full h-full px-[8%] md:px-[10%] mt-0 sm:mt-24">
      <div className="text-3xl sm:text-5xl text-center sm:text-left mb-6 sm:mb-8">
        <span className="text-primary whitespace-nowrap">
          <OverlappingCharacter
            char="M"
            textSize=" text-3xl sm:text-5xl " //" text-5xl sm:text-6xl md:text-5xl lg:text-7xl xl:text-[5rem] "
          />
          y
        </span>
        <span className="text-primary whitespace-nowrap ml-3 sm:ml-4">
          <OverlappingCharacter
            char="W"
            textSize=" text-3xl sm:text-5xl " //" text-5xl sm:text-6xl md:text-5xl lg:text-7xl xl:text-[5rem] "
          />
          ork
        </span>
      </div>
    </div>
  );
}

export default MyWork;
