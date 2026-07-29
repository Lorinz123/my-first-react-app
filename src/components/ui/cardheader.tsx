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
      <h2 className="text-xl font-bold">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-1 text-gray-500">
          {subtitle}
        </p>
      )}
    </div>
  );
}