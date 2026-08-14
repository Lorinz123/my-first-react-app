import { Link } from "react-router";
import Button from "@/components/ui/button";
import heroImage from "@/assets/hero.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-950">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center px-6 py-20">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">

          {/* Text */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              Hello, I'm
            </p>

            <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl">
              Lorence Clint
              <span className="block text-blue-600 dark:text-blue-400">
                Andes.
              </span>
            </h1>

            <h2 className="mt-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
              Backend Developer & BSIT Student
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-400">
              I build modern web applications and backend systems
              while continuously improving my skills in software
              development, databases, and web technologies.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/projects">
                <Button>
                  View My Projects
                </Button>
              </Link>

              <Link to="/contact">
                <Button
                  className="border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
                >
                  Contact Me
                </Button>
              </Link>
            </div>

            {/* Technologies */}
            <div className="mt-10">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Technologies I work with
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                {[
                  "React",
                  "TypeScript",
                  "Laravel",
                  "PHP",
                  "MySQL",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">

              {/* Glow */}
              <div className="absolute -inset-4 rounded-full bg-blue-100 blur-2xl dark:bg-blue-950/50" />

              {/* Image */}
              <div className="relative h-72 w-72 overflow-hidden rounded-full border-8 border-white bg-gray-100 shadow-2xl dark:border-gray-800 dark:bg-gray-900 sm:h-96 sm:w-96">
                <img
                  src={heroImage}
                  alt="Lorence Clint Andes"
                  className="h-full w-full object-cover"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}