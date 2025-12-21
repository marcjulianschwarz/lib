interface LabeledTextSectionProps {
  label: string;
  content?: string;
  children?: React.ReactNode;
}

export default function LabeledTextSection({
  label,
  content,
  children,
}: LabeledTextSectionProps) {
  return (
    <div>
      <label className="text-sm font-medium text-slate-500 block mb-2">
        {label}
      </label>
      {children ? (
        <>{children}</>
      ) : (
        <p className="text-slate-700 leading-relaxed">{content}</p>
      )}
    </div>
  );
}
