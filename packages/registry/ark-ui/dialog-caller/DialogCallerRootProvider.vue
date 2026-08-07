<script setup lang="ts">
import { computed, toValue } from "vue";
import { provideDialogCallerHostContext } from "./context";
import type { DialogCallerApi } from "./types";
import type { UseDialogCallerHostReturn } from "./use-dialog-caller-host";

const props = defineProps<{
  value: DialogCallerApi | UseDialogCallerHostReturn;
}>();

const dialogCaller = computed(() => toValue(props.value));

provideDialogCallerHostContext(dialogCaller);
</script>

<template>
  <div data-slot="dialog-caller" :data-mounted="dialogCaller.mounted || undefined">
    <slot />
  </div>
</template>
