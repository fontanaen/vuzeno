<script setup lang="ts">
import { cn } from "@vuzeno/ui/lib/utils";
import { DialogContent, DialogOverlay, DialogPortal } from "reka-ui";
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <DialogPortal>
    <DialogOverlay class="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
    <DialogContent
      data-slot="menu-stack-content"
      :class="cn(
        'fixed px-4 bottom-3 w-screen z-50', 
        'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-bottom-1/2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-bottom-1/2',
        props.class
      )"
    >
      <slot />
    </DialogContent>
  </DialogPortal>
</template>