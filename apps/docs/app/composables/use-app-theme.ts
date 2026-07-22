import { useLocalStorage } from "@vueuse/core";
import { appThemeStorageKey, defaultAppThemeId, normalizeAppThemeId, type AppThemeId } from "~/lib/themes";
import { transitionTheme } from "~/lib/transition-theme";

function applyAppTheme(themeId: AppThemeId) {
  if (!import.meta.client) {
    return;
  }

  document.documentElement.dataset.theme = themeId;
}

export function useAppTheme() {
  const storedTheme = useLocalStorage<string>(appThemeStorageKey, defaultAppThemeId);

  const theme = computed<AppThemeId>({
    get() {
      return normalizeAppThemeId(storedTheme.value);
    },
    set(themeId) {
      storedTheme.value = themeId;
    },
  });

  watch(theme, (themeId) => {
    applyAppTheme(themeId);
  }, { immediate: true });

  function setTheme(themeId: AppThemeId) {
    transitionTheme(() => {
      theme.value = themeId;
    });
  }

  return {
    theme,
    setTheme,
  };
}
