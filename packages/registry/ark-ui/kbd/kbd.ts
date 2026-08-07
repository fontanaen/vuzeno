import ArkKbd from "./Kbd.vue";
import KbdGroup from "./KbdGroup.vue";

export const Kbd = {
  Item: ArkKbd,
  Group: KbdGroup,
} as const;
