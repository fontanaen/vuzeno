import FormatByte from "./FormatByte.vue";
import FormatNumber from "./FormatNumber.vue";
import FormatRelativeTime from "./FormatRelativeTime.vue";
import FormatTime from "./FormatTime.vue";

export const Format = {
  Byte: FormatByte,
  Number: FormatNumber,
  RelativeTime: FormatRelativeTime,
  Time: FormatTime,
} as const;
