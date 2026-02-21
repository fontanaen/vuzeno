<script setup lang="ts">
import { watchImmediate } from "@vueuse/core";
import { type CountryCode } from "libphonenumber-js";
import { type HTMLAttributes, ref } from "vue";
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";
import { cn } from "@/lib/utils";
import { phoneFieldVariants } from ".";
import { injectPhoneFieldContext } from "./PhoneField.vue";
import {
  countDigitsBefore,
  countPrefixDigitsAdded,
  findPositionAfterNthDigit,
  findPreviousDigitIndex,
  formatPhoneNumber,
  isFormattingCharacter,
  type PhoneFormat,
  parsePhone,
  removeDigitAtIndex,
  sanitizePhoneInput,
} from "./utils";

const props = defineProps<{
  placeholder?: string;
  disabled?: boolean;
  class?: HTMLAttributes["class"];
}>();

const { rawValue, countryCode, format, size, disabled } = injectPhoneFieldContext()!;

const formattedPhone = ref("");

function getFormattedValue(value: string, country: CountryCode, phoneFormat: PhoneFormat): string {
  const sanitized = sanitizePhoneInput(value);
  const parsed = parsePhone(sanitized, country);
  return formatPhoneNumber(parsed, country, phoneFormat) ?? sanitized;
}

function calculateNewCursorPosition(oldValue: string, newValue: string, oldCursorPos: number, sanitized: string): number {
  const digitsBeforeCursor = countDigitsBefore(oldValue, oldCursorPos);
  const prefixDigitsAdded = countPrefixDigitsAdded(sanitized, newValue);
  return findPositionAfterNthDigit(newValue, digitsBeforeCursor + prefixDigitsAdded);
}

function onInput(event: Event) {
  const input = event.target as HTMLInputElement;
  const cursorPos = input.selectionStart ?? 0;
  const oldValue = input.value;

  const sanitized = sanitizePhoneInput(oldValue);
  const formatted = getFormattedValue(sanitized, countryCode.value, format.value);

  const newCursorPos = calculateNewCursorPosition(oldValue, formatted, cursorPos, sanitized);

  input.value = formatted;
  input.setSelectionRange(newCursorPos, newCursorPos);

  const parsed = parsePhone(sanitized, countryCode.value);
  rawValue.value = parsed?.number ?? sanitized;
}

function onKeyDown(event: KeyboardEvent) {
  if (event.key !== "Backspace") {
    return;
  }

  const input = event.target as HTMLInputElement;
  const pos = input.selectionStart ?? 0;

  if (pos === 0) {
    return;
  }

  const charBefore = input.value[pos - 1];

  if (charBefore && !isFormattingCharacter(charBefore)) {
    return;
  }

  event.preventDefault();

  const previousDigitIndex = findPreviousDigitIndex(input.value, pos);

  if (previousDigitIndex === -1) {
    return;
  }

  const digitsBeforeTarget = countDigitsBefore(input.value, previousDigitIndex);
  const sanitized = sanitizePhoneInput(input.value);
  const newSanitized = removeDigitAtIndex(sanitized, digitsBeforeTarget);

  const formatted = getFormattedValue(newSanitized, countryCode.value, format.value);
  const newCursorPos = findPositionAfterNthDigit(formatted, digitsBeforeTarget);

  input.value = formatted;
  input.setSelectionRange(newCursorPos, newCursorPos);

  const parsed = parsePhone(newSanitized, countryCode.value);
  rawValue.value = parsed?.number ?? newSanitized;
}

watchImmediate(rawValue, (newVal) => {
  formattedPhone.value = getFormattedValue(newVal ?? "", countryCode.value, format.value);
});
</script>

<template>
  <InputGroup :class="cn(phoneFieldVariants({ size }))">
    <InputGroupInput
      type="tel"
      inputmode="tel"
      :model-value="formattedPhone"
      :placeholder="placeholder"
      :disabled="props.disabled || disabled"
      :class="props.class"
      @input="onInput($event)"
      @keydown="onKeyDown($event)"
    />

    <slot />
  </InputGroup>
</template>