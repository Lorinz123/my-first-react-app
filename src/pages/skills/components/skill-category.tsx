import SkillCard from "./skill-card";

interface Skill {
  name: string;
  level: string;
}

interface SkillCategoryProps {
  title: string;
  description: string;
  skills: Skill[];
}

export default function SkillCategory({
  title,
  description,
  skills,
}: SkillCategoryProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-colors dark:border-gray-800 dark:bg-gray-950">
      {/* Category Title */}
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        {title}
      </h2>

      {/* Description */}
      <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
        {description}
      </p>

      {/* Skills */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            level={skill.level}
          />
        ))}
      </div>
    </div>
  );
}