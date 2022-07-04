import React from "react";
import TechStackCategory from "./TechStackCategory";

function TechStackColumn({ techStack, hasDivider }) {
  return (
    <div className="flex flex-col">
      <div className="text-center text-white text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 mt-5 mb:mt-0">
        {techStack["label"]}
      </div>
      <div
        className={
          "flex-1 py-1 px-2 flex flex-col gap-" +
          (hasDivider
            ? " border-b-[1px] md:border-b-0 md:border-r-[1px] border-secondary "
            : "")
        }
      >
        {techStack["subCategories"].map((stackCategory, index) => (
          <TechStackCategory
            key={`tech_stack_category_${index}`}
            stackCategory={stackCategory}
          />
        ))}
      </div>
    </div>
  );
}

export default TechStackColumn;
