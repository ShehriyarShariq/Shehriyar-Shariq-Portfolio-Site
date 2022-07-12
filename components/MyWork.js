import React from "react";
import OverlappingCharacter from "./OverlappingCharacter";
import BigProjectItem from "./BigProjectItem";
import DATA from "../public/files/data.json";

function MyWork() {
  return (
    <div className="w-full h-full px-[8%] md:px-[10%] mt-0 md:mt-24">
      <div className="text-3xl sm:text-5xl text-center sm:text-left mb-6 sm:mb-10">
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
      <div className="flex flex-col gap-6 md:gap-14 lg:gap-20">
        {DATA["major_projects"].map((project, index) => (
          <BigProjectItem
            key={`main_project_${index}`}
            isLeftAligned={index % 2 == 0}
            project={project}
          />
        ))}
      </div>
    </div>
  );
}

export default MyWork;
