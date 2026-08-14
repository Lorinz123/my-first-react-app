interface SkillCardProps {
  name: string;
  level: string;
}

const levelWidth: Record<string, string> = {
  Beginner: "w-1/3",
  Intermediate: "w-2/3",
  Advanced: "w-full",
};

export default function SkillCard({
  name,
  level,
}: SkillCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-gray-50 dark:bg-gray-900 p-4 transition hover:border-blue-200 hover:bg-blue-50/30">
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-semibold text-gray-900 dark:text-white">
          {name}
        </h3>

        <span className="text-xs font-medium text-gray-500">
          {level}
        </span>
      </div>

      <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
        <div
          className={`h-full rounded-full bg-blue-600 ${levelWidth[level] ?? "w-1/3"}`}
        />
      </div>
    </div>
  );
}