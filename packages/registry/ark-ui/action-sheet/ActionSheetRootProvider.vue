<script setup lang="ts">
import { computed, toValue } from "vue";
import { provideActionSheetContext } from "./context";
import type { ActionSheetApi } from "./types";
import type { UseActionSheetReturn } from "./use-action-sheet";

const props = defineProps<{
  value: ActionSheetApi | UseActionSheetReturn;
}>();

const actionSheet = computed(() => toValue(props.value));

provideActionSheetContext(actionSheet);
</script>

<template>
  <div data-slot="action-sheet" :data-state="actionSheet.open ? 'open' : 'closed'">
    <slot />
  </div>
</template>
