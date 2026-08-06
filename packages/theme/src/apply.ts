import type { ThemeTokenKey, ThemeTokens } from "./types";

const themeTokenKeys = [
  "background",
  "foreground",
  "card",
  "card-foreground",
  "popover",
  "popover-foreground",
  "primary",
  "primary-foreground",
  "secondary",
  "secondary-foreground",
  "muted",
  "muted-foreground",
  "accent",
  "accent-foreground",
  "destructive",
  "destructive-foreground",
  "border",
  "input",
  "ring",
  "chart-1",
  "chart-2",
  "chart-3",
  "chart-4",
  "chart-5",
  "sidebar",
  "sidebar-foreground",
  "sidebar-primary",
  "sidebar-primary-foreground",
  "sidebar-accent",
  "sidebar-accent-foreground",
  "sidebar-border",
  "sidebar-ring",
  "radius",
  "spacing",
] as const satisfies readonly ThemeTokenKey[];

export function applyThemeTokens(element: HTMLElement, tokens: ThemeTokens | Record<string, string>) {
  for (const key of themeTokenKeys) {
    const value = tokens[key];

    if (value == null) {
      continue;
    }

    element.style.setProperty(`--${key}`, value);
  }
}

export function applyCssVariables(element: HTMLElement, variables: Record<string, string>) {
  for (const [key, value] of Object.entries(variables)) {
    const property = key.startsWith("--") ? key : `--${key}`;
    element.style.setProperty(property, value);
  }
}
