import { baseThemeTokens } from "./base";
import { getAppThemePreset } from "./presets";
import type { ResolveThemeInput, ThemeTokens } from "./types";

export function resolveTheme(input: ResolveThemeInput): ThemeTokens {
  const preset = getAppThemePreset(input.presetId);
  const modeOverrides = input.overrides?.[input.mode];

  return {
    ...baseThemeTokens,
    ...preset[input.mode],
    ...modeOverrides,
  };
}
