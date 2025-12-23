import { Color } from "@/api";

export type BadgeColor =
  | "purple"
  | "blue"
  | "green"
  | "orange"
  | "red"
  | "slate"
  | "raycast"
  | "ios";

const colorClasses: Record<BadgeColor, string> = {
  purple: "bg-purple-100 text-purple-700",
  blue: "bg-blue-100 text-blue-700",
  green: "bg-green-100 text-green-700",
  orange: "bg-orange-100 text-orange-700",
  red: "bg-red-100 text-red-700",
  slate: "bg-slate-100 text-slate-700",
  raycast: "bg-[#FF6363]/10 text-[#FF6363]",
  ios: "bg-[#007AFF]/10 text-[#007AFF]",
};

const hoverBorderClasses: Record<BadgeColor, string> = {
  purple: "hover:border-purple-700",
  blue: "hover:border-blue-700",
  green: "hover:border-green-700",
  orange: "hover:border-orange-700",
  red: "hover:border-red-700",
  slate: "hover:border-slate-700",
  raycast: "hover:border-[#FF6363]",
  ios: "hover:border-[#007AFF]",
};

export default function Badge(props: {
  text: string;
  color?: BadgeColor;
  hexColor?: string | null;
  showHoverBorder?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
}) {
  const { showHoverBorder = false } = props;

  if (props.hexColor) {
    const normalizedColor = props.hexColor.startsWith("#")
      ? props.hexColor
      : `#${props.hexColor}`;

    const rgb = Color.hexToRgb(normalizedColor);
    if (!rgb) {
      return (
        <span
          className={`px-2 py-0.5 border border-transparent w-fit ${
            showHoverBorder ? "hover:border-slate-700 transition-colors" : ""
          } bg-slate-100 text-slate-700 text-xs rounded-full font-medium ${props.className || ""}`}
        >
          {props.text}
        </span>
      );
    }

    const { backgroundColor, textColor } = Color.foregroundBackgroundColor(rgb);

    const hoverHandlers = showHoverBorder
      ? {
          onMouseEnter: (e: React.MouseEvent<HTMLSpanElement>) => {
            e.currentTarget.style.borderColor = textColor ?? normalizedColor;
          },
          onMouseLeave: (e: React.MouseEvent<HTMLSpanElement>) => {
            e.currentTarget.style.borderColor = "transparent";
          },
        }
      : {};

    return (
      <span
        onClick={props.onClick}
        className={`px-3 py-1 border border-transparent text-xs rounded-full font-medium w-fit ${
          showHoverBorder ? "transition-colors" : ""
        } ${props.className || ""}`}
        style={{
          backgroundColor,
          color: textColor ?? normalizedColor,
          borderColor: "transparent",
        }}
        {...hoverHandlers}
      >
        {props.text}
      </span>
    );
  }

  const colorClass = colorClasses[props.color || "slate"];
  const hoverBorderClass = showHoverBorder
    ? hoverBorderClasses[props.color || "slate"]
    : "";

  return (
    <span
      onClick={props.onClick}
      className={`px-3 py-1 border border-transparent ${colorClass} ${hoverBorderClass} text-xs rounded-full font-medium w-fit ${
        showHoverBorder ? "transition-colors" : ""
      } ${props.className || ""}`}
    >
      {props.text}
    </span>
  );
}
