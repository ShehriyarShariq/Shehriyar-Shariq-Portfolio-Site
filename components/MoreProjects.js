import React, { useState, useMemo, useEffect } from 'react'
import Filters from './Filters'
import RegularProjectItem from './RegularProjectItem'
import DATA from '../public/files/data.json'
import PROJECTS from '../public/files/projects.json'

function MoreProjects() {
  const [showAll, setShowAll] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState([])

  // const technologiesForFilter = useMemo(() => {
  //   let technologies = new Set()
  //   PROJECTS.forEach((project) => {
  //     project['technologies'].forEach((techStack) => {
  //       technologies.add(techStack)
  //     })
  //   })
  //   return Array.from(technologies)
  // }, [])

  const handleToggleFilter = (filter) => {
    let newSelectedFilters = [...selectedFilters]
    if (newSelectedFilters.includes(filter)) {
      newSelectedFilters.splice(newSelectedFilters.indexOf(filter), 1)
    } else {
      newSelectedFilters.push(filter)
    }
    setShowAll(false)
    setSelectedFilters(newSelectedFilters)
  }

  const filteredProjects = useMemo(() => {
    const projects = PROJECTS.filter(
      (project) =>
        selectedFilters.length == 0 ||
        (selectedFilters.length > 0 &&
          selectedFilters.filter((filter) =>
            project.technologies.includes(filter),
          ).length > 0),
    )

    return showAll
      ? projects
      : projects.slice(0, projects.length > 6 ? 6 : projects.length)
  }, [showAll, selectedFilters])

  return (
    <div className="w-full h-full px-[8%] md:px-[10%]">
      <div className="text-primary text-2xl sm:text-3xl text-center md:text-left">
        All Projects
      </div>
      <Filters
        selectedFilters={selectedFilters}
        toggleFilter={handleToggleFilter}
        technologies={DATA['project_tags']}
      />
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-2 mt-4">
        {filteredProjects.map((project, index) => (
          <RegularProjectItem
            key={project.id}
            isLeftAligned={index % 2 == 0}
            project={project}
          />
        ))}
      </div>
      <div
        className={
          'w-fit text-white text-base md:text-lg bg-secondary mx-auto mt-6 sm:mt-8 px-5 py-2 rounded-lg border-2 border-secondary flex items-center justify-center gap-4 hover:cursor-pointer ' +
          (showAll || filteredProjects.length < 6 ? 'hidden' : '')
        }
        onClick={() => {
          setShowAll(true)
        }}
      >
        Show All
      </div>
    </div>
  )
}

export default MoreProjects
