import { amberMinimalPreset } from "./amber-minimal";
import { caffeinePreset } from "./caffeine";
import { claudePreset } from "./claude";
import { darkForgePreset } from "./dark-forge";
import { mochaMoussePreset } from "./mocha-mousse";
import { shadcnPreset } from "./shadcn";

export const appThemes = [
  shadcnPreset,
  amberMinimalPreset,
  caffeinePreset,
  claudePreset,
  mochaMoussePreset,
  darkForgePreset,
] as const;

export type AppThemeId = (typeof appThemes)[number]["id"];

export const defaultAppThemeId: AppThemeId = "dark-forge";

const legacyAppThemeIds = {
  default: "shadcn",
  amber: "amber-minimal",
} as const satisfies Record<string, AppThemeId>;

export function normalizeAppThemeId(stored: string | null | undefined): AppThemeId {
  if (!stored) {
    return defaultAppThemeId;
  }

  if (stored in legacyAppThemeIds) {
    return legacyAppThemeIds[stored as keyof typeof legacyAppThemeIds];
  }

  if (appThemes.some((theme) => theme.id === stored)) {
    return stored as AppThemeId;
  }

  return defaultAppThemeId;
}

export function getAppThemePreset(presetId: string) {
  const normalizedId = normalizeAppThemeId(presetId);
  const preset = appThemes.find((theme) => theme.id === normalizedId);

  if (!preset) {
    return darkForgePreset;
  }

  return preset;
}

export {
  amberMinimalPreset,
  caffeinePreset,
  claudePreset,
  darkForgePreset,
  mochaMoussePreset,
  shadcnPreset,
};
