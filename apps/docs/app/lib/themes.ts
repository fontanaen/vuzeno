export const appThemes = [
  { id: "shadcn", label: "Shadcn", primary: "oklch(1 0 0)" },
  { id: "amber", label: "Amber", primary: "oklch(0.7286 0.1823 48.7057)" },
  { id: "olive", label: "Olive", primary: "oklch(0.6883 0.1431 78.35)" },
  { id: "engage-xp", label: "Engage XP", primary: "oklch(0.5817 0.2576 306.7484)" },
  { id: "dark-forge", label: "Dark Forge", primary: "oklch(0.1433 0.0059 41.0395)" },
] as const;

export type AppThemeId = (typeof appThemes)[number]["id"];

export const defaultAppThemeId: AppThemeId = "dark-forge";

export const appThemeStorageKey = "vuzeno-theme";

const legacyAppThemeIds = {
  default: "shadcn",
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

export function getAppThemeFoucScript() {
  return `(function(){try{var t=localStorage.getItem("${appThemeStorageKey}");if(t==="default")t="shadcn";document.documentElement.dataset.theme=t||"${defaultAppThemeId}"}catch(e){document.documentElement.dataset.theme="${defaultAppThemeId}"}})()`;
}
