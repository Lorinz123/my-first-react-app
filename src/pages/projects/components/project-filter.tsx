import { useState } from "react";
import ProjectGrid from "./project-grid";
import type { Project } from "./project-grid";

const projects: Project[] = [
  {
    title: "Flower Puff",
    description:
      "An e-commerce website with product browsing, cart functionality, checkout, and an admin panel.",
    category: "Web",
    technologies: ["HTML", "CSS", "JavaScript"],
    status: "Completed",
  },
  {
    title: "Living Water",
    description:
      "A community water refilling station project focused on designing a practical and accessible water service solution.",
    category: "UI/UX",
    technologies: ["Figma", "UI/UX", "Web"],
    status: "Prototype",
  },
  {
    title: "Laravel Product Management",
    description:
      "A product management application developed while learning Laravel, Docker, REST APIs, and database integration.",
    category: "Backend",
    technologies: ["Laravel", "PHP", "MySQL", "Docker"],
    status: "In Development",
  },
];

const categories = [
  "All",
  "Web",
  "Backend",
  "UI/UX",
];

export default function ProjectFilter() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <div>
      {/* Filter Buttons */}
      <div className="mb-10 flex flex-wrap gap-3">
        {categories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? "bg-blue-600 text-white shadow-sm hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Project Grid */}
      <ProjectGrid projects={filteredProjects} />
    </div>
  );
}