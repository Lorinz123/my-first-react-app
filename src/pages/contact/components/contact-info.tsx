import { Link } from "react-router";

const contactDetails = [
  {
    label: "Email",
    value: "Clint21Andes@gmail.com",
    href: "mailto:Clint21Andes@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/Lorinz123",
    href: "https://github.com/Lorinz123",
  },
];

export default function ContactInfo() {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
        Contact Information
      </p>

      <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
        Let's connect.
      </h2>

      <p className="mt-5 leading-7 text-gray-600 dark:text-gray-400">
        I'm always open to discussing projects, learning
        opportunities, collaborations, or anything related to
        software development.
      </p>

      <div className="mt-8 space-y-5">
        {contactDetails.map((contact) => (
          <div
            key={contact.label}
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"
          >
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {contact.label}
            </p>

            <a
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={
                contact.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="mt-1 block font-semibold text-gray-900 transition hover:text-blue-600 dark:text-white"
            >
              {contact.value}
            </a>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Link
          to="/projects"
          className="font-semibold text-blue-600 transition hover:text-blue-700"
        >
          View my projects →
        </Link>
      </div>
    </div>
  );
}