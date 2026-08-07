<script setup lang="ts">
import { mergeProps } from "@zag-js/core";
import { cn } from "cnfast";
import { computed, type HTMLAttributes, onMounted, onUnmounted, useId } from "vue";
import { provideDialogCallerHostContext } from "./context";
import DialogCallerEntry from "./DialogCallerEntry.vue";
import { useDialogCallerHost } from "./use-dialog-caller-host";

const props = defineProps<{
  class?: HTMLAttributes["class"];
  defaultExitDuration?: number;
}>();

const id = useId();

const dialogCaller = useDialogCallerHost(
  computed(() => ({
    id,
    defaultExitDuration: props.defaultExitDuration,
  })),
);

provideDialogCallerHostContext(dialogCaller);

const hostProps = computed(() =>
  mergeProps(dialogCaller.value.getHostProps(), {
    class: cn(props.class),
  }),
);

onMounted(() => {
  dialogCaller.value.mountHost();
});

onUnmounted(() => {
  dialogCaller.value.unmountHost();
});
</script>

<template>
  <Teleport to="body">
    <div v-bind="hostProps" data-slot="dialog-caller-host">
      <DialogCallerEntry
        v-for="(entry, index) in dialogCaller.stack"
        :key="entry.id"
        :entry="entry"
        :layer-index="index"
      />
    </div>
  </Teleport>
</template>
