import React from "react";

function TechStackCategory({ stackCategory }) {
  return (
    <div className="text-center">
      {stackCategory["label"] != null ? (
        <div className="text-center text-secondary sm:text-lg md:text-xl lg:text-2xl mb-2 sm:mb-3 md:mt-0">
          {stackCategory["label"]}
        </div>
      ) : (
        <></>
      )}
      <div className="mb-5">
        {stackCategory["items"].map((item, index) => (
          <div
            key={`tech_stack_category_item_${index}`}
            className="text-white mb-1 md:text-lg"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStackCategory;
