import React, { useState, useContext } from "react";
import ProjectDetailsDialog from "../components/ProjectDetailsDialog";

const ProjectDetailsDialogContext = React.createContext();

export function useProjectDetailsDialog() {
  return useContext(ProjectDetailsDialogContext);
}

export function ProjectDetailsDialogProvider({ children }) {
  const [project, setProject] = useState(null);

  const showProjectDetails = (projectDetails) => {
    document.body.style.overflow = "hidden";
    setProject(projectDetails);
  };

  const hideProjectDetails = () => {
    document.body.style.overflow = "unset";
    setProject(null);
  };

  const value = {
    project,
    showProjectDetails,
    hideProjectDetails,
  };

  return (
    <ProjectDetailsDialogContext.Provider value={value}>
      {children}
      {project != null ? (
        <ProjectDetailsDialog details={project} hide={hideProjectDetails} />
      ) : (
        <></>
      )}
    </ProjectDetailsDialogContext.Provider>
  );
}
