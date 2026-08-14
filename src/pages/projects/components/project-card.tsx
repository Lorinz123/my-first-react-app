import Card from "@/components/ui/card";

interface Project {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  status: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden p-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-gray-900">

      {/* Project Preview */}
      <div className="flex h-48 items-center justify-center bg-gray-100 dark:bg-gray-800">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-100 text-5xl font-bold text-blue-600 dark:bg-blue-950/60 dark:text-blue-400">
          {project.title.charAt(0)}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">

        {/* Category & Status */}
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-950/60 dark:text-blue-400">
            {project.category}
          </span>

          <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
            {project.status}
          </span>
        </div>

        {/* Title */}
        <h2 className="mt-5 text-xl font-bold text-gray-900 dark:text-white">
          {project.title}
        </h2>

        {/* Description */}
        <p className="mt-3 flex-1 leading-7 text-gray-600 dark:text-gray-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300"
            >
              {technology}
            </span>
          ))}
        </div>

      </div>
    </Card>
  );
}