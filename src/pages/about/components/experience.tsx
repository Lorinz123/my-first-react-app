const experiences = [
  {
    title: "Web Development",
    description:
      "Built web projects while learning frontend and backend development using modern web technologies.",
  },
  {
    title: "Backend Development",
    description:
      "Currently developing my backend skills through PHP, Laravel, Java, databases, APIs, and server-side programming.",
  },
  {
    title: "UI/UX & Prototyping",
    description:
      "Created interfaces and prototypes using design tools while learning principles of human-computer interaction.",
  },
];

export default function Experience() {
  return (
    <section className="bg-white py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Experience
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            What I've Been Working On
          </h2>

          <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
            Most of my experience so far comes from academic,
            personal, and development projects.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {experiences.map((experience) => (
            <div
              key={experience.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
            >
              {/* Icon */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-lg font-bold text-blue-600 dark:bg-blue-950/60 dark:text-blue-400">
                {experience.title.charAt(0)}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {experience.title}
              </h3>

              {/* Description */}
              <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
                {experience.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}