import React, { useState, useMemo } from "react";
import Filters from "./Filters";
import RegularProjectItem from "./RegularProjectItem";
import DATA from "../public/files/data.json";

function MoreProjects() {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const technologiesForFilter = useMemo(() => {
    let technologies = new Set();
    DATA["other_projects"].forEach((project) => {
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
        {DATA["other_projects"].map((project, index) => (
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
