import { Link } from "react-router";

const skills = [
  {
    category: "Frontend",
    technologies: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Backend",
    technologies: ["Laravel", "PHP", "Java", "C#", "C"],
  },
  {
    category: "Database",
    technologies: ["MySQL", "SQL"],
  },
  {
    category: "Tools",
    technologies: ["Git", "GitHub", "VS Code", "Docker"],
  },
];

export default function SkillsPreview() {
  return (
    <section className="bg-gray-100 py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            My Skills
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Technologies & Tools
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
            Technologies that I've learned and used throughout my
            development projects.
          </p>
        </div>

        {/* Skills */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-colors duration-200 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {skill.category}
              </h3>

              <div className="mt-5 space-y-3">
                {skill.technologies.map((technology) => (
                  <div
                    key={technology}
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400" />

                    {technology}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View All Skills */}
        <div className="mt-10 text-center">
          <Link
            to="/skills"
            className="font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            View all skills →
          </Link>
        </div>

      </div>
    </section>
  );
}