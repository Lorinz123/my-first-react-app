import ProjectFilter from "./components/project-filter";

export default function ProjectsPage() {
  return (
    <main>
      <section className="bg-white py-24 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-6">

          {/* Page Header */}
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              My Work
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Projects
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              A collection of academic, personal, and development
              projects I've worked on while building my skills in
              software and web development.
            </p>
          </div>

          {/* Projects */}
          <div className="mt-12">
            <ProjectFilter />
          </div>

        </div>
      </section>
    </main>
  );
}