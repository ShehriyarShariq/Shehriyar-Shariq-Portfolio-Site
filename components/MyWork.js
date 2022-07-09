import React from "react";
import OverlappingCharacter from "./OverlappingCharacter";
import BigProjectItem from "./BigProjectItem";

const MAIN_PROJECTS = [
  {
    id: "ghirasti",
    title: "Ghirasti",
    tagLine: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    video: "https://www.youtube-nocookie.com/embed/YE7VzlLtp-4?controls=0",
    images: {
      logo: "/images/projects/ghirasti/logo.png",
      tile: "/images/projects/ghirasti/tile.png",
      otherImages: [
        "/images/projects/ghirasti/tile.png",
        "/images/projects/ghirasti/tile.png",
        "/images/projects/ghirasti/tile.png",
        "/images/projects/ghirasti/tile.png",
      ],
    },
    technologies: ["Flutter", "Firebase", "Phone Auth"],
  },
  {
    id: "ghirasti",
    title: "Ghirasti",
    tagLine: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    video: "https://www.youtube-nocookie.com/embed/YE7VzlLtp-4?controls=0",
    images: {
      logo: "/images/projects/ghirasti/logo.png",
      tile: "/images/projects/ghirasti/tile.png",
      otherImages: [
        "/images/projects/ghirasti/tile.png",
        "/images/projects/ghirasti/tile.png",
        "/images/projects/ghirasti/tile.png",
        "/images/projects/ghirasti/tile.png",
      ],
    },
    technologies: ["Flutter", "Firebase", "Phone Auth"],
  },
];

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
        {MAIN_PROJECTS.map((project, index) => (
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
