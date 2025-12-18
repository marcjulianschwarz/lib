import { Search } from "lucide-react";
import Input from "../Input/Input";

interface SearchBarProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder: string;
  className?: string;
}

export default function SearchBar({
  value,
  onChange,
  placeholder,
  className = "",
}: SearchBarProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search size={18} className="text-gray-400" />
      </div>
      <Input
        type="text"
        inputMode="search"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="none"
        spellCheck="false"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.currentTarget.blur();
          }
        }}
        placeholder={placeholder}
        className="pl-10"
      />
    </div>
  );
}
