import Hero from "./components/hero";
import AboutPreview from "./components/about-preview";
import FeaturedProjects from "./components/featured";
import SkillsPreview from "./components/skills";
import ContactCta from "./components/contact-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <FeaturedProjects />
      <SkillsPreview />
      <ContactCta />
    </>
  );
}