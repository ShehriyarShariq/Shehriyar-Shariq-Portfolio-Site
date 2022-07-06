import React from "react";

function Filter({ label, isSelected, toggle }) {
  return (
    <span
      className={
        "px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-sm md:text-base cursor-pointer border-[1px] border-secondary select-none" +
        (isSelected ? " bg-secondary text-white " : " text-secondary ")
      }
      onClick={() => toggle(label)}
    >
      {label}
    </span>
  );
}

export default Filter;
