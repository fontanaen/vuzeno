<script setup lang="ts">
import { ButtonGroup } from "@vuzeno/ui/components/button-group";
import type { DialogContentProps } from "reka-ui";
import { DialogContent, DialogOverlay, DialogPortal, useForwardProps } from "reka-ui";
import { injectActionSheetContext } from "./ActionSheet.vue";

const props = defineProps<DialogContentProps>();

const forwarded = useForwardProps(props);

const context = injectActionSheetContext();
</script>

<template>
  <DialogPortal>
    <DialogOverlay v-if="context.showOverlay" @click.stop.prevent="context.onClose()" class="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
    <DialogContent
      v-bind="forwarded"
      class="action-sheet-dialog-content px-4 fixed left-0 right-0 mx-auto z-50 grid w-screen max-w-lg duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-97 data-[state=open]:zoom-in-97 data-[state=closed]:slide-out-to-bottom-1/2 data-[state=open]:slide-in-from-bottom-1/2 sm:rounded-lg"
    >
      <ButtonGroup orientation="vertical" class="w-full has-[>[data-slot=button-group]]:gap-4">
        <slot />
      </ButtonGroup>
    </DialogContent>
  </DialogPortal>
</template>

<style scoped>
/* Handle safe area inset bottom (Safari) */
.action-sheet-dialog-content {
  bottom: calc(env(safe-area-inset-bottom, 0px) + 10rem);
}

@supports (bottom: calc(1px * sign(1px))) {
  .action-sheet-dialog-content {
    bottom: calc(
      1rem + env(safe-area-inset-bottom, 0px) + 4rem * sign(env(safe-area-inset-bottom, 0px))
    );
  }
}
</style>