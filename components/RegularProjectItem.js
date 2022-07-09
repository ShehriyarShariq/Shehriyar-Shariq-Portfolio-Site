import React from "react";
import { useProjectDetailsDialog } from "../contexts/ProjectDetailsDialogContext";

function RegularProjectItem({ isLeftAligned, project }) {
  const { showProjectDetails } = useProjectDetailsDialog();

  return (
    <div
      className={
        "w-full h-0 pb-[100%] relative flex flex-col md:flex-row justify-between group" +
        (isLeftAligned ? "" : " md:flex-row-reverse ")
      }
      onTouchStart={() => {}}
      onClick={() => showProjectDetails(project)}
    >
      <div className="w-full h-full absolute top-0 left-0">
        <div className="w-full h-full bg-transparent_gray bg-opacity-10 backdrop-blur-sm flex flex-col justify-between items-center">
          <img src={project["images"]["logo"]} className="h-[20%]" />
          <img
            src={project["images"]["tile"]}
            className="h-[75%] object-contain object-bottom md:object-cover"
          />
        </div>
        <div className="w-full h-full absolute top-0 px-[7%] bg-translucent_gray bg-opacity-10 backdrop-blur-[2px] z-10 hidden flex-col justify-center group-hover:flex group-active:group-hover:flex">
          <div className="text-secondary text-lg md:text-2xl mb-1 md:mb-2">
            {project["title"]}
          </div>
          <div className="text-white text-base md:text-1xl mb-3 md:mb-4">
            {project["tagLine"]}
          </div>
          <div className="w-full mb-3 md:mb-4 text-[0.75rem] md:text-sm text-justify text-white">
            {project["description"]}
          </div>
          <div className="w-full grid grid-cols-[1fr_auto] mb-4 md:mb-0">
            <div className="flex gap-x-4 gap-y-3 flex-wrap items-center">
              {project["technologies"].map((technology, index) => (
                <span
                  key={`tech_${index}`}
                  className="text-white text-[0.75rem]"
                >
                  {technology}
                </span>
              ))}
            </div>
            <img src="/images/icons/share.svg" className="w-3 md:w-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegularProjectItem;
