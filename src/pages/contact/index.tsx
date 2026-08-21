import ContactForm from "./components/contact-form";
import ContactInfo from "./components/contact-info";

export default function ContactPage() {
  return (
    <main className="bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      {/* Header */}
      <section className="bg-white py-24 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              Get In Touch
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Let's talk.
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Have a project idea, question, or opportunity?
              Feel free to send me a message. I'd be happy to
              hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-gray-100 py-24 dark:bg-gray-900">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </main>
  );
}