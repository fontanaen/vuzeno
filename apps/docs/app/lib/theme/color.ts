import { parseColor } from "@ark-ui/vue";
import type { Color } from "@ark-ui/vue/color-picker";

function cssColorToRgb(value: string): string | null {
  if (!import.meta.client) {
    return null;
  }

  const canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = 1;
  const context = canvas.getContext("2d", { willReadFrequently: true });

  if (!context) {
    return null;
  }

  context.fillStyle = "#000000";
  context.fillStyle = value;
  context.fillRect(0, 0, 1, 1);

  const [red, green, blue, alpha] = context.getImageData(0, 0, 1, 1).data;

  if (red == null || green == null || blue == null || alpha == null) {
    return null;
  }

  if (alpha === 255) {
    return `rgb(${red}, ${green}, ${blue})`;
  }

  return `rgba(${red}, ${green}, ${blue}, ${Number((alpha / 255).toFixed(3))})`;
}

export function cssColorToPickerColor(value: string): Color {
  try {
    return parseColor(value);
  } catch {
    const rgb = cssColorToRgb(value);

    if (!rgb) {
      return parseColor("#000000");
    }

    try {
      return parseColor(rgb);
    } catch {
      return parseColor("#000000");
    }
  }
}

export function pickerColorToCss(color: Color): string {
  return color.toString("hex");
}
