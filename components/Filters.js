import React from "react";
import Filter from "./Filter";

function Filters({ selectedFilters, toggleFilter, technologies }) {
  return (
    <div className="w-full mt-6 flex flex-wrap gap-3 md:gap-5 md:ml-5">
      {technologies.map((techStack, index) => (
        <Filter
          key={`tech_stack_${index}`}
          label={techStack}
          isSelected={selectedFilters.includes(techStack)}
          toggle={toggleFilter}
        />
      ))}
    </div>
  );
}

export default Filters;
