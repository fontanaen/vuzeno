import { appThemeStorageKey, normalizeAppThemeId } from "~/lib/themes";

export default defineNuxtPlugin(() => {
  const storedTheme = localStorage.getItem(appThemeStorageKey);
  document.documentElement.dataset.theme = normalizeAppThemeId(storedTheme);
});
