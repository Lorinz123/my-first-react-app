import { Link } from "react-router";
import Card from "@/components/ui/card";

export default function AboutPreview() {
  return (
    <section className="bg-gray-100 py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* About Text */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              About Me
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Turning ideas into
              <span className="text-blue-600 dark:text-blue-400">
                {" "}working applications.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-gray-600 dark:text-gray-400">
              I'm a BSIT student interested in backend development,
              web applications, databases, and software engineering.
              I enjoy learning new technologies and turning ideas
              into functional projects.
            </p>

            <Link
              to="/about"
              className="mt-6 inline-block font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Learn more about me →
            </Link>
          </div>

          {/* Statistics Card */}
          <Card className="p-8">
            <div className="grid grid-cols-2 gap-6">

              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  3+
                </p>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Projects
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  5+
                </p>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Technologies
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  BSIT
                </p>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Student
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  ∞
                </p>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Things to Learn
                </p>
              </div>

            </div>
          </Card>

        </div>
      </div>
    </section>
  );
}