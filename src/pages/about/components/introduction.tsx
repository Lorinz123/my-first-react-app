import { Link } from "react-router";
import Button from "@/components/ui/button";
import profileImage from "@/assets/hero.png";

export default function Introduction() {
  return (
    <section className="bg-white py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Introduction Text */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              About Me
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              I'm Lorence Clint Andes.
            </h1>

            <h2 className="mt-5 text-2xl font-semibold text-gray-700 dark:text-gray-200">
              BSIT Student & Aspiring Backend Developer
            </h2>

            <div className="mt-6 space-y-4 leading-8 text-gray-600 dark:text-gray-400">
              <p>
                I'm a Bachelor of Science in Information Technology
                student with an interest in backend development,
                web applications, and database systems.
              </p>

              <p>
                I enjoy building applications that solve practical
                problems while continuously learning new technologies
                and improving my programming skills.
              </p>

              <p>
                My goal is to become a skilled backend developer who
                can build reliable, maintainable, and useful software.
              </p>
            </div>

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
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">

              {/* Image Glow */}
              <div className="absolute -inset-4 rounded-3xl bg-blue-100 blur-2xl dark:bg-blue-950/40" />

              {/* Image */}
              <div className="relative h-80 w-80 overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 shadow-xl dark:border-gray-800 dark:bg-gray-900 sm:h-96 sm:w-96">
                <img
                  src={profileImage}
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