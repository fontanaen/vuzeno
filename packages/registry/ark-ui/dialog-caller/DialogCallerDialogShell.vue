<script setup lang="ts">
import { computed } from "vue";
import { Dialog } from "../dialog";
import { useDialogCallerContext } from "./use-dialog-caller";

const call = useDialogCallerContext();

const open = computed(() => call.phase.value === "open");

function onOpenChange(details: { open: boolean }) {
  if (!details.open && call.phase.value === "open") {
    call.reject();
  }
}
</script>

<template>
  <Dialog.Root :open="open" @open-change="onOpenChange" data-slot="dialog-caller-shell">
    <slot />
  </Dialog.Root>
</template>
