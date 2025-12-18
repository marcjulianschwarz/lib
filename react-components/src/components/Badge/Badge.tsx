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

export default function Badge(props: {
  text: string;
  color?: BadgeColor;
  hexColor?: string | null;
}) {
  if (props.hexColor) {
    const normalizedColor = props.hexColor.startsWith("#")
      ? props.hexColor
      : `#${props.hexColor}`;

    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : null;
    };

    const rgbToHex = (r: number, g: number, b: number) => {
      return (
        "#" +
        [r, g, b]
          .map((x) => {
            const hex = Math.round(x).toString(16);
            return hex.length === 1 ? "0" + hex : hex;
          })
          .join("")
      );
    };

    // Calculate relative luminance
    const getLuminance = (r: number, g: number, b: number) => {
      const [rs, gs, bs] = [r, g, b].map((c) => {
        c = c / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      });
      return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
    };

    // Darken a color by a given factor (0-1)
    const darkenColor = (r: number, g: number, b: number, factor: number) => {
      return {
        r: Math.round(r * (1 - factor)),
        g: Math.round(g * (1 - factor)),

        b: Math.round(b * (1 - factor)),
      };
    };

    const rgb = hexToRgb(normalizedColor);
    if (!rgb) {
      return (
        <span className="px-2 py-0.5 bg-slate-100 text-slate-700 text-xs rounded-full font-medium">
          {props.text}
        </span>
      );
    }

    const luminance = getLuminance(rgb.r, rgb.g, rgb.b);

    // Adjust background opacity based on luminance
    let bgOpacity: number;
    if (luminance > 0.8) {
      bgOpacity = 0.25;
    } else if (luminance > 0.6) {
      bgOpacity = 0.2;
    } else if (luminance > 0.4) {
      bgOpacity = 0.15;
    } else {
      bgOpacity = 0.1;
    }

    const backgroundColor = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${bgOpacity})`;

    // Adjust text color - much lighter darkening to match Tailwind's 700 level
    let textColor: string;
    if (luminance > 0.7) {
      // Very light colors - darken moderately (like going from 100 to 700 in Tailwind)
      const darkened = darkenColor(rgb.r, rgb.g, rgb.b, 0.3);
      textColor = rgbToHex(darkened.r, darkened.g, darkened.b);
    } else if (luminance > 0.5) {
      // Light colors - darken slightly
      const darkened = darkenColor(rgb.r, rgb.g, rgb.b, 0.2);
      textColor = rgbToHex(darkened.r, darkened.g, darkened.b);
    } else if (luminance > 0.3) {
      // Medium colors - minimal darkening
      const darkened = darkenColor(rgb.r, rgb.g, rgb.b, 0.1);
      textColor = rgbToHex(darkened.r, darkened.g, darkened.b);
    } else {
      // Dark colors - use original color
      textColor = normalizedColor;
    }

    return (
      <span
        className="px-3 py-1 text-xs rounded-full font-medium"
        style={{
          backgroundColor,
          color: textColor,
        }}
      >
        {props.text}
      </span>
    );
  }

  const colorClass = colorClasses[props.color || "slate"];

  return (
    <span
      className={`px-3 py-1 ${colorClass} text-xs rounded-full font-medium w-fit`}
    >
      {props.text}
    </span>
  );
}
