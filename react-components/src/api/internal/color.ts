export function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function rgbToHex(r: number, g: number, b: number) {
  return (
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = Math.round(x).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  );
}

// Calculate relative luminance
export function getLuminance(r: number, g: number, b: number) {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

// Darken a color by a given factor (0-1)
export function darkenColor(r: number, g: number, b: number, factor: number) {
  return {
    r: Math.round(r * (1 - factor)),
    g: Math.round(g * (1 - factor)),
    b: Math.round(b * (1 - factor)),
  };
}

export function foregroundBackgroundColor(rgb: {
  r: number;
  g: number;
  b: number;
}) {
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
    const darkened = darkenColor(rgb.r, rgb.g, rgb.b, 0.5);
    textColor = rgbToHex(darkened.r, darkened.g, darkened.b);
  } else if (luminance > 0.5) {
    // Light colors - darken slightly
    const darkened = darkenColor(rgb.r, rgb.g, rgb.b, 0.3);
    textColor = rgbToHex(darkened.r, darkened.g, darkened.b);
  } else if (luminance > 0.3) {
    // Medium colors - minimal darkening
    const darkened = darkenColor(rgb.r, rgb.g, rgb.b, 0.2);
    textColor = rgbToHex(darkened.r, darkened.g, darkened.b);
  } else {
    // Dark colors - use original color
    return { backgroundColor, textColor: undefined };
  }

  return { backgroundColor, textColor };
}
