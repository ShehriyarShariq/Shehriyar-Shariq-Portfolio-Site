import React, { useState, useMemo } from "react";
import Filters from "./Filters";
import RegularProjectItem from "./RegularProjectItem";

const MORE_PROJECTS = [
  {
    title: "Ghirasti",
    tagLine: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    images: {
      logo: "/images/projects/ghirasti/logo.png",
      tile: "/images/projects/ghirasti/tile.png",
    },
    technologies: ["Flutter", "Firebase", "Phone Auth"],
  },
  {
    title: "Ghirasti",
    tagLine: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    images: {
      logo: "/images/projects/ghirasti/logo.png",
      tile: "/images/projects/ghirasti/tile.png",
    },
    technologies: ["Flutter", "Firebase", "Phone Auth"],
  },
  {
    title: "Ghirasti",
    tagLine: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    images: {
      logo: "/images/projects/ghirasti/logo.png",
      tile: "/images/projects/ghirasti/tile.png",
    },
    technologies: ["Flutter", "Firebase", "Phone Auth"],
  },
  {
    title: "Ghirasti",
    tagLine: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    images: {
      logo: "/images/projects/ghirasti/logo.png",
      tile: "/images/projects/ghirasti/tile.png",
    },
    technologies: ["Flutter", "Firebase", "Phone Auth"],
  },
];

function MoreProjects() {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const technologiesForFilter = useMemo(() => {
    let technologies = new Set();
    MORE_PROJECTS.forEach((project) => {
      project["technologies"].forEach((techStack) => {
        technologies.add(techStack);
      });
    });
    return Array.from(technologies);
  }, []);

  const handleToggleFilter = (filter) => {
    let newSelectedFilters = [...selectedFilters];
    if (newSelectedFilters.includes(filter)) {
      newSelectedFilters.splice(newSelectedFilters.indexOf(filter), 1);
    } else {
      newSelectedFilters.push(filter);
    }
    setSelectedFilters(newSelectedFilters);
  };

  return (
    <div className="w-full h-full px-[8%] md:px-[10%]">
      <div className="text-primary text-2xl sm:text-3xl text-center md:text-left">
        More Projects
      </div>
      <Filters
        selectedFilters={selectedFilters}
        toggleFilter={handleToggleFilter}
        technologies={technologiesForFilter}
      />
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-2 mt-4">
        {MORE_PROJECTS.map((project, index) => (
          <RegularProjectItem
            key={`regular_project_${index}`}
            isLeftAligned={index % 2 == 0}
            project={project}
          />
        ))}
      </div>
    </div>
  );
}

export default MoreProjects;
