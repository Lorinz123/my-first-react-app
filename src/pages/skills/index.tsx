import SkillCategory from "./components/skill-category";

const skillCategories = [
  {
    title: "Frontend Development",
    description:
      "Technologies I use to build user interfaces and web experiences.",
    skills: [
      { name: "HTML", level: "Intermediate" },
      { name: "CSS", level: "Intermediate" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "React", level: "Beginner" },
      { name: "TypeScript", level: "Beginner" },
      { name: "Tailwind CSS", level: "Beginner" },
    ],
  },
  {
    title: "Backend Development",
    description:
      "Technologies I use for server-side development and application logic.",
    skills: [
      { name: "PHP", level: "Intermediate" },
      { name: "Laravel", level: "Beginner" },
      { name: "Java", level: "Beginner" },
      { name: "C#", level: "Beginner" },
      { name: "C", level: "Beginner" },
    ],
  },
  {
    title: "Database",
    description:
      "Technologies I use to store, manage, and work with application data.",
    skills: [
      { name: "MySQL", level: "Intermediate" },
      { name: "SQL", level: "Intermediate" },
    ],
  },
  {
    title: "Tools & Development",
    description:
      "Tools and platforms I use during development.",
    skills: [
      { name: "Git", level: "Beginner" },
      { name: "GitHub", level: "Beginner" },
      { name: "VS Code", level: "Intermediate" },
      { name: "Docker", level: "Beginner" },
      { name: "XAMPP", level: "Intermediate" },
    ],
  },
  {
    title: "Design & Other",
    description:
      "Additional tools and areas that support my development work.",
    skills: [
      { name: "Figma", level: "Intermediate" },
      { name: "UI/UX Design", level: "Beginner" },
      { name: "Responsive Design", level: "Intermediate" },
    ],
  },
];

export default function SkillsPage() {
  return (
    <main>

      {/* Page Header */}
      <section className="bg-white py-24 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              My Skills
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Technologies & Tools
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              A collection of programming languages, frameworks,
              databases, and development tools that I have learned
              and used throughout my projects.
            </p>

          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-gray-100 py-24 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 md:grid-cols-2">
            {skillCategories.map((category) => (
              <SkillCategory
                key={category.title}
                title={category.title}
                description={category.description}
                skills={category.skills}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Learning Section */}
      <section className="bg-gray-900 py-24 dark:bg-black">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Always Learning
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white">
            There's always something new to learn.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            I'm continuously improving my development skills by
            building projects, experimenting with new technologies,
            and learning from practical experience.
          </p>

        </div>
      </section>

    </main>
  );
}