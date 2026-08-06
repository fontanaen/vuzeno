import type { AppThemeId, ThemeMode } from "@vuzeno/theme";

export type DocsThemeExtensionTokens = {
  surface: string;
  "surface-foreground": string;
  code: string;
  "code-foreground": string;
  "code-highlight": string;
  "code-number": string;
  selection: string;
  "selection-foreground": string;
};

const docsThemeExtensions = {
  shadcn: {
    light: {
      surface: "oklch(0.98 0 0)",
      "surface-foreground": "oklch(0.145 0 0)",
      code: "oklch(0.98 0 0)",
      "code-foreground": "oklch(0.145 0 0)",
      "code-highlight": "oklch(0.27 0 0)",
      "code-number": "oklch(0.56 0 0)",
      selection: "oklch(50.329% 0.20654 29.223)",
      "selection-foreground": "oklch(1 0 0)",
    },
    dark: {
      surface: "oklch(0.2 0 0)",
      "surface-foreground": "oklch(0.708 0 0)",
      code: "oklch(0.2 0 0)",
      "code-foreground": "oklch(0.708 0 0)",
      "code-highlight": "oklch(39.102% 0.05772 86.149)",
      "code-number": "oklch(0.72 0 0)",
      selection: "oklch(0.922 0 0)",
      "selection-foreground": "oklch(0.205 0 0)",
    },
  },
  "amber-minimal": {
    light: {
      surface: "oklch(0.9846 0.0017 247.8389)",
      "surface-foreground": "oklch(0.2686 0 0)",
      code: "oklch(0.9846 0.0017 247.8389)",
      "code-foreground": "oklch(0.2686 0 0)",
      "code-highlight": "oklch(0.9869 0.0214 95.2774)",
      "code-number": "oklch(0.5510 0.0234 264.3637)",
      selection: "oklch(0.7686 0.1647 70.0804)",
      "selection-foreground": "oklch(0 0 0)",
    },
    dark: {
      surface: "oklch(0.2686 0 0)",
      "surface-foreground": "oklch(0.7155 0 0)",
      code: "oklch(0.2686 0 0)",
      "code-foreground": "oklch(0.7155 0 0)",
      "code-highlight": "oklch(0.4732 0.1247 46.2007)",
      "code-number": "oklch(0.7155 0 0)",
      selection: "oklch(0.7686 0.1647 70.0804)",
      "selection-foreground": "oklch(0 0 0)",
    },
  },
  caffeine: {
    light: {
      surface: "oklch(0.9521 0 0)",
      "surface-foreground": "oklch(0.2435 0 0)",
      code: "oklch(0.9521 0 0)",
      "code-foreground": "oklch(0.2435 0 0)",
      "code-highlight": "oklch(0.9310 0 0)",
      "code-number": "oklch(0.5032 0 0)",
      selection: "oklch(0.4341 0.0392 41.9938)",
      "selection-foreground": "oklch(1.0000 0 0)",
    },
    dark: {
      surface: "oklch(0.2134 0 0)",
      "surface-foreground": "oklch(0.7699 0 0)",
      code: "oklch(0.2134 0 0)",
      "code-foreground": "oklch(0.7699 0 0)",
      "code-highlight": "oklch(0.2850 0 0)",
      "code-number": "oklch(0.7699 0 0)",
      selection: "oklch(0.9247 0.0524 66.1732)",
      "selection-foreground": "oklch(0.2029 0.0240 200.1962)",
    },
  },
  claude: {
    light: {
      surface: "oklch(0.9341 0.0153 90.2390)",
      "surface-foreground": "oklch(0.3438 0.0269 95.7226)",
      code: "oklch(0.9341 0.0153 90.2390)",
      "code-foreground": "oklch(0.3438 0.0269 95.7226)",
      "code-highlight": "oklch(0.9245 0.0138 92.9892)",
      "code-number": "oklch(0.6059 0.0075 97.4233)",
      selection: "oklch(0.6171 0.1375 39.0427)",
      "selection-foreground": "oklch(1.0000 0 0)",
    },
    dark: {
      surface: "oklch(0.3085 0.0035 106.6039)",
      "surface-foreground": "oklch(0.7713 0.0169 99.0657)",
      code: "oklch(0.3085 0.0035 106.6039)",
      "code-foreground": "oklch(0.7713 0.0169 99.0657)",
      "code-highlight": "oklch(0.2130 0.0078 95.4245)",
      "code-number": "oklch(0.7713 0.0169 99.0657)",
      selection: "oklch(0.6724 0.1308 38.7559)",
      "selection-foreground": "oklch(1.0000 0 0)",
    },
  },
  "mocha-mousse": {
    light: {
      surface: "oklch(0.8903 0.0278 49.5658)",
      "surface-foreground": "oklch(0.4063 0.0255 40.3627)",
      code: "oklch(0.8903 0.0278 49.5658)",
      "code-foreground": "oklch(0.4063 0.0255 40.3627)",
      "code-highlight": "oklch(0.8502 0.0389 49.0874)",
      "code-number": "oklch(0.5416 0.0512 37.2132)",
      selection: "oklch(0.6083 0.0623 44.3588)",
      "selection-foreground": "oklch(1.0000 0 0)",
    },
    dark: {
      surface: "oklch(0.3291 0.0156 50.8936)",
      "surface-foreground": "oklch(0.7575 0.0380 50.8610)",
      code: "oklch(0.3291 0.0156 50.8936)",
      "code-foreground": "oklch(0.7575 0.0380 50.8610)",
      "code-highlight": "oklch(0.4063 0.0255 40.3627)",
      "code-number": "oklch(0.7575 0.0380 50.8610)",
      selection: "oklch(0.7272 0.0539 52.3320)",
      "selection-foreground": "oklch(0.2721 0.0141 48.1783)",
    },
  },
  "dark-forge": {
    light: {
      surface: "oklch(0.9448 0.008 73.7424)",
      "surface-foreground": "oklch(0.2006 0.0138 34.3909)",
      code: "oklch(0.9448 0.008 73.7424)",
      "code-foreground": "oklch(0.2006 0.0138 34.3909)",
      "code-highlight": "oklch(0.9097 0.0386 60.9712)",
      "code-number": "oklch(0.5525 0.0155 53.167)",
      selection: "oklch(0.4732 0.1247 46.2007)",
      "selection-foreground": "oklch(1 0 0)",
    },
    dark: {
      surface: "oklch(0.1809 0.0054 39.3496)",
      "surface-foreground": "oklch(0.5525 0.0155 53.167)",
      code: "oklch(0.1809 0.0054 39.3496)",
      "code-foreground": "oklch(0.5525 0.0155 53.167)",
      "code-highlight": "oklch(0.2466 0.0259 60.9919)",
      "code-number": "oklch(0.5525 0.0155 53.167)",
      selection: "oklch(0.7023 0.0794 64.6432)",
      "selection-foreground": "oklch(0.1775 0.0291 63.0999)",
    },
  },
} as const satisfies Record<AppThemeId, Record<ThemeMode, DocsThemeExtensionTokens>>;

export function getDocsThemeExtensions(presetId: AppThemeId, mode: ThemeMode): DocsThemeExtensionTokens {
  return docsThemeExtensions[presetId][mode];
}
