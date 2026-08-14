import { Link } from "react-router";
import Card from "@/components/ui/card";

const projects = [
  {
    title: "Flower Puff",
    description:
      "An e-commerce website with product browsing, cart functionality, checkout, and an admin panel.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "CPC CARES",
    description:
      "A planned community and volunteer management platform designed to organize community activities and volunteer coordination.",
    technologies: ["React", "TypeScript", "Laravel"],
  },
  {
    title: "Living Water",
    description:
      "A community water refilling station project focused on providing accessible and reliable water services.",
    technologies: ["Web", "UI/UX", "Database"],
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-white py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              My Work
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Featured Projects
            </h2>

            <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
              A selection of projects I've worked on while learning
              and developing my skills.
            </p>
          </div>

          <Link
            to="/projects"
            className="font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            View all projects →
          </Link>
        </div>

        {/* Project Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="flex h-full flex-col p-6"
            >
              <div className="flex-1">

                {/* Project Icon */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl font-bold text-blue-600 dark:bg-blue-950/60 dark:text-blue-400">
                  {project.title.charAt(0)}
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}