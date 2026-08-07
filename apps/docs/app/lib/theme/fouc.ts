import { appThemes, baseThemeTokens, defaultAppThemeId, type ThemeMode, type ThemeOverrides, type ThemeTokenOverrides, type ThemeTokens } from "@vuzeno/theme";
import { getDocsThemeExtensions } from "./docs-extensions";
import { appThemeOverridesStorageKey, appThemeStorageKey } from "./storage";

type FoucPresetPayload = {
  id: string;
  light: ThemeTokenOverrides;
  dark: ThemeTokenOverrides;
};

function buildFoucPayload() {
  const presets: FoucPresetPayload[] = appThemes.map((theme) => ({
    id: theme.id,
    light: theme.light,
    dark: theme.dark,
  }));

  const extensions: Record<string, Record<ThemeMode, Record<string, string>>> = {};

  for (const theme of appThemes) {
    extensions[theme.id] = {
      light: getDocsThemeExtensions(theme.id, "light"),
      dark: getDocsThemeExtensions(theme.id, "dark"),
    };
  }

  return {
    storageKey: appThemeStorageKey,
    overridesKey: appThemeOverridesStorageKey,
    defaultId: defaultAppThemeId,
    base: baseThemeTokens as ThemeTokens,
    presets,
    extensions,
  };
}

export function getAppThemeFoucScript() {
  const payload = buildFoucPayload();
  const serialized = JSON.stringify(payload);

  return `(function(){try{var d=${serialized};var root=document.documentElement;var stored=localStorage.getItem(d.storageKey);if(stored==="default")stored="shadcn";if(stored==="amber")stored="amber-minimal";var id=stored&&d.presets.some(function(p){return p.id===stored})?stored:d.defaultId;root.dataset.theme=id;var pref=localStorage.getItem("nuxt-color-mode");var mode=(pref==="dark"||(pref!=="light"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches))?"dark":"light";if(root.classList.contains("dark"))mode="dark";var preset=d.presets.find(function(p){return p.id===id})||d.presets.find(function(p){return p.id===d.defaultId});var overrides={};try{overrides=JSON.parse(localStorage.getItem(d.overridesKey)||"{}")||{}}catch(e){}var modeOverrides=overrides[mode]||{};var tokens=Object.assign({},d.base,preset[mode],modeOverrides);var ext=(d.extensions[id]&&d.extensions[id][mode])||{};Object.assign(tokens,ext);for(var key in tokens){if(Object.prototype.hasOwnProperty.call(tokens,key)){root.style.setProperty("--"+key,tokens[key])}}}catch(e){document.documentElement.dataset.theme="${defaultAppThemeId}"}})()`;
}

export function parseThemeOverrides(raw: string | null | undefined): ThemeOverrides {
  if (!raw) {
    return {};
  }

  try {
    const parsed = JSON.parse(raw) as ThemeOverrides;
    return {
      light: parsed.light ?? {},
      dark: parsed.dark ?? {},
    };
  } catch {
    return {};
  }
}
