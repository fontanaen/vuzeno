import { useLocalStorage } from "@vueuse/core";
import {
  type AppThemeId,
  applyCssVariables,
  applyThemeTokens,
  defaultAppThemeId,
  type EditableTokenKey,
  normalizeAppThemeId,
  resolveTheme,
  type ThemeMode,
  type ThemeOverrides,
  type ThemeTokenOverrides,
} from "@vuzeno/theme";
import { getDocsThemeExtensions } from "~/lib/theme/docs-extensions";
import { parseThemeOverrides } from "~/lib/theme/fouc";
import { appThemeOverridesStorageKey, appThemeStorageKey } from "~/lib/theme/storage";
import { transitionTheme } from "~/lib/transition-theme";

function applyResolvedTheme(presetId: AppThemeId, mode: ThemeMode, overrides: ThemeOverrides) {
  if (!import.meta.client) {
    return;
  }

  const root = document.documentElement;
  root.dataset.theme = presetId;

  const tokens = resolveTheme({ presetId, mode, overrides });
  applyThemeTokens(root, tokens);
  applyCssVariables(root, getDocsThemeExtensions(presetId, mode));
}

function readColorMode(): ThemeMode {
  if (!import.meta.client) {
    return "light";
  }

  if (document.documentElement.classList.contains("dark")) {
    return "dark";
  }

  return "light";
}

export function useAppTheme() {
  const colorMode = useColorMode();
  const storedTheme = useLocalStorage<string>(appThemeStorageKey, defaultAppThemeId);
  const storedOverrides = useLocalStorage<string>(appThemeOverridesStorageKey, "{}");

  const theme = computed<AppThemeId>({
    get() {
      return normalizeAppThemeId(storedTheme.value);
    },
    set(themeId) {
      storedTheme.value = themeId;
    },
  });

  const overrides = computed<ThemeOverrides>({
    get() {
      return parseThemeOverrides(storedOverrides.value);
    },
    set(value) {
      storedOverrides.value = JSON.stringify({
        light: value.light ?? {},
        dark: value.dark ?? {},
      });
    },
  });

  const mode = computed<ThemeMode>(() => {
    if (colorMode.value === "dark") {
      return "dark";
    }

    if (colorMode.value === "light") {
      return "light";
    }

    return readColorMode();
  });

  const resolvedTokens = computed(() => {
    return resolveTheme({
      presetId: theme.value,
      mode: mode.value,
      overrides: overrides.value,
    });
  });

  const hasOverrides = computed(() => {
    const modeOverrides = overrides.value[mode.value];
    return Boolean(modeOverrides && Object.keys(modeOverrides).length > 0);
  });

  watch(
    [theme, overrides, mode],
    ([themeId, nextOverrides, nextMode]) => {
      applyResolvedTheme(themeId, nextMode, nextOverrides);
    },
    { immediate: true, deep: true },
  );

  function setTheme(themeId: AppThemeId) {
    transitionTheme(() => {
      theme.value = themeId;
      overrides.value = {};
    });
  }

  function setToken(key: EditableTokenKey, value: string) {
    const nextModeOverrides: ThemeTokenOverrides = {
      ...overrides.value[mode.value],
      [key]: value,
    };

    overrides.value = {
      ...overrides.value,
      [mode.value]: nextModeOverrides,
    };
  }

  function resetOverrides() {
    transitionTheme(() => {
      overrides.value = {
        ...overrides.value,
        [mode.value]: {},
      };
    });
  }

  return {
    theme,
    mode,
    overrides,
    resolvedTokens,
    hasOverrides,
    setTheme,
    setToken,
    resetOverrides,
  };
}
