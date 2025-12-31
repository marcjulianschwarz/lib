interface SettingsSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  variant?: "default" | "danger";
}

export default function SettingsSection({
  title,
  description,
  children,
  variant = "default",
}: SettingsSectionProps) {
  const borderColor =
    variant === "danger" ? "border-red-200" : "border-gray-200";

  const headerBg = variant === "danger" ? "bg-red-50" : "bg-gray-50";

  return (
    <div
      className={`mb-6 border ${borderColor} rounded-lg overflow-hidden bg-white shadow-sm`}
    >
      <div className={`px-6 py-4 ${headerBg} border-b ${borderColor}`}>
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>

        {description && (
          <p className="mt-1 text-sm text-gray-600">{description}</p>
        )}
      </div>
      <div className="px-6 py-4">{children}</div>
    </div>
  );
}
