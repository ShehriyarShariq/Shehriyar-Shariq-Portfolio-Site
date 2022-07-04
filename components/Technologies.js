import React, { useState } from "react";
import TechStackColumn from "./TechStackColumn";

const TECHNOLOGIES = [
  {
    label: "Front End",
    subCategories: [
      {
        label: "Web",
        items: [
          "React.js",
          "Next.js",
          "Tailwind CSS",
          "Django Web Framework",
          "Bootstrap",
          "JQuery",
          "SCSS",
        ],
      },
      {
        label: "Mobile",
        items: ["Flutter (Cross-Platform)", "Android Native (Java)"],
      },
      {
        label: "Languages",
        items: ["HTML", "CSS", "Javascript"],
      },
    ],
  },
  {
    label: "Back End",
    subCategories: [
      {
        label: null,
        items: [
          "Django Rest Framework",
          "Node.js/Express.js",
          "Web Servers",
          "Web Scraping",
          "MySQL",
          "PostgreSQL",
          "Firebase (All Core Service)",
        ],
      },
      {
        label: "Cloud",
        items: ["Google Cloud Platform (GCP)", "Amazon Web Services (AWS)"],
      },
      {
        label: "Languages",
        items: ["Javascript", "Python"],
      },
    ],
  },
  {
    label: "Dev Tools",
    subCategories: [
      {
        label: null,
        items: [
          "VSCode",
          "Android Studio",
          "Docker",
          "Kubernetes",
          "Git/Github/Gitlab",
          "Terminal",
        ],
      },
    ],
  },
];

function Technologies() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={
        "w-full bg-transparent_gray px-4 md:px-6 lg:px-10 pt-3 md:pt-8 md:pb-7 bg-opacity-20 backdrop-blur-md" +
        (isExpanded ? "pb-12" : " pb-3")
      }
      onClick={() => {
        setIsExpanded(false);
      }}
    >
      <div
        className="md:hidden text"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsExpanded(!isExpanded);
        }}
      >
        <div className="w-fit flex flex-row items-center gap-7 mx-auto">
          <span className="text-primary text-lg">Technologies</span>
          <img
            src="/images/icons/down_triangle.png"
            className={"w-3 opacity-80 " + (isExpanded ? "rotate-180" : "")}
          />
        </div>
      </div>
      <div className={"md:grid grid-cols-3" + (isExpanded ? "" : " hidden ")}>
        {TECHNOLOGIES.map((techStack, index) => (
          <TechStackColumn
            key={`tech_stack_${index}`}
            techStack={techStack}
            hasDivider={index < TECHNOLOGIES.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

export default Technologies;
