const interests = [
  "Backend Development",
  "Web Development",
  "Database Systems",
  "Software Development",
  "UI/UX Design",
  "Learning New Technologies",
];

export default function Interests() {
  return (
    <section className="bg-gray-100 py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Interests
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            What I'm Interested In
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600 dark:text-gray-400">
            Areas of technology that I'm currently exploring and
            developing my skills in.
          </p>
        </div>

        {/* Interests */}
        <div className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-4">
          {interests.map((interest) => (
            <div
              key={interest}
              className="rounded-full border border-gray-200 bg-white px-6 py-3 font-medium text-gray-700 shadow-sm transition-all duration-200 hover:border-blue-300 hover:text-blue-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-blue-700 dark:hover:text-blue-400"
            >
              {interest}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}