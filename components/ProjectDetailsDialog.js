import React from "react";

function ProjectDetailsDialog({ details, hide }) {
  return (
    <div className="w-screen h-screen fixed top-0 z-20">
      <div
        className="w-full h-full absolute top-0 bg-transparent_gray bg-opacity-20 backdrop-blur-md"
        onClick={hide}
      ></div>
      <div></div>
    </div>
  );
}

export default ProjectDetailsDialog;
