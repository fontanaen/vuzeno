import type { ThemeTokenKey } from "./types";

export type EditableTokenGroup = "color" | "shape";

export type EditableToken = {
  key: ThemeTokenKey;
  label: string;
  group: EditableTokenGroup;
};

export const editableTokens = [
  { key: "background", label: "Background", group: "color" },
  { key: "primary", label: "Primary", group: "color" },
  { key: "secondary", label: "Secondary", group: "color" },
  { key: "destructive", label: "Destructive", group: "color" },
  { key: "muted", label: "Muted", group: "color" },
  { key: "accent", label: "Accent", group: "color" },
  { key: "card", label: "Card", group: "color" },
  { key: "radius", label: "Radius", group: "shape" },
] as const satisfies readonly EditableToken[];

export type EditableTokenKey = (typeof editableTokens)[number]["key"];

export const editableTokenKeys = editableTokens.map((token) => token.key);
