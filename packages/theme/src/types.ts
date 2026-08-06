export type ThemeMode = "light" | "dark";

export type ThemeTokenKey =
  | "background"
  | "foreground"
  | "card"
  | "card-foreground"
  | "popover"
  | "popover-foreground"
  | "primary"
  | "primary-foreground"
  | "secondary"
  | "secondary-foreground"
  | "muted"
  | "muted-foreground"
  | "accent"
  | "accent-foreground"
  | "destructive"
  | "destructive-foreground"
  | "border"
  | "input"
  | "ring"
  | "chart-1"
  | "chart-2"
  | "chart-3"
  | "chart-4"
  | "chart-5"
  | "sidebar"
  | "sidebar-foreground"
  | "sidebar-primary"
  | "sidebar-primary-foreground"
  | "sidebar-accent"
  | "sidebar-accent-foreground"
  | "sidebar-border"
  | "sidebar-ring"
  | "radius"
  | "spacing";

export type ThemeTokens = Record<ThemeTokenKey, string>;

export type ThemeTokenOverrides = Partial<ThemeTokens>;

export type ThemeOverrides = {
  light?: ThemeTokenOverrides;
  dark?: ThemeTokenOverrides;
};

export type ThemePreset = {
  id: string;
  label: string;
  primary: string;
  light: ThemeTokenOverrides;
  dark: ThemeTokenOverrides;
};

export type ResolveThemeInput = {
  presetId: string;
  mode: ThemeMode;
  overrides?: ThemeOverrides;
};
