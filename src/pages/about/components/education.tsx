export default function Education() {
  return (
    <section className="bg-gray-100 py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Education
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            My Academic Journey
          </h2>
        </div>

        {/* Timeline */}
        <div className="mt-12 border-l-2 border-blue-200 pl-8 dark:border-blue-900">

          <div className="relative">

            {/* Timeline Dot */}
            <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-blue-600 ring-4 ring-gray-100 dark:bg-blue-400 dark:ring-gray-950" />

            {/* Status */}
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              Current
            </p>

            {/* Degree */}
            <h3 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
              Bachelor of Science in Information Technology
            </h3>

            {/* School */}
            <p className="mt-2 font-medium text-gray-700 dark:text-gray-200">
              Cordova Public College
            </p>

            {/* Description */}
            <p className="mt-4 max-w-2xl leading-7 text-gray-600 dark:text-gray-400">
              Studying information technology with a focus on
              programming, web development, databases, software
              development, and other areas of computing.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}