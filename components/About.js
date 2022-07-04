import React from "react";
import OverlappingCharacter from "./OverlappingCharacter";
import Technologies from "./Technologies";

function About() {
  return (
    <div className="w-full h-full px-[8%] md:px-[10%]">
      <div className="text-3xl sm:text-5xl text-center sm:text-left mb-6 sm:mb-8">
        <span className="text-primary whitespace-nowrap">
          <OverlappingCharacter
            char="A"
            textSize=" text-3xl sm:text-5xl " //" text-5xl sm:text-6xl md:text-5xl lg:text-7xl xl:text-[5rem] "
          />
          bout
        </span>
        <span className="text-primary whitespace-nowrap ml-3 sm:ml-4">
          <OverlappingCharacter
            char="M"
            textSize=" text-3xl sm:text-5xl " //" text-5xl sm:text-6xl md:text-5xl lg:text-7xl xl:text-[5rem] "
          />
          e
        </span>
      </div>
      <p className="text-white sm:text-lg md:text-xl lg:text-xl mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <Technologies />
    </div>
  );
}

export default About;
