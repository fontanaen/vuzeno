<script setup lang="ts">
import { Dialog, type DialogContentProps } from "@ark-ui/vue/dialog";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "cnfast";
import type { HTMLAttributes } from "vue";
import { injectActionSheetContext } from "./api";

const props = defineProps<
  DialogContentProps & {
    class?: HTMLAttributes["class"];
  }
>();

const contentProps = reactiveOmit(props, "class");

const context = injectActionSheetContext();
</script>

<template>
  <Teleport to="body">
    <Dialog.Backdrop
      v-if="context.showOverlay.value"
      :class="cn('fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0')"
      @click.stop.prevent="context.onClose()"
    />
    <Dialog.Positioner
      :class="cn('action-sheet-positioner fixed w-screen max-w-lg mx-auto inset-x-0 bottom-0 z-50 flex items-end justify-center px-4')"
    >
      <Dialog.Content
        v-bind="contentProps"
        :class="cn('w-full duration-300 outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-97 data-[state=open]:zoom-in-97 data-[state=closed]:slide-out-to-bottom-1/2 data-[state=open]:slide-in-from-bottom-1/2 sm:rounded-lg space-y-4', props.class)"
      >
        <slot />
      </Dialog.Content>
    </Dialog.Positioner>
  </Teleport>
</template>

<style scoped>
.action-sheet-positioner {
  bottom: calc(env(safe-area-inset-bottom, 0px) + 10rem);
}

@supports (bottom: calc(1px * sign(1px))) {
  .action-sheet-positioner {
    bottom: calc(
      1rem + env(safe-area-inset-bottom, 0px) + 4rem * sign(env(safe-area-inset-bottom, 0px))
    );
  }
}
</style>
