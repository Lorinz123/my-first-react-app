import { Link } from "react-router";
import Button from "@/components/ui/button";

export default function ContactCta() {
  return (
    <section className="bg-white py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-5xl px-6">
        <div className="overflow-hidden rounded-3xl bg-gray-900 px-6 py-16 text-center shadow-xl dark:bg-gray-900 sm:px-12">

          {/* Label */}
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Get In Touch
          </p>

          {/* Heading */}
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Let's build something together.
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
            Have a project idea, collaboration, or just want to
            connect? I'd love to hear from you.
          </p>

          {/* Button */}
          <div className="mt-8">
            <Link to="/contact">
              <Button>
                Contact Me
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}