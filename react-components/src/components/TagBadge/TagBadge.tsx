import { XIcon } from "lucide-react";

interface TagBadgeProps {
  text: string;
  className?: string;
  onRemove?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function TagBadge({ text, className, onRemove }: TagBadgeProps) {
  return (
    <span
      className={`pl-2 pr-1 py-0.5 flex gap-1 justify-center items-center border border-transparent w-fit
     bg-slate-200 text-slate-600 dark:bg-slate-900 text-xs rounded-md font-medium ${className}`}
    >
      #{text}
      <button
        className="hover:cursor-pointer hover:text-red-400"
        onClick={onRemove}
      >
        <XIcon size={16} />
      </button>
    </span>
  );
}
