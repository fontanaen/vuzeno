<script setup lang="ts">
import { Button } from "@vuetella/ui/components/button";
import { Separator } from "@vuetella/ui/components/separator";
import { useMediaQuery, useToggle } from "@vueuse/core";
import { type FunctionalComponent, useSlots } from "vue";

const props = defineProps<{
  component: FunctionalComponent;
}>();

const slots = useSlots();

const isMobile = useMediaQuery("(max-width: 768px)");
const [isOpen, toggleOpen] = useToggle(false);
</script>

<template>
  <div class="flex flex-col gap-0 border border-border rounded-xl overflow-hidden">
    <div class="flex items-center justify-center bg-background px-4 py-12 not-prose min-h-40">
      <component :is="component" />
    </div>
    <template v-if="slots.default">
      <Separator />
      <div class="max-h-96 overflow-hidden">
        <div v-if="isMobile" :class="isOpen ? 'h-full' : 'h-24 relative'">
          <Button class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10" variant="secondary" @click="toggleOpen()">
            Show code
          </Button>
          <div :class="isOpen ? 'opacity-100' : 'opacity-30 pointer-events-none'">
            <slot />
          </div>
        </div>
        <div v-else>
          <slot />
        </div>
      </div>
    </template>
  </div>
</template>