<script setup lang="ts">
import { computed } from "vue";
import { provideDialogCallerContext } from "./context";
import { rejectDialogCallerCall, resolveDialogCallerCall } from "./store";
import type { DialogCallerCallEntry } from "./types";

const props = defineProps<{
  entry: DialogCallerCallEntry;
  layerIndex: number;
}>();

provideDialogCallerContext({
  props: props.entry.props,
  phase: props.entry.phase,
  resolve(data) {
    resolveDialogCallerCall(props.entry.id, data);
  },
  reject(reason) {
    rejectDialogCallerCall(props.entry.id, reason);
  },
  id: props.entry.id,
});

const layerStyle = computed(() => ({
  "--layer-index": String(props.layerIndex),
}));
</script>

<template>
  <div :style="layerStyle" data-slot="dialog-caller-entry">
    <component :is="entry.component" v-bind="entry.props" />
  </div>
</template>
