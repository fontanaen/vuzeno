import { applyCssVariables, applyThemeTokens, defaultAppThemeId, normalizeAppThemeId, resolveTheme, type ThemeMode } from "@vuzeno/theme";
import { getDocsThemeExtensions } from "~/lib/theme/docs-extensions";
import { parseThemeOverrides } from "~/lib/theme/fouc";
import { appThemeOverridesStorageKey, appThemeStorageKey } from "~/lib/theme/storage";

export default defineNuxtPlugin(() => {
  const storedTheme = localStorage.getItem(appThemeStorageKey);
  const presetId = normalizeAppThemeId(storedTheme);
  const mode: ThemeMode = document.documentElement.classList.contains("dark") ? "dark" : "light";
  const overrides = parseThemeOverrides(localStorage.getItem(appThemeOverridesStorageKey));

  document.documentElement.dataset.theme = presetId || defaultAppThemeId;

  const tokens = resolveTheme({ presetId, mode, overrides });
  applyThemeTokens(document.documentElement, tokens);
  applyCssVariables(document.documentElement, getDocsThemeExtensions(presetId, mode));
});
