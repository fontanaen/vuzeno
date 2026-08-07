<script setup lang="ts">
import { mergeProps } from "@zag-js/core";
import { computed } from "vue";
import { injectDialogCallerHostContext, provideDialogCallerContext } from "./context";
import type { DialogCallerCallEntry } from "./types";

const props = defineProps<{
  entry: DialogCallerCallEntry;
  layerIndex: number;
}>();

const host = injectDialogCallerHostContext();

const phase = computed(() => props.entry.phase);

provideDialogCallerContext({
  props: props.entry.props,
  phase,
  resolve(data) {
    host.value.resolve(props.entry.id, data);
  },
  reject(reason) {
    host.value.reject(props.entry.id, reason);
  },
  id: props.entry.id,
});

const entryProps = computed(() =>
  mergeProps(
    host.value.getEntryProps({
      callId: props.entry.id,
      layerIndex: props.layerIndex,
    }),
  ),
);
</script>

<template>
  <div v-bind="entryProps" data-slot="dialog-caller-entry">
    <component :is="entry.component" v-bind="entry.props" />
  </div>
</template>
