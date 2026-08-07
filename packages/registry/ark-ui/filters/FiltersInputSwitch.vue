<script setup lang="ts">
import { Button } from "@vuzeno/registry/ui/button";
import { Switch } from "@vuzeno/registry/ui/switch";
import { computed } from "vue";
import { injectFiltersContext } from "./context";
import type { BooleanField } from "./field";

const modelValue = defineModel<unknown>();

const props = defineProps<{
  field: BooleanField;
}>();

const { variant } = injectFiltersContext();

const trueValue = computed(() => props.field.trueValue ?? true);
const falseValue = computed(() => props.field.falseValue ?? false);

const isOn = computed<boolean>({
  get: () => modelValue.value === trueValue.value,
  set: (next) => {
    modelValue.value = next ? trueValue.value : falseValue.value;
  },
});
</script>

<template>
  <Button :variant="variant" class="h-auto px-3">
    <Switch
      v-model="isOn"
      class="h-5 w-10 **:data-[slot=switch-thumb]:size-4!"
    />
  </Button>
</template>
