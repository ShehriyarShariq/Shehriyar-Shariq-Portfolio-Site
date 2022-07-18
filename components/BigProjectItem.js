import React from "react";
import { useProjectDetailsDialog } from "../contexts/ProjectDetailsDialogContext";

function BigProjectItem({ isLeftAligned, project }) {
  const { showProjectDetails } = useProjectDetailsDialog();

  return (
    <div
      className={
        "w-full md:min-h-[400px] flex flex-col md:flex-row justify-between" +
        (isLeftAligned ? "" : " md:flex-row-reverse ")
      }
      onClick={() => showProjectDetails(project)}
    >
      <div
        className={
          "w-[92.5%] md:w-1/2 h-[250px] mx-auto -mb-12 z-10 md:z-0 md:mx-0 md:h-[400px] bg-transparent_gray bg-opacity-10 backdrop-blur-sm flex flex-col justify-between items-center" +
          (isLeftAligned ? "" : " md:ml-[-20px] ")
        }
      >
        {/* <img src={project["images"]["logo"]} className="h-[20%]" /> */}
        <img
          src={project["images"]["tile"]}
          className="w-full h-full object-contain object-bottom md:object-contain"
        />
      </div>
      <div
        className={
          "w-full md:w-[55%] px-[7%] md:px-0 pt-14 md:pt-0 bg-transparent_gray md:bg-transparent bg-opacity-20 md:bg-opacity-100 backdrop-blur-md md:backdrop-blur-none" +
          (isLeftAligned ? " md:ml-[-20px] " : "")
        }
      >
        <div
          className={
            "text-secondary text-lg md:text-4xl mb-1 md:mb-2" +
            (isLeftAligned ? " md:ml-[40px] " : " md:pl-10 ")
          }
        >
          {project["title"]}
        </div>
        <div
          className={
            "text-white text-base md:text-2xl mb-4 md:mb-8" +
            (isLeftAligned ? " md:ml-[40px] " : " md:pl-10 ")
          }
        >
          {project["tagLine"]}
        </div>
        <div className="w-full md:bg-transparent_gray md:bg-opacity-20 md:backdrop-blur-md ml-[0px] mb-3 md:mb-4 md:px-10 md:py-8 text-sm md:text-lg text-justify text-white">
          {project["description"]}
        </div>
        <div
          className={
            "w-full grid grid-cols-[1fr_auto] mb-4 md:mb-0" +
            (isLeftAligned ? "" : " md:pr-10 ")
          }
        >
          <div
            className={
              "flex gap-x-6 gap-y-4 flex-wrap items-center" +
              (isLeftAligned ? " md:ml-[40px] " : " md:pl-10 ")
            }
          >
            {project["technologies"].map((technology, index) => (
              <span
                key={`tech_${index}`}
                className="text-white text-[0.75rem] md:text-base"
              >
                {technology}
              </span>
            ))}
          </div>
          <img src="/images/icons/share.svg" className="w-4 md:w-6" />
        </div>
      </div>
    </div>
  );
}

export default BigProjectItem;
