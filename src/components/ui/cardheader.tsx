interface CardHeaderProps {
  title: string;
  subtitle?: string;
}

export default function CardHeader({
  title,
  subtitle,
}: CardHeaderProps) {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-1 text-gray-500 dark:text-gray-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}