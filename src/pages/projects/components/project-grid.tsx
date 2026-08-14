import ProjectCard from "./project-card";

export interface Project {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  status: string;
}

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-gray-300 py-16 text-center dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          No projects found
        </h2>

        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Try selecting another category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          project={project}
        />
      ))}
    </div>
  );
}